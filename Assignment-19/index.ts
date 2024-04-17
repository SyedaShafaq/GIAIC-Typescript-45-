//Question-20 (They think of something you could store in a TypeScript Object)

import { describe } from "node:test"

//Make an interface
interface Product {
    name : string;
    price : number;
    quantity : number;
    description : string;
}
//Make an object (Fruits and Vegetables Shop)
//For Vegetable
let vegItem:Product = {
  name: `Carrot`,
  price: 80,
  quantity: 800,
  description: `Vegetables`
}
console.log(vegItem);
//Get price from vegItem
console.log(vegItem.price);

 //For Fruit
 let fruitItem:Product = {
  name: `Apple`,
  price: 50,
  quantity: 500,
  description: `Fruits`
 }
 console.log(fruitItem);
 //Get price from fruitItem
  console.log(fruitItem.description); 