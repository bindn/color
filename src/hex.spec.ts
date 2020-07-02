import Hex from './hex';
import theoretically from 'jest-theories';
import colorMap from '../tests/shared/color-map';
import Hexes from '../tests/shared/hexes';
import Theory from '../tests/shared/theory';

describe('Hex Class', () => {
  describe('Validate Hex', () => {

    const hexIsInvalidTheories = Hexes.invalidHexes.map(hex => { return new Theory(hex, ''); });

    theoretically('When hex value is {input} then hex is invalid', hexIsInvalidTheories, theory => {
      const actual = Hex.isValid(theory.input);
      expect(actual).toBeFalsy();
    });


    const hexIsValidTheories = Hexes.longHexCodes.map(hex => { return new Theory(hex.long.full, ''); });
    hexIsValidTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.full, ''); }));

    theoretically('When the hex is {input} then hex is valid', hexIsValidTheories, theory => {
      const actual = Hex.isValid(theory.input);
      expect(actual).toBeTruthy();
    });
  })

  describe('Format Hex', () => {

    const dirtyHexes = Hexes.invalidHexes.map(hex => { return new Theory(hex, ''); });
    theoretically('When an invalid hex value of {input} is formatted then an empty string is returned', dirtyHexes, theory => {
      const actual = Hex.format(theory.input);
      expect(actual).toBe(theory.expected);
    });

    // long hex codes with hash tag
    const validHexIsFormatted = Hexes.longHexCodes.map(hex => { return new Theory(hex.long.full, hex.long.full); });

    // long hex codes without hash tag
    validHexIsFormatted.push(...Hexes.longHexCodes.map(hex => { return new Theory(hex.long.raw, hex.long.full); }));

    //short hex codes with hash tag
    validHexIsFormatted.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.full, hex.short.full); }));

    //short hex codes without hash tag
    validHexIsFormatted.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.raw, hex.short.full); }));

    theoretically('When a valid hex value of {input} is formatted then the hex {expected} returned with a hash tag', validHexIsFormatted, theory => {
      const actual = Hex.format(theory.input);
      expect(actual).toBe(theory.expected);
    });
  })

  describe('Get Long Code', () => {
    // long hex codes with hash tag
    const validHexesReturnLongCodeTheories = Hexes.longHexCodes.map(hex => { return new Theory(hex.long.full, hex.long.raw); });

    // long hex codes without hash tag
    validHexesReturnLongCodeTheories.push(...Hexes.longHexCodes.map(hex => { return new Theory(hex.long.raw, hex.long.raw); }));

    //short hex codes with hash tag
    validHexesReturnLongCodeTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.full, hex.long.raw); }));

    //short hex codes without hash tag
    validHexesReturnLongCodeTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.raw, hex.long.raw); }));

    theoretically('When a valid hex value of {input} is changed to a long code then the hex {expected} returned', validHexesReturnLongCodeTheories, theory => {
      const actual = Hex.longCode(theory.input);
      expect(actual).toBe(theory.expected);
    });

    const invalidHexesToShortCodeReturnEmptyString = Hexes.invalidHexes.map(c => { return { input: c }; });
    theoretically('When an invalid hex value of {input} is changed to a long code then an empty string is returned', invalidHexesToShortCodeReturnEmptyString, theory => {
      const actual = Hex.longCode(theory.input);
      expect(actual).toBe('');
    });

  });

  describe('Get Short Code', () => {

    //long hex codes with valid short code and hash tag
    const validHexesChangedToShortCodeTheories = Hexes.shortHexCodes.map(hex => { return new Theory(hex.long.full, hex.short.raw); });

    //short hex codes with valid short code and without hash tag
    validHexesChangedToShortCodeTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.long.raw, hex.short.raw); }));

    //short hex codes with hash tag
    validHexesChangedToShortCodeTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.full, hex.short.raw); }));

    //short hex codes without hash tag
    validHexesChangedToShortCodeTheories.push(...Hexes.shortHexCodes.map(hex => { return new Theory(hex.short.raw, hex.short.raw); }));

    theoretically('When a valid hex value of {input} is changed to a short code then the hex {expected} returned', validHexesChangedToShortCodeTheories, theory => {
      const actual = Hex.shortCode(theory.input);
      expect(actual).toBe(theory.expected);
    });

    //long hex codes without a valid short code and hash tag
    const invalidHexesToShortCodesReturnEmptyString = colorMap.filter(f => f.hex.short.full === '').map(c => { return { input: c.hex.long.full }; });

    //short hex codes without a valid short code and without hash tag
    invalidHexesToShortCodesReturnEmptyString.push(...colorMap.filter(f => f.hex.short.full === '').map(c => { return { input: c.hex.long.raw }; }));

    theoretically('When a valid hex value of {input}, which has no short code, is changed to a short code then an empty string is returned', invalidHexesToShortCodesReturnEmptyString, theory => {
      const actual = Hex.shortCode(theory.input);
      expect(actual).toBe('');
    });

    const invalidHexesChangedToShortCodesTheories = Hexes.invalidHexes.map(c => { return { input: c }; });
    theoretically('When an invalid hex value of {input} is changed to a short code then an empty string is returned', invalidHexesChangedToShortCodesTheories, theory => {
      const actual = Hex.shortCode(theory.input);
      expect(actual).toBe('');
    });

  });
})