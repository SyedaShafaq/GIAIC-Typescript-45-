//Question-15 (Changing Guest List)
//Start with your program from Exercise 14

let guestList:string[] = [`Zainab`,`Zara`,`Anaya`,`Shifa`];

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let newGuestList:string[] = guestList.splice(1,1,`Aiman`);
console.log(guestList);


//Print a second set of invitation messages, one for each person who is still in your list

let message:string = `Come join us for a night of laughter, great conversations, and mouth-watering dishes`;

//Send everyone invitation

console.log(`${guestList[0]}! ${message}`);
console.log(`${guestList[1]}! ${message}`);
console.log(`${guestList[2]}! ${message}`);
console.log(`${guestList[3]}! ${message}`);

//guest who can't make it
console.log(newGuestList);
