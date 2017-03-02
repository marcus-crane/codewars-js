function printerError(s) {
    let error = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'n' && s[i] <= 'z') {
            error++
        }
    }

    return `${error}/${s.length}`
}

module.exports = printerError
