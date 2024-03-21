//Question-3 (Name Cases)
//Store a person's name in a variable

import { log } from "console";

let personName:string = `Syeda shafaq saleem`;

//Print that person's name in lowercase,uppercase,titlecase

//LowerCase
console.log(`LowerCase:${personName.toLowerCase()}`);

//UpperCase
console.log(`UpperCase:${personName.toUpperCase()}`);

//TitleCase
let uppercase = personName.charAt(0).toUpperCase();
let lowercase = personName.slice(1).toLowerCase();
let titlecase = uppercase + lowercase;
console.log(`TitleCase:${titlecase}`);





