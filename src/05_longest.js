// function longest(s1, s2) {
//   let letters = []
//
//   function findUnique(array, string) {
//       for (let i of string) {
//           if (array.indexOf(i) === -1) {
//               array.push(i)
//           }
//       }
//
//       return array
//   }
//
//   letters = findUnique(letters, s1)
//   letters = findUnique(letters, s2)
//
//   return letters.sort().join('')
// }

// A Set can contain only unique values so using one means that we don't have to check any values
// We can then spread the set into an array which is then sortable
function longest(s1, s2) {
    return [...new Set(s1+s2)].sort().join('')
}

module.exports = longest
