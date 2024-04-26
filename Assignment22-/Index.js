//Question-24 (More Conditional Tests)
//Tests for equality and inequality with strings
let age = 18;
//True
console.log(`My age is` + ' ' + `${age}`);
console.log(age == 18);
//False
console.log(`My age is not` + ' ' + `${age}`);
console.log(age != 18);
//Tests using the lower case function
let sentence = `You Have To Believe In Yourself When No One Else Does`;
console.log(sentence);
let sentence2 = sentence.toLowerCase();
console.log(`Yes my string convert into Lower case function` + ' ' + `"${sentence2}"`);
//Equal value & Equal type (string)
console.log(sentence2 === sentence2);
//Not Equal value but Equal type (string)
console.log(sentence2 === sentence);
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 14;
let num2 = 4;
console.log(num1, num2);
//Equality & InEquality
console.log(num1 == num2);
console.log(num1 != num2);
//Greater than & less than
console.log(num1 > num2);
console.log(num1 < num2);
//Greater than or equal to & less than or equal to
console.log(num1 >= num2);
console.log(num1 <= num2);
//Tests using "and" and "or" operators
let X = 41;
let Y = 24;
console.log(X, Y);
//Both conditions is not true that's why Else statement print here
//&& operator wants both statement should be "True"
if (X >= Y && X <= Y) {
    console.log(`true`);
}
else {
    console.log(`false`);
}
//Test && operator but this time both conditions is "True"
let a = 54;
let b = 50;
console.log(a, b);
if (a > b && a !== b) {
    console.log(`true`);
}
else {
    console.log(`false`);
}
//"Or" "||" Operator
//In || Operator we need just one condition true to print "True"
if (a <= b || a === b) {
    console.log(`true`);
}
else {
    console.log(`false`);
}
// Test whether an item is in a array
let color = [`Red`, `Blue`, `Green`, `yellow`, `white`];
console.log(color);
let array = color.includes(`Red`);
console.log(array);
//Test whether an item is not in a array
array = color.includes(`Silver`);
console.log(array);
export {};
