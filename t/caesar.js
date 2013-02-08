var test = require('tape')
  , caesar = require('../caesar.js')
  , alph = 'abcdefghijklmnopqrstuvwxyz'

test('caesar.js', function (t) {
  t.same(caesar(0, 'a'), 'a', 'rot0 returns same letter')
  t.same(caesar(1, 'a'), 'b', 'rot1 returns the next')
  t.same(caesar(0, 'abc'), 'abc', 'handle multiple chars')
  t.end()
})

