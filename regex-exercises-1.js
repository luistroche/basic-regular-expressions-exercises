// First created script for regular expression exercises

// #1
// Apply the regex myRegex on the string myString using the .test() method.


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myRegex);
console.log(result); //==true

// #2
// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);

console.log(`${result2} <-- result2`);


// #3
// Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let resultPet = petRegex.test(petString);


console.log(`${resultPet} <-- resultPet`);


