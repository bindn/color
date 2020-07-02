import Hex from './hex';
import Rgb from './rgb';
import {Names, Name } from './names';

class ColorMap {

  public static Hex = class {

    public static toName(hex: string): Name {
      let _name = new Name('', '');

      let val = Hex.longCode(hex);

      let color = Names.list().default.find(f => f.hex === val.toUpperCase());

      if (color !== undefined) {
        _name = color;
      }

      return _name;
    }

    public static toRgb(value: string): Rgb {
      let _rgb = new Rgb(-1, -1, -1);

      let val = Hex.longCode(value);

      if (val === "") return _rgb;

      _rgb.red = this.toRgbValue(val, 0, 2);
      _rgb.green = this.toRgbValue(val, 2, 4);
      _rgb.blue = this.toRgbValue(val, 4, 6);

      return _rgb;
    }

    private static toRgbValue(value: string, startIndex: number, endIndex: number): number {
      return parseInt(value.substring(startIndex, endIndex), 16);
    }
  }

  public static Rgb = class {

    public static toName(red: number, green: number, blue: number): Name {
      let hex = ColorMap.Rgb.toHex(red, green, blue);
      return ColorMap.Hex.toName(hex.value);
    }

    public static toHex(red: number, green: number, blue: number): Hex {

      if (!Rgb.isValid(red, green, blue)) return new Hex('');

      const rHex = this.valueToHex(red);
      const gHex = this.valueToHex(green);
      const bHex = this.valueToHex(blue);

      return new Hex(rHex + gHex + bHex);
    }

    private static valueToHex(val: number): string {
      let valHex = val.toString(16);
      return valHex.length == 1 ? '0' + valHex : valHex;
    }
  }
}

export default ColorMap;