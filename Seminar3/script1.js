const words =
[
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",    
    "horse",
]

const forbiddenWord="crocodile";
const minLength=4;
const filterWords = (words,forbiddenWord,minLength) =>
    {
        return words.filter((word)=> word!==forbiddenWord && word.length>=minLength)
    };
console.log(filterWords(words,forbiddenWord,minLength));

let array = [2001,2005,2014,2001,2004,1994,1984,2008];
console.log(array.map(year => 2025-year).filter(age => age>=18));
