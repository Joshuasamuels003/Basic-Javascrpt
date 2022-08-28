function sayHello(name) {

    return function () { 
        console.log('Howdy' + name);
    }
}

let Bob = sayHello('Bob');
Bob();
Bob = "now";
console.log(Bob);
