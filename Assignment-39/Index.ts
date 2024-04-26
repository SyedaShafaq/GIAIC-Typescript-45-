//Question-41 (Magicians)
// Make a array of magician’s names

const magicians:string[] = [`David Copperfield`,`Penn Jillette`,`Criss Angel`,`Dynamo`,`Derren Brown`];

// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians (){
    magicians.forEach((items)=>{
        console.log(`The magician "${items}"`);
    })

}
show_magicians();