console.log('Hello')

const line = ['bob','steve','mike','phil','john']

line.splice(4,0,'aaron') // starting at index 2, delete 0 items, add in the string 'aaron'. this then pushes values over one spot

line.splice(1,2) // starting at index 1, delete 2 items

let getBob = line.splice(0,1) // takes the value at index 0, deletes that 1 position, and assigns it to a new variable that we can call 

console.log(line,getBob)