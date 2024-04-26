//Question-31 (No Users)
// If the list is empty, print the message We need to find some users!
let empty_List = [``];
console.log(empty_List);
//Remove all of the usernames from your array, and make sure the correct message is printed.
if (empty_List.includes(``)) {
    console.log(`We need to find some users!`);
}
else {
    console.log(empty_List);
}
export {};
