export class Paypal {
  env: string;
  constructor(n: string) {
    this.env = n;
  }
  init(): string {
    return this.env;
  }
}
