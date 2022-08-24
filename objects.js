let car = {
    make: "bmw",
    model: "1234",
    year: "2010",

    getprice: function(){
        //perform yourcalculation;
        return 5000;
    },

    printdescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printdescription;
console.log(car.year);
console.log(car.getprice);

let bar = {};
bar.bottle = "1.3cl";
console.log(bar.bottle);

var health = {
    excersise: {time : 3,},
}

console.log(health.excersise.time);

let holder = {
    get: [{a:"me"},
          {b : "her"},
          {c : "nine"},    
],
}

console.log(holder.get[2]);