let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;
if(!f4) {
    console.log("falsy");
}

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};
if(t1) {
    console.log("truthy");

}

function printName(person) {
    if (!person) {
            console.log("person의 값이 없음");
            return;
        }
        console.log(person.name);
}

//let person;
let person = { name: "김동호" };
printName(person);