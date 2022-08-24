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

  //return object
  return {

    //value: count,

    get: function(){

      return count;

    },

    set: function(value) {

      count = value;

    },

    increment: function() {
      count += 1;
      print('after increment: ');
    },

    reset: function() {
      print('before reset: ');
      count = 0;
      print('after reset: ');
    }
  }

})();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);

counter.reset();

counter.set(10);
console.log(counter.get());



counter.reset();
