//Question-30 (Hello Admin)
//Make a array of five or more usernames, including the name 'admin'
let user_names:string[] =[`Shafaq`,`Zoya`,`Rayan`,`Admin`,`Safah`];
console.log(user_names);

// Loop through the array, and print a greeting to each user
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
user_names.forEach((items)=>
{
    if(items === 'Admin')
    {
        console.log(`Hello ${items}, would you like to see a status report?`);
    }
    else
    {
        console.log(`Hello ${items}, thank you for logging in again`);
    }
})
 


