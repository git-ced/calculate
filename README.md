# @princedev/calculate
> Fast, lightweight, and extinsible mathematical and statistical functions.

[![NPM](https://img.shields.io/npm/v/@princedev/calculate.svg)](https://www.npmjs.com/package/@princedev/calculate)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@princedev/calculate/1.1.4)
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
import { sum } from '@princedev/calculate';
```

## Usage

**Getting the sum of given numbers.**
```javascript
import { sum } from '@princedev/calculate';

sum(12,24);
// output: 36

sum(12,24,36,48,60,72,84,96,108,120,132);
// output: 792

sum(...[12,24,36,48,60,72,84,96,108,120,132]);
// output: 792
```

**Can also be done in this way.**
```javascript
import calculate from '@princedev/calculate';

calculate.sum(12,24);
// output: 36

calculate.sum(12,24,36,48,60,72,84,96,108,120,132)
// output: 792
```

Read the [docs](https://git-ced.github.io/calculate-docs/) for more.

## Authors

- [Prince Neil Cedrick Castro](https://github.com/git-ced/) - Initial work

See also the list of [contributors](https://github.com/git-ced/calculate/contributors) who participated in this project.

## Changelog

[Changelog](https://github.com/git-ced/calculate/releases)

## License

  [MIT](LICENSE)
