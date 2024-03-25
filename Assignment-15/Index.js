//Question-17 (Shrinking Guest List)
// Start with your program from Exercise 16
let guestList = ['Minha', 'Zainab', 'Aiman', 'Zimal', 'Anaya', 'Shifa', 'Simra'];
console.log(guestList);
//print a message to that person letting them know you’re sorry you can’t invite them to dinner
let message = `I hope this message finds you well. I wanted to reach out and let you know that I'm truly sorry, but I won't be able to invite you to dinner this time. I appreciate your understanding and I hope we can catch up soon`;
// Remove guests from your list one at a time
//Using shift method
let removeGuest = guestList.shift();
console.log(removeGuest, message);
removeGuest = guestList.shift();
console.log(removeGuest, message);
//Using Splice method
removeGuest = guestList.splice(2, 1);
console.log(removeGuest, message);
//Using Pop method
removeGuest = guestList.pop();
console.log(removeGuest, message);
removeGuest = guestList.pop();
console.log(removeGuest, message);
//Remaining guest
console.log(guestList);
//Print a message to each of the two people still on your list, letting them know they’re still invited
let twoGuestMessage = `I wanted to remind you that you are still cordially invited to join us for dinner. Your presence would truly make the evening special.`;
//print message for remaining two guest
console.log(guestList[0], message);
console.log(guestList[1], message);
//Remove the last two names from your list, so you have an empty list
removeGuest = guestList.pop();
console.log(removeGuest);
removeGuest = guestList.shift();
console.log(removeGuest);
//Empty Guest List
console.log(guestList);
export {};
