# number-to-fixed

formats a number using fixed-point notation and returns a number

----
<a href="https://nodei.co/npm/number-to-fixed/"><img src="https://nodei.co/npm/number-to-fixed.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/number-to-fixed)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/number-to-fixed/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/number-to-fixed/blob/master/package.json#L42)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api

`const toFixed = require('number-to-fixed')`

toFixed(number, [number of digits to appear after the decimal point])

for non valid numbers will return NaN and for `null` will return 0

### examples

#### first example
```js
const toFixed = require('number-to-fixed')

toFixed(123.456, 2)// should return 123.46
```



#### ISC License (ISC)
