//Question-42 (Unchanged Magicians)
//Start with your work from Exercise 40
let magicians = [`David Copperfield`, `Criss Angel`, `Penn Jillette`, `David Blaine`, `Dynamo`];
//Copy Array
let magicians2 = [...magicians];
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
//show_magicians(magicians)
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(new_array) {
    for (let i = 0; i < new_array.length; i++) {
        new_array[i] = `The Great ${new_array[i]}`;
    }
}
//make_great(magicians)
//. Call show_magicians() to see that the list has actually been modified
//show_magicians(magicians);
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
function make_great2(phrase) {
    let great_magicians = "";
    for (let item of magicians2) {
        great_magicians += ` ${phrase}  "${item}" , `;
    }
    return great_magicians;
}
let great_array = make_great2(`The Great`);
let great_magicians2 = great_array.split(`\n`);
console.log(`\n \t The Modified Array \t \n`);
console.log(great_magicians2);
console.log(`\n \t Original Array \t \n`);
console.log(magicians);
export {};
