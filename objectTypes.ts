const car : {type : string, model : string , year : number} = {
    type : "Toyota",
    model : "Corolla",
    year : 2009
};

console.log(car);

//gives error because the optional property is not defined
// const car: { type: string, model: string, year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009
// };

const car2: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car2.mileage = 2000;
console.log(car2);


const nameAgeMap : {[index : string] : number} = {};
nameAgeMap.Hafiza = 20;
nameAgeMap.Varma = 21;

console.log(nameAgeMap);