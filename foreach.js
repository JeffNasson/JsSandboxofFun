// .forEach()

const ages = [53,50,29,22,16]

for (let i=0; i<ages.length;i++){
    ages[i] = ages[i]+1 //loops through the array and adds 1 to each index
}

ages.forEach(function(val,i,ages){ //loops through each val(index) of an array, i is the index location, ages is the array we are modifying
    ages[i] = val+1; // at each ages[index], add 1 to val
})

console.log(ages)
