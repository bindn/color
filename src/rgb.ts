class Rgb {

  private _red:number;
  private _green:number;
  private _blue:number;

  public constructor(red: number, green: number, blue: number) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  public get red(): number { return this._red; }
  public set red(val: number) { this._red = val; }

  public get green(): number { return this._green; }
  public set green(val: number) { this._green = val; }

  public get blue(): number { return this._blue; }
  public set blue(val: number) { this._blue = val; }

  public static isValid(red: number, green: number, blue: number): boolean {
    return this.isValueValid(red) && this.isValueValid(green) && this.isValueValid(blue);
  }

  public static isValueValid(val: number): boolean {
    return val >= 0 && val <= 255;
  }
}

export default Rgb;