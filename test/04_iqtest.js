const assert = require('assert')
const iqTest = require('../src/04_iqtest')

describe('iqTest', () => {
    it('should return the (non-zero) index of the number that is the odd one out', () => {
        assert.equal(iqTest("2 4 7 8 10"), 3)
        assert.equal(iqTest("1 2 2"), 1)
    })
})
