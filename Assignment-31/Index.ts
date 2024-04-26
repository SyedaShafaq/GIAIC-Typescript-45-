//Question-33 (Ordinal Numbers)
// Ordinal numbers indicate their position in a array
// Store the numbers 1 through 9 in a array
let ordinal_numbers:number[] = [1,2,3,4,5,6,7,8,9];
console.log(ordinal_numbers);

// Loop through the array
//Use an if-else chain inside the loop to print the proper ordinal ending for each number

for (let i = 0; i < ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] ===1){
        console.log(ordinal_numbers[i]+`st`);
        
    }
    else if(ordinal_numbers[i] === 2){
        console.log(ordinal_numbers[i]+`nd`);
        
    }
   else if(ordinal_numbers[i] === 3){
        console.log(ordinal_numbers[i]+`rd`);
    }
    else{
        console.log(ordinal_numbers[i]+`th`);
        
    }

     }


     
