// .filter()  pulls certain pieces of data from our array based on certain criteria

let names = ['suzie','ben','mark','frank']

let shortNames = names.filter(function(val,i,arr){
    return val.length<5;
})

console.log(names,shortNames)