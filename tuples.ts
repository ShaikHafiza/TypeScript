// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly tuple may contain different types of values
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);

// define our tuple
// let ourTuple: [number, boolean, string];

// // initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];

// console.log(ourTuple);



// define our tuple
let ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
console.log(ourTuple);


// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');


type Point = [x: number, y: number];

function logPoint(p: Point) {
  const [x, y] = p;
  console.log(`X: ${x}, Y: ${y}`);
}

const myPoint: Point = [10, 20];
logPoint(myPoint); // Output: X: 10, Y: 20
