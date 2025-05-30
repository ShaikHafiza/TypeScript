var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
//gives error because the optional property is not defined
// const car: { type: string, model: string, year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009
// };
var car2 = {
    type: "Toyota"
};
car2.mileage = 2000;
console.log(car2);
var nameAgeMap = {};
nameAgeMap.Hafiza = 20;
nameAgeMap.Varma = 21;
console.log(nameAgeMap);
