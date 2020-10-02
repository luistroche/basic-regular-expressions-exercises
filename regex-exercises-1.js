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

console.log(`${result6} <--Result6`);

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

console.log(`${result8} <--result8`);

// #9
// match letters of the Alphabet
// Match all the letters in the string quoteSample
// Note: Be sure to match both upper-lowercase letters


let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result9 = quoteSample1.match(alphabetRegex);

console.log(`${result9} <--result9`);

// #10
// Match letters and numbers to the regex
// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. 
// Remember to include the appopriate flas in the regex.

let quoteSample2 = 'Blueberry 3.14159263s are delicious.';
let myRegex10 = /[h-s2-6]/gi;
let result10 = quoteSample.match(myRegex10);

console.log(`${result10} <--result10`);

;
 
// #11
// negate characters with ^ character
// ToDo create a single regex that matches all characters that are not a number or a vowel.
// Remember to include the appropriate flags in the regex.

let quoteSample3 = "3 blind mice.";
let myRegex11 = /[^aeiou0-9]/gi;
let result11 = quoteSample.match(myRegex11);

console.log(`${result11.length} <--result11.lenght`);

// #12
// match double characters or numbers  with + sign
// You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex12 = /s+/gi; //consider regex whithin brackets will give as result single output.
let result12 = difficultSpelling.match(myRegex12);

console.log(`${result12} <--result12`);

// #13
// match characters that occur zero or more TimeRanges
// For this challenge, chewieQuote has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" 
// behind the scenes. Create a regex chewieRegex that uses the * character to match 
// an uppercase "A" character immediately followed by zero or more 
// lowercase "a" characters in chewieQuote. 
// Your regex does not need flags or character classes, and it should not match 
// any of the other quotes.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result13 = chewieQuote.match(chewieRegex);

console.log(`${result13} <--result13`);
console.log(result13.length);


// #14
// lazy Matching
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text 
// "<h1>Winter is coming</h1>". Remember the wildcard . in a 
// regular expression matches any character.

let someText = "<h1>Winter is coming</h1>";
let regex14 = /<.*?1>/;
let result14 = someText.match(`${regex14} <--result14`);


// #15
// Find all the "c"

let findTheC = "P6P2P7P4P5CCCCCP3P1";
let theFinderRegex = /c+/gi;
let result15 = findTheC.match(theFinderRegex);

console.log(`${result15} <--result15`);
