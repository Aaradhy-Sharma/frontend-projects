const flying = { wings: 2};
const car = { wheels: 4};
const flyingCar = {...flying,...car};
console.log(flyingCar);