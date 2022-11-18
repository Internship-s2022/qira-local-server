export class CustomError {
  status: number;
  message: string;
  error: boolean;

  constructor(status = 500, message: string, error: boolean) {
    this.status = status;
    this.message = message;
    this.error = error;
  }
}
