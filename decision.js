let count = 3;

if(count == 4) {

    console.log('count is 4');

}else if(count == 3){

    console.log('count is 3');

} else{
 
    console.log('count is 3');
}

//switch statement
let hero = "superman";

switch (hero.toLowerCase) {
    case 'superman':
        console.log("hes a fool without power");
        console.log("he has laser eye");
        break;

    case 'batman':
        console.log("he is smart");
        console.log("he is fast");
        break;

    case 'wonderwoman':
        console.log("abit smart");
        console.log("strong");
        break;

    default:
        console.log("we couldnt find him");

}

//ternary operator
let a = 1, b = "1";
let result = (a === b) ? "equal" : "unequal";
console.log(result);
console.log(result = (a === b) ? "equal" : "unequal");

