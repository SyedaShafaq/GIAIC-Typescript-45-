//Question-28 (Stages of Life)
//Write an if-else chain that determines a person’s stage of life
//Set a value for the variable age
let baby_age:number = 1.9;
let toddler_age:number = 2;
let kid_age:number = 4 ;
let teenager_age:number = 13;
let adult_age:number = 20 ;
let elder_age:number = 65 ;
//For Baby
 if(baby_age < toddler_age){
    console.log(`You're a baby`);
}
else{
    console.log(`You're not a baby`);
}
//For toddler
if(toddler_age < kid_age){
    console.log(`You're a toddler`);
    
}
else{
    console.log(`You're not a toddler`);
}

//For kid
if(kid_age < teenager_age){
    console.log(`You're a kid`);
}

else{
    console.log(`You're not a kid`);
}

//For teenager
if(teenager_age < adult_age){
    console.log(`You're a teenager`);
}

else{
    console.log(`You're not a teenager`);
}

//For adult

if(adult_age < elder_age){
    console.log(`You're an adult`);
}

else{
    console.log(`You're not an adult`);
}

//For elder

if(elder_age > adult_age){
    console.log(`You're an elder`);
}

else{
    console.log(`You're not an elder`);
}

