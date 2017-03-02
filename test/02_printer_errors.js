const printerError = require('../src/02_printer_errors.js')
const assert = require('assert')

describe('printerError', () => {
    it('returns 3/56 for the control string where a - m is valid and n - z is an error', () => {
        let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        assert.equal(printerError(s), "3/56")
    })
})
