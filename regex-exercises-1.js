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


// #4
// Ignore case matching with flag /i
// Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString2 = "FreeCodeCamp";
let fccRegex = /freecodecamp/i;
let result4 = fccRegex.test(myString2);

console.log(`${result4} <-- result4`);


// #5
// Extract Matches string.match();
// Apply the .match() method to extract the word coding.

let extractStr = "Extract the word 'coding' from the string";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);

console.log(`${result5} <-- result5`);

