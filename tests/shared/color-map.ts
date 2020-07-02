const colorMap = [
  {
    id: 0,
    hex: {
      short: { full: "#000", raw: "000" },
      long: { full: "#000000", raw: "000000" },
    },
    rgb: { r: 0, g: 0, b: 0 },
    hsl: { h: 0, s: 0, l: 0 },
    name: "Black",
  },
  {
    id: 1,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#800000", raw: "800000" },
    },
    rgb: { r: 128, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 25 },
    name: "Maroon",
  },
  {
    id: 2,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#008000", raw: "008000" },
    },
    rgb: { r: 0, g: 128, b: 0 },
    hsl: { h: 120, s: 100, l: 25 },
    name: "Green",
  },
  {
    id: 3,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#808000", raw: "808000" },
    },
    rgb: { r: 128, g: 128, b: 0 },
    hsl: { h: 60, s: 100, l: 25 },
    name: "Olive",
  },
  {
    id: 4,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#000080", raw: "000080" },
    },
    rgb: { r: 0, g: 0, b: 128 },
    hsl: { h: 240, s: 100, l: 25 },
    name: "Navy",
  },
  {
    id: 5,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#800080", raw: "800080" },
    },
    rgb: { r: 128, g: 0, b: 128 },
    hsl: { h: 300, s: 100, l: 25 },
    name: "Purple",
  },
  {
    id: 6,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#008080", raw: "008080" },
    },
    rgb: { r: 0, g: 128, b: 128 },
    hsl: { h: 180, s: 100, l: 25 },
    name: "Teal",
  },
  {
    id: 7,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#c0c0c0", raw: "c0c0c0" },
    },
    rgb: { r: 192, g: 192, b: 192 },
    hsl: { h: 0, s: 0, l: 75 },
    name: "Silver",
  },
  {
    id: 8,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#808080", raw: "808080" },
    },
    rgb: { r: 128, g: 128, b: 128 },
    hsl: { h: 0, s: 0, l: 50 },
    name: "Grey",
  },
  {
    id: 9,
    hex: {
      short: { full: "#f00", raw: "f00" },
      long: { full: "#ff0000", raw: "ff0000" },
    },
    rgb: { r: 255, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 50 },
    name: "Red",
  },
  {
    id: 10,
    hex: {
      short: { full: "#0f0", raw: "0f0" },
      long: { full: "#00ff00", raw: "00ff00" },
    },
    rgb: { r: 0, g: 255, b: 0 },
    hsl: { h: 120, s: 100, l: 50 },
    name: "Lime",
  },
  {
    id: 11,
    hex: {
      short: { full: "#ff0", raw: "ff0" },
      long: { full: "#ffff00", raw: "ffff00" },
    },
    rgb: { r: 255, g: 255, b: 0 },
    hsl: { h: 60, s: 100, l: 50 },
    name: "Yellow",
  },
  {
    id: 12,
    hex: {
      short: { full: "#00f", raw: "00f" },
      long: { full: "#0000ff", raw: "0000ff" },
    },
    rgb: { r: 0, g: 0, b: 255 },
    hsl: { h: 240, s: 100, l: 50 },
    name: "Blue",
  },
  {
    id: 13,
    hex: {
      short: { full: "#f0f", raw: "f0f" },
      long: { full: "#ff00ff", raw: "ff00ff" },
    },
    rgb: { r: 255, g: 0, b: 255 },
    hsl: { h: 300, s: 100, l: 50 },
    name: "Fuchsia",
  },
  {
    id: 14,
    hex: {
      short: { full: "#0ff", raw: "0ff" },
      long: { full: "#00ffff", raw: "00ffff" },
    },
    rgb: { r: 0, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 50 },
    name: "Aqua",
  },
  {
    id: 15,
    hex: {
      short: { full: "#fff", raw: "fff" },
      long: { full: "#ffffff", raw: "ffffff" },
    },
    rgb: { r: 255, g: 255, b: 255 },
    hsl: { h: 0, s: 0, l: 100 },
    name: "White",
  },
  {
    id: 16,
    hex: {
      short: { full: "#000", raw: "000" },
      long: { full: "#000000", raw: "000000" },
    },
    rgb: { r: 0, g: 0, b: 0 },
    hsl: { h: 0, s: 0, l: 0 },
    name: "Grey0",
  },
  {
    id: 17,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00005f", raw: "00005f" },
    },
    rgb: { r: 0, g: 0, b: 95 },
    hsl: { h: 240, s: 100, l: 18 },
    name: "NavyBlue",
  },
  {
    id: 18,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#000087", raw: "000087" },
    },
    rgb: { r: 0, g: 0, b: 135 },
    hsl: { h: 240, s: 100, l: 26 },
    name: "DarkBlue",
  },
  {
    id: 19,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#0000af", raw: "0000af" },
    },
    rgb: { r: 0, g: 0, b: 175 },
    hsl: { h: 240, s: 100, l: 34 },
    name: "Blue3",
  },
  {
    id: 20,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#0000d7", raw: "0000d7" },
    },
    rgb: { r: 0, g: 0, b: 215 },
    hsl: { h: 240, s: 100, l: 42 },
    name: "Blue3",
  },
  {
    id: 21,
    hex: {
      short: { full: "#00f", raw: "00f" },
      long: { full: "#0000ff", raw: "0000ff" },
    },
    rgb: { r: 0, g: 0, b: 255 },
    hsl: { h: 240, s: 100, l: 50 },
    name: "Blue1",
  },
  {
    id: 22,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#005f00", raw: "005f00" },
    },
    rgb: { r: 0, g: 95, b: 0 },
    hsl: { h: 120, s: 100, l: 18 },
    name: "DarkGreen",
  },
  {
    id: 23,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#005f5f", raw: "005f5f" },
    },
    rgb: { r: 0, g: 95, b: 95 },
    hsl: { h: 180, s: 100, l: 18 },
    name: "DeepSkyBlue4",
  },
  {
    id: 24,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#005f87", raw: "005f87" },
    },
    rgb: { r: 0, g: 95, b: 135 },
    hsl: { h: 197.777777777778, s: 100, l: 26 },
    name: "DeepSkyBlue4",
  },
  {
    id: 25,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#005faf", raw: "005faf" },
    },
    rgb: { r: 0, g: 95, b: 175 },
    hsl: { h: 207.428571428571, s: 100, l: 34 },
    name: "DeepSkyBlue4",
  },
  {
    id: 26,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#005fd7", raw: "005fd7" },
    },
    rgb: { r: 0, g: 95, b: 215 },
    hsl: { h: 213.488372093023, s: 100, l: 42 },
    name: "DodgerBlue3",
  },
  {
    id: 27,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#005fff", raw: "005fff" },
    },
    rgb: { r: 0, g: 95, b: 255 },
    hsl: { h: 217.647058823529, s: 100, l: 50 },
    name: "DodgerBlue2",
  },
  {
    id: 28,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#008700", raw: "008700" },
    },
    rgb: { r: 0, g: 135, b: 0 },
    hsl: { h: 120, s: 100, l: 26 },
    name: "Green4",
  },
  {
    id: 29,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00875f", raw: "00875f" },
    },
    rgb: { r: 0, g: 135, b: 95 },
    hsl: { h: 162.222222222222, s: 100, l: 26 },
    name: "SpringGreen4",
  },
  {
    id: 30,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#008787", raw: "008787" },
    },
    rgb: { r: 0, g: 135, b: 135 },
    hsl: { h: 180, s: 100, l: 26 },
    name: "Turquoise4",
  },
  {
    id: 31,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#0087af", raw: "0087af" },
    },
    rgb: { r: 0, g: 135, b: 175 },
    hsl: { h: 193.714285714286, s: 100, l: 34 },
    name: "DeepSkyBlue3",
  },
  {
    id: 32,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#0087d7", raw: "0087d7" },
    },
    rgb: { r: 0, g: 135, b: 215 },
    hsl: { h: 202.325581395349, s: 100, l: 42 },
    name: "DeepSkyBlue3",
  },
  {
    id: 33,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#0087ff", raw: "0087ff" },
    },
    rgb: { r: 0, g: 135, b: 255 },
    hsl: { h: 208.235294117647, s: 100, l: 50 },
    name: "DodgerBlue1",
  },
  {
    id: 34,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00af00", raw: "00af00" },
    },
    rgb: { r: 0, g: 175, b: 0 },
    hsl: { h: 120, s: 100, l: 34 },
    name: "Green3",
  },
  {
    id: 35,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00af5f", raw: "00af5f" },
    },
    rgb: { r: 0, g: 175, b: 95 },
    hsl: { h: 152.571428571429, s: 100, l: 34 },
    name: "SpringGreen3",
  },
  {
    id: 36,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00af87", raw: "00af87" },
    },
    rgb: { r: 0, g: 175, b: 135 },
    hsl: { h: 166.285714285714, s: 100, l: 34 },
    name: "DarkCyan",
  },
  {
    id: 37,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00afaf", raw: "00afaf" },
    },
    rgb: { r: 0, g: 175, b: 175 },
    hsl: { h: 180, s: 100, l: 34 },
    name: "LightSeaGreen",
  },
  {
    id: 38,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00afd7", raw: "00afd7" },
    },
    rgb: { r: 0, g: 175, b: 215 },
    hsl: { h: 191.162790697674, s: 100, l: 42 },
    name: "DeepSkyBlue2",
  },
  {
    id: 39,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00afff", raw: "00afff" },
    },
    rgb: { r: 0, g: 175, b: 255 },
    hsl: { h: 198.823529411765, s: 100, l: 50 },
    name: "DeepSkyBlue1",
  },
  {
    id: 40,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00d700", raw: "00d700" },
    },
    rgb: { r: 0, g: 215, b: 0 },
    hsl: { h: 120, s: 100, l: 42 },
    name: "Green3",
  },
  {
    id: 41,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00d75f", raw: "00d75f" },
    },
    rgb: { r: 0, g: 215, b: 95 },
    hsl: { h: 146.511627906977, s: 100, l: 42 },
    name: "SpringGreen3",
  },
  {
    id: 42,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00d787", raw: "00d787" },
    },
    rgb: { r: 0, g: 215, b: 135 },
    hsl: { h: 157.674418604651, s: 100, l: 42 },
    name: "SpringGreen2",
  },
  {
    id: 43,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00d7af", raw: "00d7af" },
    },
    rgb: { r: 0, g: 215, b: 175 },
    hsl: { h: 168.837209302326, s: 100, l: 42 },
    name: "Cyan3",
  },
  {
    id: 44,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00d7d7", raw: "00d7d7" },
    },
    rgb: { r: 0, g: 215, b: 215 },
    hsl: { h: 180, s: 100, l: 42 },
    name: "DarkTurquoise",
  },
  {
    id: 45,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00d7ff", raw: "00d7ff" },
    },
    rgb: { r: 0, g: 215, b: 255 },
    hsl: { h: 189.411764705882, s: 100, l: 50 },
    name: "Turquoise2",
  },
  {
    id: 46,
    hex: {
      short: { full: "#0f0", raw: "0f0" },
      long: { full: "#00ff00", raw: "00ff00" },
    },
    rgb: { r: 0, g: 255, b: 0 },
    hsl: { h: 120, s: 100, l: 50 },
    name: "Green1",
  },
  {
    id: 47,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00ff5f", raw: "00ff5f" },
    },
    rgb: { r: 0, g: 255, b: 95 },
    hsl: { h: 142.352941176471, s: 100, l: 50 },
    name: "SpringGreen2",
  },
  {
    id: 48,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00ff87", raw: "00ff87" },
    },
    rgb: { r: 0, g: 255, b: 135 },
    hsl: { h: 151.764705882353, s: 100, l: 50 },
    name: "SpringGreen1",
  },
  {
    id: 49,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00ffaf", raw: "00ffaf" },
    },
    rgb: { r: 0, g: 255, b: 175 },
    hsl: { h: 161.176470588235, s: 100, l: 50 },
    name: "MediumSpringGreen",
  },
  {
    id: 50,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#00ffd7", raw: "00ffd7" },
    },
    rgb: { r: 0, g: 255, b: 215 },
    hsl: { h: 170.588235294118, s: 100, l: 50 },
    name: "Cyan2",
  },
  {
    id: 51,
    hex: {
      short: { full: "#0ff", raw: "0ff" },
      long: { full: "#00ffff", raw: "00ffff" },
    },
    rgb: { r: 0, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 50 },
    name: "Cyan1",
  },
  {
    id: 52,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f0000", raw: "5f0000" },
    },
    rgb: { r: 95, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 18 },
    name: "DarkRed",
  },
  {
    id: 53,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f005f", raw: "5f005f" },
    },
    rgb: { r: 95, g: 0, b: 95 },
    hsl: { h: 300, s: 100, l: 18 },
    name: "DeepPink4",
  },
  {
    id: 54,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f0087", raw: "5f0087" },
    },
    rgb: { r: 95, g: 0, b: 135 },
    hsl: { h: 282.222222222222, s: 100, l: 26 },
    name: "Purple4",
  },
  {
    id: 55,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f00af", raw: "5f00af" },
    },
    rgb: { r: 95, g: 0, b: 175 },
    hsl: { h: 272.571428571429, s: 100, l: 34 },
    name: "Purple4",
  },
  {
    id: 56,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f00d7", raw: "5f00d7" },
    },
    rgb: { r: 95, g: 0, b: 215 },
    hsl: { h: 266.511627906977, s: 100, l: 42 },
    name: "Purple3",
  },
  {
    id: 57,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f00ff", raw: "5f00ff" },
    },
    rgb: { r: 95, g: 0, b: 255 },
    hsl: { h: 262.352941176471, s: 100, l: 50 },
    name: "BlueViolet",
  },
  {
    id: 58,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f5f00", raw: "5f5f00" },
    },
    rgb: { r: 95, g: 95, b: 0 },
    hsl: { h: 60, s: 100, l: 18 },
    name: "Orange4",
  },
  {
    id: 59,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f5f5f", raw: "5f5f5f" },
    },
    rgb: { r: 95, g: 95, b: 95 },
    hsl: { h: 0, s: 0, l: 37 },
    name: "Grey37",
  },
  {
    id: 60,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f5f87", raw: "5f5f87" },
    },
    rgb: { r: 95, g: 95, b: 135 },
    hsl: { h: 240, s: 17, l: 45 },
    name: "MediumPurple4",
  },
  {
    id: 61,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f5faf", raw: "5f5faf" },
    },
    rgb: { r: 95, g: 95, b: 175 },
    hsl: { h: 240, s: 33, l: 52 },
    name: "SlateBlue3",
  },
  {
    id: 62,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f5fd7", raw: "5f5fd7" },
    },
    rgb: { r: 95, g: 95, b: 215 },
    hsl: { h: 240, s: 60, l: 60 },
    name: "SlateBlue3",
  },
  {
    id: 63,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f5fff", raw: "5f5fff" },
    },
    rgb: { r: 95, g: 95, b: 255 },
    hsl: { h: 240, s: 100, l: 68 },
    name: "RoyalBlue1",
  },
  {
    id: 64,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f8700", raw: "5f8700" },
    },
    rgb: { r: 95, g: 135, b: 0 },
    hsl: { h: 77.7777777777778, s: 100, l: 26 },
    name: "Chartreuse4",
  },
  {
    id: 65,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f875f", raw: "5f875f" },
    },
    rgb: { r: 95, g: 135, b: 95 },
    hsl: { h: 120, s: 17, l: 45 },
    name: "DarkSeaGreen4",
  },
  {
    id: 66,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f8787", raw: "5f8787" },
    },
    rgb: { r: 95, g: 135, b: 135 },
    hsl: { h: 180, s: 17, l: 45 },
    name: "PaleTurquoise4",
  },
  {
    id: 67,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f87af", raw: "5f87af" },
    },
    rgb: { r: 95, g: 135, b: 175 },
    hsl: { h: 210, s: 33, l: 52 },
    name: "SteelBlue",
  },
  {
    id: 68,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f87d7", raw: "5f87d7" },
    },
    rgb: { r: 95, g: 135, b: 215 },
    hsl: { h: 220, s: 60, l: 60 },
    name: "SteelBlue3",
  },
  {
    id: 69,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5f87ff", raw: "5f87ff" },
    },
    rgb: { r: 95, g: 135, b: 255 },
    hsl: { h: 225, s: 100, l: 68 },
    name: "CornflowerBlue",
  },
  {
    id: 70,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5faf00", raw: "5faf00" },
    },
    rgb: { r: 95, g: 175, b: 0 },
    hsl: { h: 87.4285714285714, s: 100, l: 34 },
    name: "Chartreuse3",
  },
  {
    id: 71,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5faf5f", raw: "5faf5f" },
    },
    rgb: { r: 95, g: 175, b: 95 },
    hsl: { h: 120, s: 33, l: 52 },
    name: "DarkSeaGreen4",
  },
  {
    id: 72,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5faf87", raw: "5faf87" },
    },
    rgb: { r: 95, g: 175, b: 135 },
    hsl: { h: 150, s: 33, l: 52 },
    name: "CadetBlue",
  },
  {
    id: 73,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fafaf", raw: "5fafaf" },
    },
    rgb: { r: 95, g: 175, b: 175 },
    hsl: { h: 180, s: 33, l: 52 },
    name: "CadetBlue",
  },
  {
    id: 74,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fafd7", raw: "5fafd7" },
    },
    rgb: { r: 95, g: 175, b: 215 },
    hsl: { h: 200, s: 60, l: 60 },
    name: "SkyBlue3",
  },
  {
    id: 75,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fafff", raw: "5fafff" },
    },
    rgb: { r: 95, g: 175, b: 255 },
    hsl: { h: 210, s: 100, l: 68 },
    name: "SteelBlue1",
  },
  {
    id: 76,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fd700", raw: "5fd700" },
    },
    rgb: { r: 95, g: 215, b: 0 },
    hsl: { h: 93.4883720930233, s: 100, l: 42 },
    name: "Chartreuse3",
  },
  {
    id: 77,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fd75f", raw: "5fd75f" },
    },
    rgb: { r: 95, g: 215, b: 95 },
    hsl: { h: 120, s: 60, l: 60 },
    name: "PaleGreen3",
  },
  {
    id: 78,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fd787", raw: "5fd787" },
    },
    rgb: { r: 95, g: 215, b: 135 },
    hsl: { h: 140, s: 60, l: 60 },
    name: "SeaGreen3",
  },
  {
    id: 79,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fd7af", raw: "5fd7af" },
    },
    rgb: { r: 95, g: 215, b: 175 },
    hsl: { h: 160, s: 60, l: 60 },
    name: "Aquamarine3",
  },
  {
    id: 80,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fd7d7", raw: "5fd7d7" },
    },
    rgb: { r: 95, g: 215, b: 215 },
    hsl: { h: 180, s: 60, l: 60 },
    name: "MediumTurquoise",
  },
  {
    id: 81,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fd7ff", raw: "5fd7ff" },
    },
    rgb: { r: 95, g: 215, b: 255 },
    hsl: { h: 195, s: 100, l: 68 },
    name: "SteelBlue1",
  },
  {
    id: 82,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fff00", raw: "5fff00" },
    },
    rgb: { r: 95, g: 255, b: 0 },
    hsl: { h: 97.6470588235294, s: 100, l: 50 },
    name: "Chartreuse2",
  },
  {
    id: 83,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fff5f", raw: "5fff5f" },
    },
    rgb: { r: 95, g: 255, b: 95 },
    hsl: { h: 120, s: 100, l: 68 },
    name: "SeaGreen2",
  },
  {
    id: 84,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fff87", raw: "5fff87" },
    },
    rgb: { r: 95, g: 255, b: 135 },
    hsl: { h: 135, s: 100, l: 68 },
    name: "SeaGreen1",
  },
  {
    id: 85,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fffaf", raw: "5fffaf" },
    },
    rgb: { r: 95, g: 255, b: 175 },
    hsl: { h: 150, s: 100, l: 68 },
    name: "SeaGreen1",
  },
  {
    id: 86,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fffd7", raw: "5fffd7" },
    },
    rgb: { r: 95, g: 255, b: 215 },
    hsl: { h: 165, s: 100, l: 68 },
    name: "Aquamarine1",
  },
  {
    id: 87,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#5fffff", raw: "5fffff" },
    },
    rgb: { r: 95, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 68 },
    name: "DarkSlateGray2",
  },
  {
    id: 88,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#870000", raw: "870000" },
    },
    rgb: { r: 135, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 26 },
    name: "DarkRed",
  },
  {
    id: 89,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87005f", raw: "87005f" },
    },
    rgb: { r: 135, g: 0, b: 95 },
    hsl: { h: 317.777777777778, s: 100, l: 26 },
    name: "DeepPink4",
  },
  {
    id: 90,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#870087", raw: "870087" },
    },
    rgb: { r: 135, g: 0, b: 135 },
    hsl: { h: 300, s: 100, l: 26 },
    name: "DarkMagenta",
  },
  {
    id: 91,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#8700af", raw: "8700af" },
    },
    rgb: { r: 135, g: 0, b: 175 },
    hsl: { h: 286.285714285714, s: 100, l: 34 },
    name: "DarkMagenta",
  },
  {
    id: 92,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#8700d7", raw: "8700d7" },
    },
    rgb: { r: 135, g: 0, b: 215 },
    hsl: { h: 277.674418604651, s: 100, l: 42 },
    name: "DarkViolet",
  },
  {
    id: 93,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#8700ff", raw: "8700ff" },
    },
    rgb: { r: 135, g: 0, b: 255 },
    hsl: { h: 271.764705882353, s: 100, l: 50 },
    name: "Purple",
  },
  {
    id: 94,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#875f00", raw: "875f00" },
    },
    rgb: { r: 135, g: 95, b: 0 },
    hsl: { h: 42.2222222222222, s: 100, l: 26 },
    name: "Orange4",
  },
  {
    id: 95,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#875f5f", raw: "875f5f" },
    },
    rgb: { r: 135, g: 95, b: 95 },
    hsl: { h: 0, s: 17, l: 45 },
    name: "LightPink4",
  },
  {
    id: 96,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#875f87", raw: "875f87" },
    },
    rgb: { r: 135, g: 95, b: 135 },
    hsl: { h: 300, s: 17, l: 45 },
    name: "Plum4",
  },
  {
    id: 97,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#875faf", raw: "875faf" },
    },
    rgb: { r: 135, g: 95, b: 175 },
    hsl: { h: 270, s: 33, l: 52 },
    name: "MediumPurple3",
  },
  {
    id: 98,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#875fd7", raw: "875fd7" },
    },
    rgb: { r: 135, g: 95, b: 215 },
    hsl: { h: 260, s: 60, l: 60 },
    name: "MediumPurple3",
  },
  {
    id: 99,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#875fff", raw: "875fff" },
    },
    rgb: { r: 135, g: 95, b: 255 },
    hsl: { h: 255, s: 100, l: 68 },
    name: "SlateBlue1",
  },
  {
    id: 100,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#878700", raw: "878700" },
    },
    rgb: { r: 135, g: 135, b: 0 },
    hsl: { h: 60, s: 100, l: 26 },
    name: "Yellow4",
  },
  {
    id: 101,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87875f", raw: "87875f" },
    },
    rgb: { r: 135, g: 135, b: 95 },
    hsl: { h: 60, s: 17, l: 45 },
    name: "Wheat4",
  },
  {
    id: 102,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#878787", raw: "878787" },
    },
    rgb: { r: 135, g: 135, b: 135 },
    hsl: { h: 0, s: 0, l: 52 },
    name: "Grey53",
  },
  {
    id: 103,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#8787af", raw: "8787af" },
    },
    rgb: { r: 135, g: 135, b: 175 },
    hsl: { h: 240, s: 20, l: 60 },
    name: "LightSlateGrey",
  },
  {
    id: 104,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#8787d7", raw: "8787d7" },
    },
    rgb: { r: 135, g: 135, b: 215 },
    hsl: { h: 240, s: 50, l: 68 },
    name: "MediumPurple",
  },
  {
    id: 105,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#8787ff", raw: "8787ff" },
    },
    rgb: { r: 135, g: 135, b: 255 },
    hsl: { h: 240, s: 100, l: 76 },
    name: "LightSlateBlue",
  },
  {
    id: 106,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87af00", raw: "87af00" },
    },
    rgb: { r: 135, g: 175, b: 0 },
    hsl: { h: 73.7142857142857, s: 100, l: 34 },
    name: "Yellow4",
  },
  {
    id: 107,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87af5f", raw: "87af5f" },
    },
    rgb: { r: 135, g: 175, b: 95 },
    hsl: { h: 90, s: 33, l: 52 },
    name: "DarkOliveGreen3",
  },
  {
    id: 108,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87af87", raw: "87af87" },
    },
    rgb: { r: 135, g: 175, b: 135 },
    hsl: { h: 120, s: 20, l: 60 },
    name: "DarkSeaGreen",
  },
  {
    id: 109,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87afaf", raw: "87afaf" },
    },
    rgb: { r: 135, g: 175, b: 175 },
    hsl: { h: 180, s: 20, l: 60 },
    name: "LightSkyBlue3",
  },
  {
    id: 110,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87afd7", raw: "87afd7" },
    },
    rgb: { r: 135, g: 175, b: 215 },
    hsl: { h: 210, s: 50, l: 68 },
    name: "LightSkyBlue3",
  },
  {
    id: 111,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87afff", raw: "87afff" },
    },
    rgb: { r: 135, g: 175, b: 255 },
    hsl: { h: 220, s: 100, l: 76 },
    name: "SkyBlue2",
  },
  {
    id: 112,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87d700", raw: "87d700" },
    },
    rgb: { r: 135, g: 215, b: 0 },
    hsl: { h: 82.3255813953488, s: 100, l: 42 },
    name: "Chartreuse2",
  },
  {
    id: 113,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87d75f", raw: "87d75f" },
    },
    rgb: { r: 135, g: 215, b: 95 },
    hsl: { h: 100, s: 60, l: 60 },
    name: "DarkOliveGreen3",
  },
  {
    id: 114,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87d787", raw: "87d787" },
    },
    rgb: { r: 135, g: 215, b: 135 },
    hsl: { h: 120, s: 50, l: 68 },
    name: "PaleGreen3",
  },
  {
    id: 115,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87d7af", raw: "87d7af" },
    },
    rgb: { r: 135, g: 215, b: 175 },
    hsl: { h: 150, s: 50, l: 68 },
    name: "DarkSeaGreen3",
  },
  {
    id: 116,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87d7d7", raw: "87d7d7" },
    },
    rgb: { r: 135, g: 215, b: 215 },
    hsl: { h: 180, s: 50, l: 68 },
    name: "DarkSlateGray3",
  },
  {
    id: 117,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87d7ff", raw: "87d7ff" },
    },
    rgb: { r: 135, g: 215, b: 255 },
    hsl: { h: 200, s: 100, l: 76 },
    name: "SkyBlue1",
  },
  {
    id: 118,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87ff00", raw: "87ff00" },
    },
    rgb: { r: 135, g: 255, b: 0 },
    hsl: { h: 88.2352941176471, s: 100, l: 50 },
    name: "Chartreuse1",
  },
  {
    id: 119,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87ff5f", raw: "87ff5f" },
    },
    rgb: { r: 135, g: 255, b: 95 },
    hsl: { h: 105, s: 100, l: 68 },
    name: "LightGreen",
  },
  {
    id: 120,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87ff87", raw: "87ff87" },
    },
    rgb: { r: 135, g: 255, b: 135 },
    hsl: { h: 120, s: 100, l: 76 },
    name: "LightGreen",
  },
  {
    id: 121,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87ffaf", raw: "87ffaf" },
    },
    rgb: { r: 135, g: 255, b: 175 },
    hsl: { h: 140, s: 100, l: 76 },
    name: "PaleGreen1",
  },
  {
    id: 122,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87ffd7", raw: "87ffd7" },
    },
    rgb: { r: 135, g: 255, b: 215 },
    hsl: { h: 160, s: 100, l: 76 },
    name: "Aquamarine1",
  },
  {
    id: 123,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#87ffff", raw: "87ffff" },
    },
    rgb: { r: 135, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 76 },
    name: "DarkSlateGray1",
  },
  {
    id: 124,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af0000", raw: "af0000" },
    },
    rgb: { r: 175, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 34 },
    name: "Red3",
  },
  {
    id: 125,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af005f", raw: "af005f" },
    },
    rgb: { r: 175, g: 0, b: 95 },
    hsl: { h: 327.428571428571, s: 100, l: 34 },
    name: "DeepPink4",
  },
  {
    id: 126,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af0087", raw: "af0087" },
    },
    rgb: { r: 175, g: 0, b: 135 },
    hsl: { h: 313.714285714286, s: 100, l: 34 },
    name: "MediumVioletRed",
  },
  {
    id: 127,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af00af", raw: "af00af" },
    },
    rgb: { r: 175, g: 0, b: 175 },
    hsl: { h: 300, s: 100, l: 34 },
    name: "Magenta3",
  },
  {
    id: 128,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af00d7", raw: "af00d7" },
    },
    rgb: { r: 175, g: 0, b: 215 },
    hsl: { h: 288.837209302326, s: 100, l: 42 },
    name: "DarkViolet",
  },
  {
    id: 129,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af00ff", raw: "af00ff" },
    },
    rgb: { r: 175, g: 0, b: 255 },
    hsl: { h: 281.176470588235, s: 100, l: 50 },
    name: "Purple",
  },
  {
    id: 130,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af5f00", raw: "af5f00" },
    },
    rgb: { r: 175, g: 95, b: 0 },
    hsl: { h: 32.5714285714286, s: 100, l: 34 },
    name: "DarkOrange3",
  },
  {
    id: 131,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af5f5f", raw: "af5f5f" },
    },
    rgb: { r: 175, g: 95, b: 95 },
    hsl: { h: 0, s: 33, l: 52 },
    name: "IndianRed",
  },
  {
    id: 132,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af5f87", raw: "af5f87" },
    },
    rgb: { r: 175, g: 95, b: 135 },
    hsl: { h: 330, s: 33, l: 52 },
    name: "HotPink3",
  },
  {
    id: 133,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af5faf", raw: "af5faf" },
    },
    rgb: { r: 175, g: 95, b: 175 },
    hsl: { h: 300, s: 33, l: 52 },
    name: "MediumOrchid3",
  },
  {
    id: 134,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af5fd7", raw: "af5fd7" },
    },
    rgb: { r: 175, g: 95, b: 215 },
    hsl: { h: 280, s: 60, l: 60 },
    name: "MediumOrchid",
  },
  {
    id: 135,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af5fff", raw: "af5fff" },
    },
    rgb: { r: 175, g: 95, b: 255 },
    hsl: { h: 270, s: 100, l: 68 },
    name: "MediumPurple2",
  },
  {
    id: 136,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af8700", raw: "af8700" },
    },
    rgb: { r: 175, g: 135, b: 0 },
    hsl: { h: 46.2857142857143, s: 100, l: 34 },
    name: "DarkGoldenrod",
  },
  {
    id: 137,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af875f", raw: "af875f" },
    },
    rgb: { r: 175, g: 135, b: 95 },
    hsl: { h: 30, s: 33, l: 52 },
    name: "LightSalmon3",
  },
  {
    id: 138,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af8787", raw: "af8787" },
    },
    rgb: { r: 175, g: 135, b: 135 },
    hsl: { h: 0, s: 20, l: 60 },
    name: "RosyBrown",
  },
  {
    id: 139,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af87af", raw: "af87af" },
    },
    rgb: { r: 175, g: 135, b: 175 },
    hsl: { h: 300, s: 20, l: 60 },
    name: "Grey63",
  },
  {
    id: 140,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af87d7", raw: "af87d7" },
    },
    rgb: { r: 175, g: 135, b: 215 },
    hsl: { h: 270, s: 50, l: 68 },
    name: "MediumPurple2",
  },
  {
    id: 141,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#af87ff", raw: "af87ff" },
    },
    rgb: { r: 175, g: 135, b: 255 },
    hsl: { h: 260, s: 100, l: 76 },
    name: "MediumPurple1",
  },
  {
    id: 142,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afaf00", raw: "afaf00" },
    },
    rgb: { r: 175, g: 175, b: 0 },
    hsl: { h: 60, s: 100, l: 34 },
    name: "Gold3",
  },
  {
    id: 143,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afaf5f", raw: "afaf5f" },
    },
    rgb: { r: 175, g: 175, b: 95 },
    hsl: { h: 60, s: 33, l: 52 },
    name: "DarkKhaki",
  },
  {
    id: 144,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afaf87", raw: "afaf87" },
    },
    rgb: { r: 175, g: 175, b: 135 },
    hsl: { h: 60, s: 20, l: 60 },
    name: "NavajoWhite3",
  },
  {
    id: 145,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afafaf", raw: "afafaf" },
    },
    rgb: { r: 175, g: 175, b: 175 },
    hsl: { h: 0, s: 0, l: 68 },
    name: "Grey69",
  },
  {
    id: 146,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afafd7", raw: "afafd7" },
    },
    rgb: { r: 175, g: 175, b: 215 },
    hsl: { h: 240, s: 33, l: 76 },
    name: "LightSteelBlue3",
  },
  {
    id: 147,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afafff", raw: "afafff" },
    },
    rgb: { r: 175, g: 175, b: 255 },
    hsl: { h: 240, s: 100, l: 84 },
    name: "LightSteelBlue",
  },
  {
    id: 148,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afd700", raw: "afd700" },
    },
    rgb: { r: 175, g: 215, b: 0 },
    hsl: { h: 71.1627906976744, s: 100, l: 42 },
    name: "Yellow3",
  },
  {
    id: 149,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afd75f", raw: "afd75f" },
    },
    rgb: { r: 175, g: 215, b: 95 },
    hsl: { h: 80, s: 60, l: 60 },
    name: "DarkOliveGreen3",
  },
  {
    id: 150,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afd787", raw: "afd787" },
    },
    rgb: { r: 175, g: 215, b: 135 },
    hsl: { h: 90, s: 50, l: 68 },
    name: "DarkSeaGreen3",
  },
  {
    id: 151,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afd7af", raw: "afd7af" },
    },
    rgb: { r: 175, g: 215, b: 175 },
    hsl: { h: 120, s: 33, l: 76 },
    name: "DarkSeaGreen2",
  },
  {
    id: 152,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afd7d7", raw: "afd7d7" },
    },
    rgb: { r: 175, g: 215, b: 215 },
    hsl: { h: 180, s: 33, l: 76 },
    name: "LightCyan3",
  },
  {
    id: 153,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afd7ff", raw: "afd7ff" },
    },
    rgb: { r: 175, g: 215, b: 255 },
    hsl: { h: 210, s: 100, l: 84 },
    name: "LightSkyBlue1",
  },
  {
    id: 154,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afff00", raw: "afff00" },
    },
    rgb: { r: 175, g: 255, b: 0 },
    hsl: { h: 78.8235294117647, s: 100, l: 50 },
    name: "GreenYellow",
  },
  {
    id: 155,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afff5f", raw: "afff5f" },
    },
    rgb: { r: 175, g: 255, b: 95 },
    hsl: { h: 90, s: 100, l: 68 },
    name: "DarkOliveGreen2",
  },
  {
    id: 156,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afff87", raw: "afff87" },
    },
    rgb: { r: 175, g: 255, b: 135 },
    hsl: { h: 100, s: 100, l: 76 },
    name: "PaleGreen1",
  },
  {
    id: 157,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afffaf", raw: "afffaf" },
    },
    rgb: { r: 175, g: 255, b: 175 },
    hsl: { h: 120, s: 100, l: 84 },
    name: "DarkSeaGreen2",
  },
  {
    id: 158,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afffd7", raw: "afffd7" },
    },
    rgb: { r: 175, g: 255, b: 215 },
    hsl: { h: 150, s: 100, l: 84 },
    name: "DarkSeaGreen1",
  },
  {
    id: 159,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#afffff", raw: "afffff" },
    },
    rgb: { r: 175, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 84 },
    name: "PaleTurquoise1",
  },
  {
    id: 160,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d70000", raw: "d70000" },
    },
    rgb: { r: 215, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 42 },
    name: "Red3",
  },
  {
    id: 161,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7005f", raw: "d7005f" },
    },
    rgb: { r: 215, g: 0, b: 95 },
    hsl: { h: 333.488372093023, s: 100, l: 42 },
    name: "DeepPink3",
  },
  {
    id: 162,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d70087", raw: "d70087" },
    },
    rgb: { r: 215, g: 0, b: 135 },
    hsl: { h: 322.325581395349, s: 100, l: 42 },
    name: "DeepPink3",
  },
  {
    id: 163,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d700af", raw: "d700af" },
    },
    rgb: { r: 215, g: 0, b: 175 },
    hsl: { h: 311.162790697674, s: 100, l: 42 },
    name: "Magenta3",
  },
  {
    id: 164,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d700d7", raw: "d700d7" },
    },
    rgb: { r: 215, g: 0, b: 215 },
    hsl: { h: 300, s: 100, l: 42 },
    name: "Magenta3",
  },
  {
    id: 165,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d700ff", raw: "d700ff" },
    },
    rgb: { r: 215, g: 0, b: 255 },
    hsl: { h: 290.588235294118, s: 100, l: 50 },
    name: "Magenta2",
  },
  {
    id: 166,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d75f00", raw: "d75f00" },
    },
    rgb: { r: 215, g: 95, b: 0 },
    hsl: { h: 26.5116279069767, s: 100, l: 42 },
    name: "DarkOrange3",
  },
  {
    id: 167,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d75f5f", raw: "d75f5f" },
    },
    rgb: { r: 215, g: 95, b: 95 },
    hsl: { h: 0, s: 60, l: 60 },
    name: "IndianRed",
  },
  {
    id: 168,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d75f87", raw: "d75f87" },
    },
    rgb: { r: 215, g: 95, b: 135 },
    hsl: { h: 340, s: 60, l: 60 },
    name: "HotPink3",
  },
  {
    id: 169,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d75faf", raw: "d75faf" },
    },
    rgb: { r: 215, g: 95, b: 175 },
    hsl: { h: 320, s: 60, l: 60 },
    name: "HotPink2",
  },
  {
    id: 170,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d75fd7", raw: "d75fd7" },
    },
    rgb: { r: 215, g: 95, b: 215 },
    hsl: { h: 300, s: 60, l: 60 },
    name: "Orchid",
  },
  {
    id: 171,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d75fff", raw: "d75fff" },
    },
    rgb: { r: 215, g: 95, b: 255 },
    hsl: { h: 285, s: 100, l: 68 },
    name: "MediumOrchid1",
  },
  {
    id: 172,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d78700", raw: "d78700" },
    },
    rgb: { r: 215, g: 135, b: 0 },
    hsl: { h: 37.6744186046512, s: 100, l: 42 },
    name: "Orange3",
  },
  {
    id: 173,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7875f", raw: "d7875f" },
    },
    rgb: { r: 215, g: 135, b: 95 },
    hsl: { h: 20, s: 60, l: 60 },
    name: "LightSalmon3",
  },
  {
    id: 174,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d78787", raw: "d78787" },
    },
    rgb: { r: 215, g: 135, b: 135 },
    hsl: { h: 0, s: 50, l: 68 },
    name: "LightPink3",
  },
  {
    id: 175,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d787af", raw: "d787af" },
    },
    rgb: { r: 215, g: 135, b: 175 },
    hsl: { h: 330, s: 50, l: 68 },
    name: "Pink3",
  },
  {
    id: 176,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d787d7", raw: "d787d7" },
    },
    rgb: { r: 215, g: 135, b: 215 },
    hsl: { h: 300, s: 50, l: 68 },
    name: "Plum3",
  },
  {
    id: 177,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d787ff", raw: "d787ff" },
    },
    rgb: { r: 215, g: 135, b: 255 },
    hsl: { h: 280, s: 100, l: 76 },
    name: "Violet",
  },
  {
    id: 178,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7af00", raw: "d7af00" },
    },
    rgb: { r: 215, g: 175, b: 0 },
    hsl: { h: 48.8372093023256, s: 100, l: 42 },
    name: "Gold3",
  },
  {
    id: 179,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7af5f", raw: "d7af5f" },
    },
    rgb: { r: 215, g: 175, b: 95 },
    hsl: { h: 40, s: 60, l: 60 },
    name: "LightGoldenrod3",
  },
  {
    id: 180,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7af87", raw: "d7af87" },
    },
    rgb: { r: 215, g: 175, b: 135 },
    hsl: { h: 30, s: 50, l: 68 },
    name: "Tan",
  },
  {
    id: 181,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7afaf", raw: "d7afaf" },
    },
    rgb: { r: 215, g: 175, b: 175 },
    hsl: { h: 0, s: 33, l: 76 },
    name: "MistyRose3",
  },
  {
    id: 182,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7afd7", raw: "d7afd7" },
    },
    rgb: { r: 215, g: 175, b: 215 },
    hsl: { h: 300, s: 33, l: 76 },
    name: "Thistle3",
  },
  {
    id: 183,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7afff", raw: "d7afff" },
    },
    rgb: { r: 215, g: 175, b: 255 },
    hsl: { h: 270, s: 100, l: 84 },
    name: "Plum2",
  },
  {
    id: 184,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7d700", raw: "d7d700" },
    },
    rgb: { r: 215, g: 215, b: 0 },
    hsl: { h: 60, s: 100, l: 42 },
    name: "Yellow3",
  },
  {
    id: 185,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7d75f", raw: "d7d75f" },
    },
    rgb: { r: 215, g: 215, b: 95 },
    hsl: { h: 60, s: 60, l: 60 },
    name: "Khaki3",
  },
  {
    id: 186,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7d787", raw: "d7d787" },
    },
    rgb: { r: 215, g: 215, b: 135 },
    hsl: { h: 60, s: 50, l: 68 },
    name: "LightGoldenrod2",
  },
  {
    id: 187,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7d7af", raw: "d7d7af" },
    },
    rgb: { r: 215, g: 215, b: 175 },
    hsl: { h: 60, s: 33, l: 76 },
    name: "LightYellow3",
  },
  {
    id: 188,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7d7d7", raw: "d7d7d7" },
    },
    rgb: { r: 215, g: 215, b: 215 },
    hsl: { h: 0, s: 0, l: 84 },
    name: "Grey84",
  },
  {
    id: 189,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7d7ff", raw: "d7d7ff" },
    },
    rgb: { r: 215, g: 215, b: 255 },
    hsl: { h: 240, s: 100, l: 92 },
    name: "LightSteelBlue1",
  },
  {
    id: 190,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7ff00", raw: "d7ff00" },
    },
    rgb: { r: 215, g: 255, b: 0 },
    hsl: { h: 69.4117647058823, s: 100, l: 50 },
    name: "Yellow2",
  },
  {
    id: 191,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7ff5f", raw: "d7ff5f" },
    },
    rgb: { r: 215, g: 255, b: 95 },
    hsl: { h: 75, s: 100, l: 68 },
    name: "DarkOliveGreen1",
  },
  {
    id: 192,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7ff87", raw: "d7ff87" },
    },
    rgb: { r: 215, g: 255, b: 135 },
    hsl: { h: 80, s: 100, l: 76 },
    name: "DarkOliveGreen1",
  },
  {
    id: 193,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7ffaf", raw: "d7ffaf" },
    },
    rgb: { r: 215, g: 255, b: 175 },
    hsl: { h: 90, s: 100, l: 84 },
    name: "DarkSeaGreen1",
  },
  {
    id: 194,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7ffd7", raw: "d7ffd7" },
    },
    rgb: { r: 215, g: 255, b: 215 },
    hsl: { h: 120, s: 100, l: 92 },
    name: "Honeydew2",
  },
  {
    id: 195,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d7ffff", raw: "d7ffff" },
    },
    rgb: { r: 215, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 92 },
    name: "LightCyan1",
  },
  {
    id: 196,
    hex: {
      short: { full: "#f00", raw: "f00" },
      long: { full: "#ff0000", raw: "ff0000" },
    },
    rgb: { r: 255, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 50 },
    name: "Red1",
  },
  {
    id: 197,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff005f", raw: "ff005f" },
    },
    rgb: { r: 255, g: 0, b: 95 },
    hsl: { h: 337.647058823529, s: 100, l: 50 },
    name: "DeepPink2",
  },
  {
    id: 198,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff0087", raw: "ff0087" },
    },
    rgb: { r: 255, g: 0, b: 135 },
    hsl: { h: 328.235294117647, s: 100, l: 50 },
    name: "DeepPink1",
  },
  {
    id: 199,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff00af", raw: "ff00af" },
    },
    rgb: { r: 255, g: 0, b: 175 },
    hsl: { h: 318.823529411765, s: 100, l: 50 },
    name: "DeepPink1",
  },
  {
    id: 200,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff00d7", raw: "ff00d7" },
    },
    rgb: { r: 255, g: 0, b: 215 },
    hsl: { h: 309.411764705882, s: 100, l: 50 },
    name: "Magenta2",
  },
  {
    id: 201,
    hex: {
      short: { full: "#f0f", raw: "f0f" },
      long: { full: "#ff00ff", raw: "ff00ff" },
    },
    rgb: { r: 255, g: 0, b: 255 },
    hsl: { h: 300, s: 100, l: 50 },
    name: "Magenta1",
  },
  {
    id: 202,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff5f00", raw: "ff5f00" },
    },
    rgb: { r: 255, g: 95, b: 0 },
    hsl: { h: 22.3529411764706, s: 100, l: 50 },
    name: "OrangeRed1",
  },
  {
    id: 203,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff5f5f", raw: "ff5f5f" },
    },
    rgb: { r: 255, g: 95, b: 95 },
    hsl: { h: 0, s: 100, l: 68 },
    name: "IndianRed1",
  },
  {
    id: 204,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff5f87", raw: "ff5f87" },
    },
    rgb: { r: 255, g: 95, b: 135 },
    hsl: { h: 345, s: 100, l: 68 },
    name: "IndianRed1",
  },
  {
    id: 205,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff5faf", raw: "ff5faf" },
    },
    rgb: { r: 255, g: 95, b: 175 },
    hsl: { h: 330, s: 100, l: 68 },
    name: "HotPink",
  },
  {
    id: 206,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff5fd7", raw: "ff5fd7" },
    },
    rgb: { r: 255, g: 95, b: 215 },
    hsl: { h: 315, s: 100, l: 68 },
    name: "HotPink",
  },
  {
    id: 207,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff5fff", raw: "ff5fff" },
    },
    rgb: { r: 255, g: 95, b: 255 },
    hsl: { h: 300, s: 100, l: 68 },
    name: "MediumOrchid1",
  },
  {
    id: 208,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff8700", raw: "ff8700" },
    },
    rgb: { r: 255, g: 135, b: 0 },
    hsl: { h: 31.7647058823529, s: 100, l: 50 },
    name: "DarkOrange",
  },
  {
    id: 209,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff875f", raw: "ff875f" },
    },
    rgb: { r: 255, g: 135, b: 95 },
    hsl: { h: 15, s: 100, l: 68 },
    name: "Salmon1",
  },
  {
    id: 210,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff8787", raw: "ff8787" },
    },
    rgb: { r: 255, g: 135, b: 135 },
    hsl: { h: 0, s: 100, l: 76 },
    name: "LightCoral",
  },
  {
    id: 211,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff87af", raw: "ff87af" },
    },
    rgb: { r: 255, g: 135, b: 175 },
    hsl: { h: 340, s: 100, l: 76 },
    name: "PaleVioletRed1",
  },
  {
    id: 212,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff87d7", raw: "ff87d7" },
    },
    rgb: { r: 255, g: 135, b: 215 },
    hsl: { h: 320, s: 100, l: 76 },
    name: "Orchid2",
  },
  {
    id: 213,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ff87ff", raw: "ff87ff" },
    },
    rgb: { r: 255, g: 135, b: 255 },
    hsl: { h: 300, s: 100, l: 76 },
    name: "Orchid1",
  },
  {
    id: 214,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffaf00", raw: "ffaf00" },
    },
    rgb: { r: 255, g: 175, b: 0 },
    hsl: { h: 41.1764705882353, s: 100, l: 50 },
    name: "Orange1",
  },
  {
    id: 215,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffaf5f", raw: "ffaf5f" },
    },
    rgb: { r: 255, g: 175, b: 95 },
    hsl: { h: 30, s: 100, l: 68 },
    name: "SandyBrown",
  },
  {
    id: 216,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffaf87", raw: "ffaf87" },
    },
    rgb: { r: 255, g: 175, b: 135 },
    hsl: { h: 20, s: 100, l: 76 },
    name: "LightSalmon1",
  },
  {
    id: 217,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffafaf", raw: "ffafaf" },
    },
    rgb: { r: 255, g: 175, b: 175 },
    hsl: { h: 0, s: 100, l: 84 },
    name: "LightPink1",
  },
  {
    id: 218,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffafd7", raw: "ffafd7" },
    },
    rgb: { r: 255, g: 175, b: 215 },
    hsl: { h: 330, s: 100, l: 84 },
    name: "Pink1",
  },
  {
    id: 219,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffafff", raw: "ffafff" },
    },
    rgb: { r: 255, g: 175, b: 255 },
    hsl: { h: 300, s: 100, l: 84 },
    name: "Plum1",
  },
  {
    id: 220,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffd700", raw: "ffd700" },
    },
    rgb: { r: 255, g: 215, b: 0 },
    hsl: { h: 50.5882352941176, s: 100, l: 50 },
    name: "Gold1",
  },
  {
    id: 221,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffd75f", raw: "ffd75f" },
    },
    rgb: { r: 255, g: 215, b: 95 },
    hsl: { h: 45, s: 100, l: 68 },
    name: "LightGoldenrod2",
  },
  {
    id: 222,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffd787", raw: "ffd787" },
    },
    rgb: { r: 255, g: 215, b: 135 },
    hsl: { h: 40, s: 100, l: 76 },
    name: "LightGoldenrod2",
  },
  {
    id: 223,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffd7af", raw: "ffd7af" },
    },
    rgb: { r: 255, g: 215, b: 175 },
    hsl: { h: 30, s: 100, l: 84 },
    name: "NavajoWhite1",
  },
  {
    id: 224,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffd7d7", raw: "ffd7d7" },
    },
    rgb: { r: 255, g: 215, b: 215 },
    hsl: { h: 0, s: 100, l: 92 },
    name: "MistyRose1",
  },
  {
    id: 225,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffd7ff", raw: "ffd7ff" },
    },
    rgb: { r: 255, g: 215, b: 255 },
    hsl: { h: 300, s: 100, l: 92 },
    name: "Thistle1",
  },
  {
    id: 226,
    hex: {
      short: { full: "#ff0", raw: "ff0" },
      long: { full: "#ffff00", raw: "ffff00" },
    },
    rgb: { r: 255, g: 255, b: 0 },
    hsl: { h: 60, s: 100, l: 50 },
    name: "Yellow1",
  },
  {
    id: 227,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffff5f", raw: "ffff5f" },
    },
    rgb: { r: 255, g: 255, b: 95 },
    hsl: { h: 60, s: 100, l: 68 },
    name: "LightGoldenrod1",
  },
  {
    id: 228,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffff87", raw: "ffff87" },
    },
    rgb: { r: 255, g: 255, b: 135 },
    hsl: { h: 60, s: 100, l: 76 },
    name: "Khaki1",
  },
  {
    id: 229,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffffaf", raw: "ffffaf" },
    },
    rgb: { r: 255, g: 255, b: 175 },
    hsl: { h: 60, s: 100, l: 84 },
    name: "Wheat1",
  },
  {
    id: 230,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#ffffd7", raw: "ffffd7" },
    },
    rgb: { r: 255, g: 255, b: 215 },
    hsl: { h: 60, s: 100, l: 92 },
    name: "Cornsilk1",
  },
  {
    id: 231,
    hex: {
      short: { full: "#fff", raw: "fff" },
      long: { full: "#ffffff", raw: "ffffff" },
    },
    rgb: { r: 255, g: 255, b: 255 },
    hsl: { h: 0, s: 0, l: 100 },
    name: "Grey100",
  },
  {
    id: 232,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#080808", raw: "080808" },
    },
    rgb: { r: 8, g: 8, b: 8 },
    hsl: { h: 0, s: 0, l: 3 },
    name: "Grey3",
  },
  {
    id: 233,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#121212", raw: "121212" },
    },
    rgb: { r: 18, g: 18, b: 18 },
    hsl: { h: 0, s: 0, l: 7 },
    name: "Grey7",
  },
  {
    id: 234,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#1c1c1c", raw: "1c1c1c" },
    },
    rgb: { r: 28, g: 28, b: 28 },
    hsl: { h: 0, s: 0, l: 10 },
    name: "Grey11",
  },
  {
    id: 235,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#262626", raw: "262626" },
    },
    rgb: { r: 38, g: 38, b: 38 },
    hsl: { h: 0, s: 0, l: 14 },
    name: "Grey15",
  },
  {
    id: 236,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#303030", raw: "303030" },
    },
    rgb: { r: 48, g: 48, b: 48 },
    hsl: { h: 0, s: 0, l: 18 },
    name: "Grey19",
  },
  {
    id: 237,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#3a3a3a", raw: "3a3a3a" },
    },
    rgb: { r: 58, g: 58, b: 58 },
    hsl: { h: 0, s: 0, l: 22 },
    name: "Grey23",
  },
  {
    id: 238,
    hex: {
      short: { full: "#444", raw: "444" },
      long: { full: "#444444", raw: "444444" },
    },
    rgb: { r: 68, g: 68, b: 68 },
    hsl: { h: 0, s: 0, l: 26 },
    name: "Grey27",
  },
  {
    id: 239,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#4e4e4e", raw: "4e4e4e" },
    },
    rgb: { r: 78, g: 78, b: 78 },
    hsl: { h: 0, s: 0, l: 30 },
    name: "Grey30",
  },
  {
    id: 240,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#585858", raw: "585858" },
    },
    rgb: { r: 88, g: 88, b: 88 },
    hsl: { h: 0, s: 0, l: 34 },
    name: "Grey35",
  },
  {
    id: 241,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#626262", raw: "626262" },
    },
    rgb: { r: 98, g: 98, b: 98 },
    hsl: { h: 0, s: 0, l: 37 },
    name: "Grey39",
  },
  {
    id: 242,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#6c6c6c", raw: "6c6c6c" },
    },
    rgb: { r: 108, g: 108, b: 108 },
    hsl: { h: 0, s: 0, l: 40 },
    name: "Grey42",
  },
  {
    id: 243,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#767676", raw: "767676" },
    },
    rgb: { r: 118, g: 118, b: 118 },
    hsl: { h: 0, s: 0, l: 46 },
    name: "Grey46",
  },
  {
    id: 244,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#808080", raw: "808080" },
    },
    rgb: { r: 128, g: 128, b: 128 },
    hsl: { h: 0, s: 0, l: 50 },
    name: "Grey50",
  },
  {
    id: 245,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#8a8a8a", raw: "8a8a8a" },
    },
    rgb: { r: 138, g: 138, b: 138 },
    hsl: { h: 0, s: 0, l: 54 },
    name: "Grey54",
  },
  {
    id: 246,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#949494", raw: "949494" },
    },
    rgb: { r: 148, g: 148, b: 148 },
    hsl: { h: 0, s: 0, l: 58 },
    name: "Grey58",
  },
  {
    id: 247,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#9e9e9e", raw: "9e9e9e" },
    },
    rgb: { r: 158, g: 158, b: 158 },
    hsl: { h: 0, s: 0, l: 61 },
    name: "Grey62",
  },
  {
    id: 248,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#a8a8a8", raw: "a8a8a8" },
    },
    rgb: { r: 168, g: 168, b: 168 },
    hsl: { h: 0, s: 0, l: 65 },
    name: "Grey66",
  },
  {
    id: 249,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#b2b2b2", raw: "b2b2b2" },
    },
    rgb: { r: 178, g: 178, b: 178 },
    hsl: { h: 0, s: 0, l: 69 },
    name: "Grey70",
  },
  {
    id: 250,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#bcbcbc", raw: "bcbcbc" },
    },
    rgb: { r: 188, g: 188, b: 188 },
    hsl: { h: 0, s: 0, l: 73 },
    name: "Grey74",
  },
  {
    id: 251,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#c6c6c6", raw: "c6c6c6" },
    },
    rgb: { r: 198, g: 198, b: 198 },
    hsl: { h: 0, s: 0, l: 77 },
    name: "Grey78",
  },
  {
    id: 252,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#d0d0d0", raw: "d0d0d0" },
    },
    rgb: { r: 208, g: 208, b: 208 },
    hsl: { h: 0, s: 0, l: 81 },
    name: "Grey82",
  },
  {
    id: 253,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#dadada", raw: "dadada" },
    },
    rgb: { r: 218, g: 218, b: 218 },
    hsl: { h: 0, s: 0, l: 85 },
    name: "Grey85",
  },
  {
    id: 254,
    hex: {
      short: { full: "", raw: "" },
      long: { full: "#e4e4e4", raw: "e4e4e4" },
    },
    rgb: { r: 228, g: 228, b: 228 },
    hsl: { h: 0, s: 0, l: 89 },
    name: "Grey89",
  },
  {
    id: 255,
    hex: {
      short: { full: "#eee", raw: "eee" },
      long: { full: "#eeeeee", raw: "eeeeee" },
    },
    rgb: { r: 238, g: 238, b: 238 },
    hsl: { h: 0, s: 0, l: 93 },
    name: "Grey93",
  },
];

  
export default colorMap;