const assert = require('assert')
const longest = require('../src/05_longest')

describe('longest', () => {
    it('should merge two strings returning the longest combination possible without reusing letters', () => {
        assert.equal(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        assert.equal(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        assert.equal(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    })
})
