export class Alpaca {
  public id ?: number;
  public name: string;
  public age = 0;
  public height ?: number;

  constructor(
    options: string | Object
  ) {
    if (typeof options === 'string') {
      this.name = options;
    } else {
      Object.assign(this, options);
    }
  }
}
