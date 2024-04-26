//Question-33 (Pizzas)
//Think of at least three kinds of your favorite pizza. Store these pizza names in a array
let pizza:string[] = [`BBQ Chicken Pizza`,`Pepperoni Pizza`,`Margherita Pizza`];
console.log(pizza);

//and then use a for loop to print the name of each pizza
 for (let i = 0 ; i < pizza.length; i++){
     console.log(pizza[i]);
     //Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 

     if(pizza[i] === pizza[0]){
        console.log(pizza[i]+` is one of my all-time favorite pizza.The combination of tangy barbecue sauce, tender chicken, gooey cheese, and crisp crust is simply irresistible. Every bite is a perfect balance of flavors and textures that never fails to satisfy my cravings`);
        
     }
     else if(pizza[i] === pizza[1]){
        console.log(pizza[i]+`Pepperoni pizza holds a special place in my heart as my second favorite pizza. The classic combination of savory pepperoni slices, melted cheese, and zesty tomato sauce on a crispy crust is a timeless favorite that never fails to hit the spot`)
        ;
        
     }
     else if (pizza[i] === pizza[2]){
        console.log(pizza[i]+`Margherita pizza is my favorite pizza because it is so easy to make. The combination of mozzarella cheese, fresh tomatoes, basil, and olive oil is a perfect balance of flavor and texture that is sure to satisfy your cravings`)
     }
     else{
        console.log(`I don't like PIZZA`);
        
     }

 }
 //
//Add a line at the end of your program, outside the for loop, that states how much you like pizza

 let sentence:string = `\n \t I absolutely love pizza! The combination of gooey cheese, savory tomato sauce, and endless topping options makes it the perfect comfort food. Whether it's a classic pepperoni or a gourmet margherita, I can never resist a slice of delicious pizza. The crispy crust, the melty cheese, and the burst of flavors with each bite always leave me craving more. Pizza is my go-to meal for any occasion, and I could eat it every day without ever getting tired of it. It's simply the best food in the world, in my opinion \t \n`;
 console.log(sentence);
 
