 var car = {
    make: "bmw",
    model: "10101",
    year: 2010,

    getPrice: function () {
        //perform some calculation
        return 5000;
    },

    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
} 

console.log(car.printDescription());

function first() {

    return this;
}

console.log(first() === global);

/*  */

function second() {
    "use strict";

    return this;
}

console.log(second() === global);

/*  */

let myobject = {value: 'my object'};

//value is set on the global object
global.value = "Global object";

function third() {

    return this.value;
}

console.log(third());

//the call and apply keywords tells the node runtime to call or apply a name insteas of the function that should be called
console.log(third.call(myobject, 'bob'));
console.log(third.apply(myobject, ['meek']));
console.log(third.apply(myobject));


/*  */
function fifth() {
    console.log(this.firstname + " " + this.lastname); 
}

let customer1 = {
    firstname: "Rob",
    lastname: "rick",
    print: fifth

}

let customer2 = {
    firstname: "nick",
    lastname: "robben",
    print: fifth

}

customer1.print();
customer2.print();
