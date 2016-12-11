/*
eslint
max-len: ["error", 80]
*/
'use strict'

module.exports = toFixed

function toFixed (num, digits) {
  return +(Number(num).toFixed(digits))
}
