function one() {
    return "one";
}

console.log(one());

let point = one();
console.log(point);

function check(){

    function first(){
        return "im first";

        function firsttwo(){
            return "im second";
        }
    }

    function second(){

        return "im second";
    }

    return "im check";
}

console.log(check())