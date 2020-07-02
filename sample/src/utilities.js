import {Hex, ColorMap} from '../../dist/index.js';
const utils = {
  getBlackOrWhiteContrast(hex) {
    const black = "000000";
    const white = "FFFFFF";

    if (!Hex.isValid(hex)) return "";

    const rgb = ColorMap.Hex.toRgb(hex);
    const contrastValue = rgb.red * 0.299 + rgb.green * 0.587 + rgb.blue * 0.114;
    return contrastValue > 186
      ? black
      : white;
  },
};
export default utils;