//Question-37 (Large Shirts)
//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript
function make_shirt(x, y) {
    console.log(`The shirt is ${x} and the message is ${y}`);
}
make_shirt(`Large`, `I love TypeScript`);
//Make a large shirt and a medium shirt with the default message
//make_shirt(`Large`,`I love TypeScript`);
make_shirt(`Medium`, `I love TypeScript`);
// and a shirt of any size with a different message.
make_shirt(`Small`, `TypeScript is the superset of JavaScript`);
export {};
