let a = [2, 4, 6, 8, 10];
let b = ['david', 'frank', 'oma', 'nengi'];

console.log(a);
console.log(a[0]);
console.log(b[1]);

a[0] = 5;
console.log(a);

//an array is of datatype object which can include elements of different datatype
console.log(typeof a);
console.log(typeof b);
let diffData = [4, 'agu', true];
console.log(diffData);

//undefined array element
console.log(a[5]);

//number of elements in an array
console.log(a.length);

//creating an assigniong an array element (not save);
a[10] = 22;
console.log(a);
console.log(a.length);

a.push(22); //Add 22 to be the last array element
console.log(a);
console.log(a.length);

a.pop(); //It delete the last array element when called
a.pop();
a.pop();
console.log(a);
console.log(a.length);