//Question-45 (Cars)
//Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name
// It should then accept an arbitrary number of keyword arguments.
function car(manufacturer, model_name, ...optional) {
    let cars_details = {
        manufacturer: manufacturer,
        model_name: model_name,
        ...Object.fromEntries(optional)
    };
    return cars_details;
}
//call the function  with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
;
let car_info = car(`Tesla`, `Model S`, [`color`, `Midnight Silver Metallic`], [`OP_Feature`, `Autopilot`]);
car_info = car(`BMW`, `X3`, [`color`, ` Alpine White`], [`OP_Feature`, ` Panoramic Sunroof`]);
console.log(car_info);
export {};
