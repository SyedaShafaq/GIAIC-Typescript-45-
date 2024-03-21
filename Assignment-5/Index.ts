//Question-06 (Stripping Names)
//Store a person's name, include some whitespace characters
let personName:string = `Syeda Shafaq`;
console.log(personName);

//With \t (Space)
personName = `\tSyeda Shafaq`;
console.log(personName);

//With \n (New line)
personName = `\n${personName}`;
console.log(personName);

//With trim
let personName2 = personName.trim();
console.log(personName2);




