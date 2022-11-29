import { Request, Response } from 'express';
import fetch from 'node-fetch';

import Settings from 'src/models/settings';

export const getExchangeRate = async (req: Request, res: Response) => {
  const settings = await Settings.find();
  if (settings) {
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

    try {
      const response = await fetch('https://api.estadisticasbcra.com/usd_of', {
        headers: {
          Authorization:
            'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg0MjEwMTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJnaW5hLnNjaGlhcHBhcGlldHJhQHJhZGl1bXJvY2tldC5jb20ifQ.dsKi-6AWNRXu3K7jv2rBG-U93RKI1luipXIEsOB0b8v9rd8dCENgJamWkJRt_iX64WYDoz1YGXXOT_yep8Gn1A',
        },
      });
      const data = await response.json();

      if (data) {
        data.reverse();
        await Settings.findByIdAndUpdate(
          { _id: settings[0]._id },
          { exchangeRate: { value: data[0].v, date: data[0].d } },
          { new: true },
        );
        return res.status(200).json({
          message: 'Showing exchange rate.',
          data: data[0],
          error: false,
        });
      }
    } catch (error: any) {
      return res.status(400).json({
        message: `Something went wrong: ${error.message}`,
        data: undefined,
        error: true,
      });
    }
  }
};
