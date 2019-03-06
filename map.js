// .map()

let ages2016 = [53,50,29,22,16]

let ages2017 = ages2016.map(function(element){
    return element + 1; //loops through each index/element in the array and adds 1
}) //map makes a new empty array that we place our new values in

console.log(ages2016,ages2017)