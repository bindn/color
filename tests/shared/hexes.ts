
import colorMap from './color-map';

class Hexes {
  public static longHexCodes = colorMap.map(c => { return { long: c.hex.long, rgb: c.rgb } });
  public static shortHexCodes = colorMap.filter(f => f.hex.short.full !== '').map(c => { return { short: c.hex.short, long: c.hex.long, rgb: c.rgb }; });
  public static invalidHexes = ['##pony', '', '   ', '!@#$', '1234!6', 'aabbcd#']
}

export default Hexes;