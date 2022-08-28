/* ========= My first Object ============= */
let a = (function(){

    function print($var){
        console.log($var);
    }

    return {
        a: "returning a",
        c: "returning c",
        b: function(){
 
            print(this.c);

        },
    }

})();

console.log(a.a);
(a.b());

/* =================== String template starts ==================== */
let name = 'bob';
console.log(`hi ${name}`);

let sentense = `lorem 
impuse 
    let 

    bit big`;

console.log(sentense);

function getcount() {
    return 1;
};

let  interpolation = `Give me ${(getcount()  == 1)? "one good reason" : "a few reason" } to try this,`;
console.log(interpolation);