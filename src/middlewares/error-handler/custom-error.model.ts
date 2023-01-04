import { SubCodes } from 'src/interfaces';

export class CustomError {
  status: number;
  message: string;
  error?: boolean;
  subcode?: SubCodes;

  constructor(status = 500, message: string, error = true, subcode?: number) {
    this.status = status;
    this.message = message;
    this.error = error;
    this.subcode = subcode;
  }
}
