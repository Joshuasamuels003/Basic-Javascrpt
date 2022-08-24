function what() {
    let a;
    a = 5;
    console.log(a);
}

what();

//assigning a variable to a function
let a = what;
a();


function myName(name){
 console.log("Hello "+ name);
}

let name = "Ebuka";
myName(name);

name = "Bob";
myName(name);

//FUNCTION EXPRESSION
setTimeout(function () {
    console.log("i waited two minutes");
}, 2000);

/*let counter = 0;
function count(){

    setTimeout(function(){
        console.log(counter++);
        count();
    }, 2000)

} 
count(); //ctrl c to exit*/

//Invoke a function immediately(IIFE: Immediately invoked function expression)
(function () {
    console.log("im an IIFE");
})();