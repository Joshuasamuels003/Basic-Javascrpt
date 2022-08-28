//scope
let a = "my scope";

function scopetest() {

    b = 4;
    console.log(a);
}

scopetest();
console.log(b);

