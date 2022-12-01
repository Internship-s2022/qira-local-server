import { Request, Response } from 'express';
import fetch from 'node-fetch';

import Settings from 'src/models/settings';

import { ExchangeRate } from './types';

export const getExchangeRate = async (req: Request, res: Response) => {
  try {
    const settings = await Settings.find();
    if (!settings) {
      return res.status(404).json({
        message: 'There are no settings.',
        data: undefined,
        error: true,
      });
    }
    const lastExchangeRate = settings[0].exchangeRate;
    const today = new Date();
    const yesterday = new Date(today.getTime());
    yesterday.setDate(today.getDate() - 1);

    if (lastExchangeRate.date === yesterday.toISOString().substring(0, 10)) {
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
      return res.status(404).json({
        message: 'Something went wrong ',
        data: undefined,
        error: true,
      });
    }
    const newExchangeRate = data.pop();
    if (!newExchangeRate) {
      return res.status(404).json({
        message: 'Theres no exchange rate.',
        data: undefined,
        error: true,
      });
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
  } catch (error: any) {
    return res.status(400).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};
