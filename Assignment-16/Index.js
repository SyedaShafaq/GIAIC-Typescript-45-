//Question-18 (Seeing the World)
//Store the locations in a array.Make sure the array is not in alphabetical order.
let favPlaces = [`Rome`, `Barcelona`, `London`, `Bali`, `Cairo`];
//Print your array in its original order
console.log(favPlaces);
//Print your array in alphabetical order without modifying the actual list
let myFavPlaces = favPlaces.toSorted();
console.log(myFavPlaces);
// Show that your array is still in its original order by printing it
console.log(favPlaces);
//Print your array in reverse alphabetical order without changing the order of the original list
myFavPlaces = myFavPlaces.toReversed();
console.log(myFavPlaces);
//Show that your array is still in its original order by printing it again.
console.log(favPlaces);
// Reverse the order of your list.Print the array to show that its order has changed
myFavPlaces = favPlaces.toReversed();
console.log(myFavPlaces);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
myFavPlaces = myFavPlaces.toReversed();
console.log(myFavPlaces);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
myFavPlaces = myFavPlaces.sort();
console.log(myFavPlaces);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
myFavPlaces = myFavPlaces.reverse();
console.log(myFavPlaces);
export {};
//
