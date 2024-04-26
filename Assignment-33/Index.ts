//Question-35 (Animals)

import { log } from "console";

//Store the names of these animals in a list
let pet_animals:string[] = [`Dogs`,`Cats`,`Rabbits`];
console.log(pet_animals);

//and then use a for loop to print out the name of each animal
for(let i = 0 ; i < pet_animals.length ; i++){
    console.log(pet_animals[i]);
    //Modify your program to print a statement about each animal

    if(pet_animals[i] === pet_animals[0]){
        console.log(pet_animals[i] + `!`+` Having a dog as a pet can bring so much joy and happiness into a person's life.They are always there to greet you with a wagging tail and a big smile, no matter what kind of day you've had. Dogs are also great for physical and mental health, as they require regular exercise and can help reduce stress and anxiety`)
        ;
        
    }
    else if (pet_animals[i] === pet_animals[1])
        console.log(pet_animals[i] + ` are the most popular pet in the world,and they are also one of the most popular pets for people to adopt. Cats have a wide range of temperaments, and they can be friendly or aggressive, depending on the situation. Cats are also very social creatures, and they can bond with other animals and people`)

    else if (pet_animals[i] === pet_animals[2]){
        console.log(pet_animals[i] + ` are a popular pet, and they are also a good source of nutrients.Rabbits are very social creatures, and they can bond with other animals and people. Rabbits are also very social creatures, and they can bond with other animals and people`)
    }
}
//Addline whats common in all 3 
let add_Line:string = `\n \t Dogs, cats, and rabbits are social animals that thrive on companionship and interaction with their owners and other animals. They enjoy being part of a family and can form strong attachments to their human caregivers \t \n`
console.log(add_Line);

let sentence:string = `\n \t Dogs are known for their loyalty, companionship,and ability to form strong bonds with their owners,Cats are independent yet affectionate animals that can make great companions for people who appreciate their low-maintenance nature,Rabbits are gentle, social animals that can form strong bonds with their owners \t \n`

console.log(sentence);
