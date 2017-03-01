function isIsogram(str) {
    let word = Array.from(str.toLowerCase()).sort()
    let dupeFound = false

    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
            return false
        }
    }

    return true
}

module.exports = isIsogram
