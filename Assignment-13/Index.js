//Question-15 (Changing guest list)
//You just heard that one of your guests can’t make the dinner
// Start with your program from Exercise 14
let guestList = [`Zainab`, `Zara`, `Anaya`, `Shifa`];
console.log(guestList);
// need to send out a new set of invitations
//With the help of splice
let newGuestList = guestList.splice(1, 1, `Aiman`);
console.log(guestList);
//Print a second set of invitation messages, one for each person who is still in your list
let message = `Come join us for a night of laughter, great conversations, and mouth-watering dishes`;
console.log(`${guestList[0]}! ${message}`);
console.log(`${guestList[1]}! ${message}`);
console.log(`${guestList[2]}! ${message}`);
console.log(`${guestList[3]}! ${message}`);
//Can't make the dinner
console.log(newGuestList);
export {};
