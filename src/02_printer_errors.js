function printerError(s) {
    let error = 0

    for (let i of s) {
        if (i >= 'n' && i <= 'z') {
            error++
        }
    }

    return `${error}/${s.length}`
}

module.exports = printerError
