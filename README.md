# @princedev/calculate
> Fast, lightweight, and extinsible mathematical and statistical functions.

[![NPM](https://img.shields.io/npm/v/@princedev/calculate.svg)](https://www.npmjs.com/package/@princedev/calculate)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@princedev/calculate)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@princedev/calculate)
![NPM](https://img.shields.io/npm/l/@princedev/calculate)

## Table of Contents
 - [Installation](#installation)
 - [Import](#import)
 - [Usage](#usage)
 - [Authors](#authors)
 - [Changelog](#changelog)
 - [License](#license)

<!-- toc -->

## Installation

This library is available through the [npm registry](https://www.npmjs.com/).

NPM
```bash
$ npm -i @princedev/calculate
```

Yarn
```bash
$ yarn add @princedev/calculate
```

## Import

Start using it by importing the library first.

### CommonJS
```javascript
const calculate = require('@princedev/calculate');
```

### ES6
```javascript
import calculate from '@princedev/calculate';

// or

import { sum } from '@princedev/calculate';
```

## Usage

Let's start with basic arithmetics.

Getting the sum of given numbers.
```javascript
import { sum } from '@princedev/calculate';

sum(12,24);
// output: 36

sum(12,24,36,48,60,72,84,96,108,120,132)
// output: 792
```

Can also be done in this way.
```javascript
import calculate from '@princedev/calculate';

calculate.sum(12,24);
// output: 36

calculate.sum(12,24,36,48,60,72,84,96,108,120,132)
// output: 792
```

Getting the difference of given numbers.
```javascript
import { difference } from '@princedev/calculate';

difference(12,24);
// output: -12

difference(24,12,8)l
// output: 4
```

Getting the product of given numbers.
```javascript
import { product } from '@princedev/calculate';

product(3,4);
// output: 12

product(-2,-4,6);
// output: 48
```

Getting the quotient of given numbers.
```javascript
import { quotient } from '@princedev/calculate';

quotient(12,3);
// output: 4

quotient(8, 4, 2);
// output: 1
```

Getting the remainder of given numbers.
```javascript
import { remainder } from '@princedev/calculate';

remainder(12,3);
// output: 0

remainder(4, 3, 3);
// output: 1
```

**Note** The functions above always reads the parameter/numbers given from left to right.

## Authors

- [Prince Neil Cedrick Castro](https://github.com/git-ced/) - Initial work

See also the list of [contributors](https://github.com/git-ced/calculate/contributors) who participated in this project.

## Changelog

[Changelog](https://github.com/git-ced/calculate/releases)

## License

  [MIT](LICENSE)
