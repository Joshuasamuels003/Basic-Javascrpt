//let v = 1;
//console.log(this.v);
//var b = 1;
//console.log(b);

//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
//MODULEVPATTERN

var counter = (function() {

  //private stuff
  let count = 3;

  function print(message) {
    console.log(message + '-----' + count);
  }

    function getcount(){

      return count;

    }

    function setcount(value) {

      count = value;

    }

    function increment() {
      count += 1;
      print('after increment: ');
    }

    function reset(){
      print('before reset: ');
      count = 0;
      print('after reset: ');
    }

    //revealing object
    return {
      get:getcount(),
      set:setcount,
      increment: increment,
      reset: reset,
    }

})();

console.log(counter.get = 6);
