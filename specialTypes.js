//type : any       
var v = true;
v = "string";
Math.round(v);
console.log(v);
//type : unknown
function handle(input) {
    if (typeof input === 'number') {
        console.log(input.toFixed(2));
    }
    else if (typeof input === 'string') {
        console.log(input.trim());
    }
    else {
        console.log("Unsupported type");
    }
}
handle(32.52552);
handle("       hello typescript       ");
// type : never
var x = true;
console.log(x);
