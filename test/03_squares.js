const isSquare = require('../src/03_squares.js')
const assert = require('assert')

describe('isSquare', () => {
    it('returns false for negative numbers', () => {
        assert.equal(isSquare('-1'), false)
        assert.equal(isSquare('-4'), false)
        assert.equal(isSquare('-25'), false)
    })

    it('returns true for square numbers', () => {
        assert.equal(isSquare('0'), true)
        assert.equal(isSquare('16'), true)
        assert.equal(isSquare('25'), true)
    })

    it('returns false for non-square numbers', () => {
        assert.equal(isSquare('26'), false)
        assert.equal(isSquare('3'), false)
        assert.equal(isSquare('251'), false)
    })
})
