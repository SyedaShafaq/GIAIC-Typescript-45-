//Question-39 (City Names)
//Write a function called city_country() that takes in the name of a city and its country

import { log } from "console";

function city_country(city:string , country:string){
    return city + ','+ country;
    
    
}
//Call your function with at least three city-country pairs, and print the value that’s returned.
    console.log(city_country(`"Tokyo` , `Japan"`));
    console.log(city_country(`"Paris` , `France"`));
    console.log(city_country(`"New York` , `United States"`));
    console.log(city_country(`"Sydney`, `Australia"`));
    
    
    
    

