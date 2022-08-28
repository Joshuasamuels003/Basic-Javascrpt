let a, b, c, d, e;

let name = ['david', 'eddie', 'alex', 'michael', 'smmy'];

[a, b, c, d, e] = name;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/* ============================================== */

let others;

[a, b, ...others] = name;

console.log(a);
console.log(b);
console.log(others);

/* =============================================== */

let year, model;

let car

({year, model}= {

    make:"bmw",
    model:12345,
    year:2010,
    value:5000,
});

console.log(year);
console.log(model);

/* creating an object with a distructuring object */
let Construct, View,execute;

let obb = {

    Db: "database connected",
    App:({Construct, View} = {
        Construct: "construct created",
        View: "View created",
        Model: {
            db: "still connected",
            execute: this.db + "Model executed",
        }
    })

}

console.log(obb.Db);
console.log(Construct);
console.log(View);
console.log(obb.App.Model.execute);