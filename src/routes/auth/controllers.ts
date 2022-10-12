import { Request, Response } from 'express';

export const getAuthUser = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: 'User authenticated',
      data: { firstName: 'User', lastName: 'Authenticated' },
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};
