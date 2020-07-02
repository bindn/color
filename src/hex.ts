class Hex {

  private _value = "";

  public constructor (value: string){
    this._value = value;
  }

  public get value():string {return this._value;}

  public static isValid(value: string): boolean {
    return this.isLongCode(value) || this.isShortCode(value);
  }

  public static format(value: string): string {
    if(!this.isValid(value)) return '';
    return "#" + this.cleanse(value);
  }

  public static cleanse(value: string): string {
    const invalidCharacters = /[^0-9A-Fa-f]/;
    return value.replace(invalidCharacters, "");
  }

  public static longCode(value: string): string {
    if (!this.isValid(value)) return "";

    let val = Hex.cleanse(value);

    if (!this.isLongCode(val)) val = this.toLongCode(val);

    return val;
  }

  public static shortCode(value: string): string {
    if (!this.isValid(value)) return "";

    let val = Hex.cleanse(value);

    if (!this.isShortCode(val)) val = this.toShortCode(val);

    return val;
  }

  private static isLongCode(value: string): boolean {
    // Source: https://stackoverflow.com/a/8027444
    // ^           -> match beginning
    // #           -> a hash
    // ?           -> optional pound sign
    // [0-9A-Fa-f] -> any integer from 0 to 9 and any letter from A to F (upper or lower)
    // {6}         -> match 6 characters
    // $           -> match end
    // i           -> ignore case
    const validHexRegEx = /^#?[0-9A-Fa-f]{6}$/i;
    return validHexRegEx.test(value);
  }

  private static isShortCode(value: string): boolean {
    // Source: https://stackoverflow.com/a/8027444
    // ^           -> match beginning
    // #           -> a hash
    // ?           -> optional pound sign
    // [0-9A-Fa-f] -> any integer from 0 to 9 and any letter from A to F (upper or lower)
    // {3}         -> match 3 characters
    // $           -> match end
    // i           -> ignore case
    const validHexRegEx = /^#?([0-9A-Fa-f]{3})$/i;
    return validHexRegEx.test(value);
  }

  private static toLongCode(value: string): string {
    let result = "";

    Hex.cleanse(value).split("").forEach((c) => {
      result += c + c;
    });

    return result;
  }

  private static toShortCode(value: string): string {

    let _invalidPair = false;
    let _shortCode = "";

    for (let index = 0; index < 6; index += 2) {
      let pair = value.substring(index, index + 2);
      let chars = pair.split("");
      if (chars[0] !== chars[1]) _invalidPair = true;
      _shortCode += chars[0];
    }

    return _invalidPair ? "" : _shortCode;
  }
}

export default Hex;