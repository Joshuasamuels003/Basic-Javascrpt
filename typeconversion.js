let a = 7;
let b = "10";
let z = a + b;
console.log(z); //coercion(forcing it to be with an unlike data type)

//Type conversion
let d = 7;
let g = "7";
g = parseInt(g, 10);
let h = d + g;
console.log(h);

let f = parseInt("ggg", 11);
let answer = isNaN(f);
console.log(answer);