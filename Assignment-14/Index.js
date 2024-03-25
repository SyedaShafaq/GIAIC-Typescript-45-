//Question-16 (More Guests)
// Start with your program from Exercise 15.
let guestList = ['Zainab', 'Aiman', 'Anaya', 'Shifa'];
console.log(guestList);
// Add one new guest to the beginning of your array
let newGuestList = guestList.unshift(`Minha`);
console.log(guestList);
//Add one new guest to the middle of your array
newGuestList = guestList.splice(3, -1, `Zimal`);
console.log(guestList);
// Use append() to add one new guest to the end of your list
newGuestList = guestList.push(`Simra`);
console.log(guestList);
//Print a new set of invitation messages, one for each person in your list
let messages = `"Exciting news! I've just found a big dinner table that can accommodate more guests. If you'd like to join us for a delicious meal and great company`;
//Send everyone invitation
console.log(`${guestList[0]}! ${messages}`);
console.log(`${guestList[1]}! ${messages}`);
console.log(`${guestList[2]}! ${messages}`);
console.log(`${guestList[3]}! ${messages}`);
console.log(`${guestList[4]}! ${messages}`);
console.log(`${guestList[5]}! ${messages}`);
console.log(`${guestList[6]}! ${messages}`);
export {};
