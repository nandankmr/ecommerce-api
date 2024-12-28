export default class BadRequestError extends Error {
  public code: number;
  public errorCode?: number;

  constructor(message: string, errCode?: number) {
    super(message);

    this.code = 400;
    this.message = message;
    this.errorCode = errCode;
  }
}
