/*
eslint
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const toFixed = require('./')

test('number-to-fixed', (assert) => {
  assert.deepEqual(
    toFixed(123.456, 2),
    123.46,
    'should show only 2 digits after the decimal point'
  )

  assert.deepEqual(
    toFixed(123.456),
    123,
    'should show none digits after the decimal point'
  )

  assert.deepEqual(
    toFixed('123.456'),
    123,
    'if is passed as a string but is a valid number'
  )

  assert.deepEqual(
    toFixed('-123.456', 1),
    -123.5,
    'should work for negative number too'
  )

  assert.deepEqual(
    isNaN(toFixed('not number')),
    true,
    'should return NaN when ins\'t a valid number'
  )

  assert.deepEqual(
    toFixed(null),
    0,
    'should return 0 when using null'
  )

  assert.end()
})
