const isIsogram = require('../src/01_isograms.js')
const assert = require('assert')

describe('isIsogram', () => {
    it('returns true when mixed case word does not contain the same letter twice', () => {
        assert.equal(isIsogram('Dermatoglyphics'), true)
    })

    it('returns true when lowercase word does not contain the same letter twice', () => {
        assert.equal(isIsogram('isogram'), true)
    })

    it('returns false when the same character appears in a word twice', () => {
        assert.equal(isIsogram('aba'), false)
    })

    it('returns false even if same characters appear but in different cases', () => {
        assert.equal(isIsogram('moOse'), false)
    })

    it('returns true when provided an empty string as that is a valid isogram', () => {
        assert.equal(isIsogram(''), true)
    })
})
