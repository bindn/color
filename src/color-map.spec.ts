import ColorMap from './color-map';
import theoretically from 'jest-theories';
import Hexes from '../tests/shared/hexes';
import Theory from '../tests/shared/theory';
import colorMapData from '../tests/shared/color-map';

describe('Hex Mappings', ()=>{

  describe('To Name', () => {

    const blackList = [{input:"#000"}, {input:"000"}, {input:"000000"}, {input:"#000000"}]
    theoretically('When {input} hex is converted to name then Black is returned', blackList, theory=>{
      const actual = ColorMap.Hex.toName(theory.input);
      expect(actual.value).toBe('Black');
    })

    test('When invalid hex is converted to name then empty string is returned',()=>{
      const actual = ColorMap.Hex.toName("%^$%#");
      expect(actual.value).toBe('');
    })
  })

  describe('To Rgb', () => {
    // long hex codes with hash tag
    const validHexesToRgbTheories = Hexes.longHexCodes.map(hex => { return new Theory(hex.long.full, hex.rgb); });

    // long hex codes without hash tag
    validHexesToRgbTheories.push(...Hexes.longHexCodes.map(hex => { return new Theory(hex.long.raw, hex.rgb); }));

    //short hex codes with hash tag
    validHexesToRgbTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.full, hex.rgb); }));

    //short hex codes without hash tag
    validHexesToRgbTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.raw, hex.rgb); }));

    theoretically('When a valid hex value of {input} is converted to rgb then red, green and blue are correct', validHexesToRgbTheories, theory => {
      const actual = ColorMap.Hex.toRgb(theory.input);
      expect(actual.red).toBe(theory.expected.r);
      expect(actual.green).toBe(theory.expected.g);
      expect(actual.blue).toBe(theory.expected.b);
    });

    const dirtyHexes = Hexes.invalidHexes.map(hex => { return new Theory(hex, ''); });
    theoretically('When an invalid hex value of {input} is converted to rgb then red, green and blue are correct', dirtyHexes, theory => {
      const actual = ColorMap.Hex.toRgb(theory.input);
      expect(actual.red).toBe(-1);
      expect(actual.green).toBe(-1);
      expect(actual.blue).toBe(-1);
    });
  })
})

describe('Rgb Mappings', ()=>{

  describe('To Name', () => {
    test('When rgb value is converted to name then name is correct',()=>{
      const actual = ColorMap.Rgb.toName(0,0,0);
      expect(actual.value).toBe('Black');
    })

    test('When invalid rgb value is converted to name then empty string is returned',()=>{
      const actual = ColorMap.Rgb.toName(-1, -1, -1);
      expect(actual.value).toBe('');
    })
  })

  describe('To Hex', () => {
    const validRgbList = colorMapData.map(color => { return new Theory(color.rgb, color.hex.long.raw); });
    theoretically('When a valid rgb of r:{input.r} g:{input.g} b:{input.b} is converted to hex then hex is correct and has hash tag', validRgbList, theory => {
      const actual = ColorMap.Rgb.toHex(theory.input.r, theory.input.g, theory.input.b);
      expect(actual.value).toBe(theory.expected);
    })

    const invalidRgbList = [
      { r: -1, g: -1, b: -1 },
      { r: -1, g: 0, b: 0 },
      { r: 0, g: -1, b: 0 },
      { r: 0, g: 0, b: -1 },
      { r: 256, g: 0, b: 0 },
      { r: 0, g: 256, b: 0 },
      { r: 0, g: 0, b: 256 },
      { r: 256, g: 256, b: 256 }
    ];
    theoretically('When an invalid rgb is converted to hex then an empty string is returned', invalidRgbList, theory => {
      const actual = ColorMap.Rgb.toHex(theory.r, theory.g, theory.b);
      expect(actual.value).toBe('');
    })
  })
})