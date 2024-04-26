//Question-38 (Cities)
//Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(name, country) {
    console.log(`${name} is in ${country}`);
}
describe_city(`Karachi`, `Pakistan`);
//Call your function for three different cities, at least one of which is not in the default country
describe_city(`Islamabad`, `Pakistan`);
describe_city(`Hyderabad`, `India`);
describe_city(`Mumbai`, `India`);
export {};
