//Question-32 (Checking Usernames)
//Do the following to create a program that simulates how websites ensure that everyone has a unique username
//Make a list of five or more usernames called current_users.
let current_users = [`Saima Ahmed`, `Usman Khan`, `Sadia Hussain`, `Bilal Ahmed`, `Zara Khan`];
console.log(current_users);
//Make another list of five usernames called new_users
let new_users = [`Ayesha Khan`, `Fatima Malik`, `Hassan Shah`, `Saima Ahmed`, `Usman Khan`];
console.log(new_users);
//Loop through the new_users list to see if each new username has already been used
new_users.forEach((items) => {
    if (current_users.includes(items)) {
        console.log(`${items} is already taken`);
    }
    else {
        console.log(`${items} is available`);
    }
});
export {};
