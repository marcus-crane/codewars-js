const assert = require('assert')
const isIsogram = require('../src/01_isograms')

describe('isIsogram', () => {
    it('returns true when input does not contain the same letter twice', () => {
        assert.equal(isIsogram('Dermatoglyphics'), true)
        assert.equal(isIsogram('isogram'), true)
    })

    it('returns false when the same character appears in a word twice', () => {
        assert.equal(isIsogram('aba'), false)
        assert.equal(isIsogram('moOse'), false)
    })

    it('returns true when provided an empty string as that is a valid isogram', () => {
        assert.equal(isIsogram(''), true)
    })
})
