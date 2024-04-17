//Think of something you could store in a array
//You could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like
console.log(`\n \t Mountains \t \n`);
//Array of mountains
let mount = [
    `Mount Everest`,
    `K2`,
    `Kangchenjunga`,
    `Lhotse`,
    `Makalu`,
];
//Print a list with the help of ForEach method
mount.forEach((items) => {
    console.log(items);
});
console.log(`\n \t Rivers \t \n`);
//Array of rivers
let rivers = [`River Nile`, `Amazon River`, `Yangtze River`];
//Print a list with the help of ForEach method
rivers.forEach((items) => {
    console.log(items);
});
console.log(`\n \t Countries \t \n`);
//Array of countries
let countries = [`Pakistan`, `Afghanistan`, `Canada`, `Russia`, `Bahamas`];
//Print a list with the help of ForEach method
countries.forEach((items) => {
    console.log(items);
});
export {};
