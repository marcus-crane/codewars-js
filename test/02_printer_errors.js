const assert = require('assert')
const printerError = require('../src/02_printer_errors.js')

describe('printerError', () => {
    it('returns expected error rate where a - m is valid and n - z is an error', () => {
        let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        assert.equal(printerError(s), "3/56")

        let t = "bbzzzzzzzzzz"
        assert.equal(printerError(t), "10/12")
    })
})
