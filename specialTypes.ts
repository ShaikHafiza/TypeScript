//type : any       
let v : any = true;
v = "string";
Math.round(v);
console.log(v);


//type : unknown
function handle(input : unknown){
    if(typeof input === 'number'){
        console.log(input.toFixed(2));
    }else  if(typeof input === 'string'){
        console.log(input.trim());
    }else{
        console.log("Unsupported type");
    }
}

handle(32.52552);
handle("       hello typescript       ");


// type : never - Gives error
// let x : never = 23;
// console.log(x);

