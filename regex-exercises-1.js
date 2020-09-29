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

// #6
// Global flag
// You can have Multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result6 = twinkleStar.match(starRegex);

console.log(`${result6} <--Result 6`);

// #7
// wildcard Period
// Complete the regex unRegex so that it matches the strings "run", "sun", "fun", "pun", "nun", and "bun". Your regex should use the wildcard character.

let temon = "lets have fun with regular expressions lets run under the sun and eat hotdog on a bun";
let regex7 = /.un/gi;
let result7 = regex7.test(temon);

console.log(`${result7}  <-- result7`);

// #8
// match character with multiple possibilities
// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

// Note
// Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."
let vowelRegex = /[aeiou]/gi;
let result8 = quoteSample.match(vowelRegex);

console.log(result8);

