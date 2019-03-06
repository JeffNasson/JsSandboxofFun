const line = ['sue','mo','ted','wendy','theo','fred','stan']

let wholeLineCopy = line.slice() // makes a copy of the entire line

let lastThreeCopy = line.slice(4) // makes a copy of everything starting at index 4 onwards

let middleThreeCopy = line.slice(2,5) // makes a copy of everything starting at index 2 and end at index 5

console.log(wholeLineCopy, lastThreeCopy, middleThreeCopy)