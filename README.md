# Color
Color models for Hex, RGB and Names and mappings between the models

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
    1. [Hex](#hex)
    2. [Rgb](#rgb)
    3. [Names](#names)
    4. [ColorMap](#colormap)
3. [Example App](#example-app)
4. [Contributing](#contributing)
5. [License](#license)
6. [Acknowledgments](#acknowledgments)


## Installation
`npm install @bindn/colors`

## Usage
Import the library

`import { Hex, Rgb, Names, ColorMap } from "@bindn/color'";`

### Hex

Color Model to represent the hexadecimal value of a color

**value**

Returns the value of the hex

Example
```
const hex = new Hex('000');
console.log(hex.value);
```

Result: `000`


**isValid**

Returns true if the value is a valid hex code

The following formats, with leading and/or trailing whitespace, will return true

* #000
* 000
* #000000
* 000000

Example: `Hex.isValid('#000');`

Result: `true`

**format**

Returns the value, if valid, with a hash tag at the beginning and without leading or trailing whitespace

Example: `Hex.format('000');`

Result: `#000`

**cleanse**

Returns the value stripped of invalid characters, the hash tag, and whitespace

Example: `Hex.cleanse('#000%000');`

Result: `000000`


**longCode**

Returns the long code of a valid short code or an empty string if the code is not valid

Example: `Hex.longCode('#000');`

Result: `000000`

**shortCode**

Returns the short code of a valid long code or an empty string if the code is not valid or does not have a short code

Example: `Hex.shortCode('#000000');`

Result: `000`

### RGB

Color Model to represent the red, green and blue values of a color

**isValid**

Returns true if the red, green and blue values are inclusively between 0 and 255

Example: `Rgb.isValid(0,0,0);`

Result: `true`


**isValueValid**

Returns true if the value is inclusively between 0 and 255

Example: `Rgb.isValueValid(0);`

Result: `true`


**red**

Property to represent the red value as a number

Example
```
const rgb = new Rgb(255,0,0);
console.log(rgb.red);
```

Result: `255`


**green**

Property to represent the green value as a number

Example
```
const rgb = new Rgb(0,255,0);
console.log(rgb.green);
```

Result: `255`


**blue**

Property to represent the blue value as a number

Example
```
const rgb = new Rgb(0,0,255);
console.log(rgb.blue);
```

Result: `255`


### Names

A list of names for colors with their hex value


**list**

Returns an array of all names with hex value in alphabetical order by name

Example: `Names.list().default;`

Result
```
[
  {value: 'Abbey', hex:'4C4F56'},
  {value: 'Acadia', hex:'1B1404'},
  {value: 'Acapulco', hex:'7CB0A1'},
  ...
]
```

**search**

Returns a list of names which include the search term

Example: `Names.list().search('Bla');`

Result
```
[
  {value: 'Black', hex:'000000'},
  {value: 'Black Bean', hex:'081910'},
  {value: 'Sepia Black', hex:'2B0202'},
  ...
]
```


**value**

Property to represent the string value of the name

Example
```
const names = Names.list().default;
console.log(names[0].value);
```

Result: `Abbey`



**hex**

Property to represent the hex value of the name

Example
```
const names = Names.list().default;
console.log(names[0].hex);
```

Result: `4C4F56`

### ColorMap

A map between hex, rgb and name color models

**Hex.toRgb**

Returns an Rgb with correct values for a valid short or long hex or -1 for all properties if the hex is invalid

Example: `Hex.toRgb('4C4F56');`

Result: `{red: 76, green: 79, blue: 86}`

**Hex.toName**

Returns the string name for a valid short or long hex or an empty string if the hex is invalid

Example: `const nameValue = Hex.toName('4C4F56');`

Result: `Abbey`

**Rgb.toHex**

Returns a hex for a valid rgb or a hex with a value of an empty string if the rgb is invalid

Example: `Rgb.toHex(76, 79, 86);`

Result: `{value: '4C4F56'}`

**Rgb.toName**

Returns the name for a valid rgb or a name with a value of an empty string if the rgb is invalid 

Example: `Rgb.toName(76, 79, 86);`

Result: `{value:'Abbey', hex:'4C4F56'}`

## Example App

Run the following commands

1. `npm install`
2. `npm run dev`
3. Open browser to [http://localhost:5000](http://localhost:5000)


## Contributing
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup
1. Clone repository
2. Open root folder
3. Execute `npm install`

### Run Tests
* Unit Tests: `npm test:unit`
* Test Coverage: `npm test:coverage`
* E2E Tests: `npm test:e2e`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments
* djkprojects for the [math to convert color codes](https://github.com/djkprojects/html5/blob/master/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html)
