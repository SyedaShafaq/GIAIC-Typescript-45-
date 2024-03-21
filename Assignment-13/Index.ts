//Question-15 (Changing guest list)
//You just heard that one of your guests can’t make the dinner

let guestList:string[] = [`Zainab`,`Zara`,`Anaya`,`Shifa`];
console.log(guestList);

// need to send out a new set of invitations
//With the help of splice
let newGuestList:string[] = guestList.splice(1 , 1 , `Aiman`);
console.log(newGuestList);
console.log(guestList);

