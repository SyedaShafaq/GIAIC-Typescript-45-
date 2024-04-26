//Question-29 (Favorite Fruit)
// Make a array of your favorite fruits
//Make a array of your three favorite fruits and call it 
let favorite_fruits = [`Mango`, `Watermelon`, `Orange`];
console.log(favorite_fruits);
// Write five if statements
//Each should check whether a certain kind of fruit is in your array
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes(`Mango`)) {
    console.log(`I really like Mangoes`);
}
if (favorite_fruits.includes(`Bananas`)) {
    console.log(`I really like Bananas`);
}
else {
    console.log(`Bananas are not in the array`);
}
if (favorite_fruits.includes(`Watermelon`)) {
    console.log(`I really like Watermelon`);
}
if (favorite_fruits.includes(`Grapes`)) {
    console.log(`I really like Grapes`);
}
else {
    console.log(`Grapes are not in the array`);
}
if (favorite_fruits.includes(`Orange`)) {
    console.log(`I really like Oranges`);
}
export {};
