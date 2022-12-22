# map() in JavaScript

1. _map() creates a new array from calling a function for every array element_

2. _map() calls a function once for each element in an array_

3. _map() does not execute the function for empty elements_

4. _map() does not change the original array_

### Given an array of numbers, return an array of each number, square

const nums = [1, 2, 3, 4, 5]

const sqaured = nums.map(function(num){
return num*num;
})

### Given an array of Strings, return an array of where the first letter of each string is captalized

cost names = ["Aman", "Alice", "Bob", "Shawan"]

const upperCase = names.map((name)=>{
    return name[0].toUpperCase() + name.slice(1);
})


###Given an array of strings, return an array like this
const pokemon = ["Bulbul", "TajMahal", "Nartuo"]

##### Like this
[`<p>Bulbul</p>`, `<p>TajMahal</#p>`, `<p>Nartuo</p>`]

const elements = pokemon.map(mon => {
    return `<p>${mon}</p>`
})