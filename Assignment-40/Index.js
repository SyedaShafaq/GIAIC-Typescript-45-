//Question-42 (Great Magicians)
let magicians = [`David Copperfield`, `Penn Jillette`, `Criss Angel`, `Dynamo`, `Derren Brown`];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician) {
    magicians.forEach((items) => {
        console.log(`"${items}"`);
    });
}
// Write a function called make_great() that modifies the array of magicians
function make_great(new_array) {
    for (let i = 0; i < new_array.length; i++) {
        new_array[i] = `The Great ` + new_array[i];
    }
}
make_great(magicians);
show_magicians(magicians);
export {};
//Call show_magicians() to see that the list has actually been modified.
//show_magicians(magicians)
