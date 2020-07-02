import Rgb from './rgb';
import theoretically from 'jest-theories';
import colorMap from '../tests/shared/color-map';
import Theory from '../tests/shared/theory';

describe('Rgb Class', () => {

  describe('Red Property', ()=> {
    test('When a valid Rgb is created then the Red property is correct', ()=>{
      const actual = new Rgb(255,0,0);
      expect(actual.red).toBe(255);
    })
  })

  describe('Green Property', ()=> {
    test('When a valid Rgb is created then the Green property is correct', ()=>{
      const actual = new Rgb(0,255,0);
      expect(actual.green).toBe(255);
    })
  })

  describe('Blue Property', ()=> {
    test('When a valid Rgb is created then the Blue property is correct', ()=>{
      const actual = new Rgb(0,0,255);
      expect(actual.blue).toBe(255);
    })
  })

  describe('Validate Rgb', () => {
    const validRgbList = colorMap.map(color => { return new Theory(color.rgb, color.hex.long.full); });
    theoretically('When a valid rgb of r:{input.r} g:{input.g} b:{input.b} is converted to hex then hex is correct and has hash tag', validRgbList, theory => {
      const actual = Rgb.isValid(theory.input.r, theory.input.g, theory.input.b);
      expect(actual).toBeTruthy();
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
      const actual = Rgb.isValid(theory.r, theory.g, theory.b);
      expect(actual).toBeFalsy();
    })
  })

  describe('Validate Rgb Value', () => {
    test('When value is below the lower bound then false is returned', () => {
      const actual = Rgb.isValueValid(-1);
      expect(actual).toBeFalsy();
    })

    test('When value is above the upper bound then false is returned', () => {
      const actual = Rgb.isValueValid(256);
      expect(actual).toBeFalsy();
    })

    test('When value is valid then true is returned', () => {
      const actual = Rgb.isValueValid(0);
      expect(actual).toBeTruthy();
    })
  })

});