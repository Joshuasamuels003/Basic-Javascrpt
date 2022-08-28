let pattern  = /xyz/;

console.log(pattern);
console.log(typeof pattern);

let value = "This is xyz a test.";

//returns true of string is found in another
console.log(pattern.test(value));

//replace a string in another string
console.log(value.replace(pattern, 'just'));
