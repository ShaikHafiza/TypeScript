//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum alpha{
    a,
    b,
    c,
    d
}

console.log(alpha.d);



//Numeric Enums - Initialized
//You can set the value of the first numeric enum and have it auto increment from that:

enum Directions{
    north = 1,
    east,
    south,
    west
}

console.log(Directions.north);
console.log(Directions.east);



// Numeric Enums - Fully Initialized
//You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum statusCodes{
    notFound = 404,
    success = 200,
    accepted = 202,
    badRequest = 400
}

console.log(statusCodes.notFound);