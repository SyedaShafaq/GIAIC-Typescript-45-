//Question-19 (Dinner Guests)
//Working with one of the programs from Exercises 14
//Ex-14 array
let guestList = [`Zainab`, `Zara`, `Anaya`, `Shifa`];
// print a message indicating the number of people you are inviting to dinner
console.log(`I am inviting ${guestList.length} people for the dinner`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`${i + 1}`, `${guestList[i]}`);
}
export {};
