import { format, subDays } from 'date-fns';
import { Request, Response } from 'express';
import fetch from 'node-fetch';

import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Settings from 'src/models/settings';

import { ExchangeRate } from './types';

export const getExchangeRate = async (req: Request, res: Response) => {
  const settings = await Settings.find();
  if (!settings) {
    throw new CustomError(404, 'There are no settings.');
  }
  const lastExchangeRate = settings[0].exchangeRate;
  const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd');

  if (lastExchangeRate.date === yesterday) {
    return res.status(200).json({
      message: 'Showing exchange rate.',
      data: lastExchangeRate,
      error: false,
    });
  }
  const response = await fetch('https://api.estadisticasbcra.com/usd_of', {
    headers: {
      Authorization: process.env.TOKEN_BCRA || '',
    },
  });
  const data: ExchangeRate[] = await response.json();

  if (!data) {
    throw new CustomError(404, 'Something went wrong.');
  }
  const newExchangeRate = data.pop();
  if (!newExchangeRate) {
    throw new CustomError(404, 'Theres no exchange rate.');
  }
  await Settings.findByIdAndUpdate(
    { _id: settings[0]._id },
    { exchangeRate: { value: newExchangeRate.v, date: newExchangeRate.d } },
    { new: true },
  );
  return res.status(200).json({
    message: 'Showing exchange rate.',
    data: { value: newExchangeRate.v, date: newExchangeRate.d },
    error: false,
  });
};
