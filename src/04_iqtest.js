// function iqTest(numbers) {
//     let input = numbers.split(' ')
//     let even = []
//     let odd = []
//
//     for (let i in input) {
//         if (parseInt(input[i]) % 2 === 0) {
//             even.push(input[i])
//         } else {
//             odd.push(input[i])
//         }
//     }
//
//     if (even.length > odd.length) {
//         return input.indexOf(odd[0]) + 1
//     } else {
//         return input.indexOf(even[0]) + 1
//     }
// }

function iqTest(numbers) {
    numbers = numbers.split(' ').map((num) => { return parseInt(num) })

    let odd = numbers.filter((num) => { return num % 2 === 1 })
    let even = numbers.filter((num) => { return num % 2 === 0 })

    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1)
}

module.exports = iqTest
