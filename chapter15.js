let obj1 = new Object();

let obj2 = {};

let person = {
    name: "김동호",
    age: 18,
    hobby: "배드민턴",
    job: "FE Developer",
    extra: {},
    10: 20,
    "like cat": true,

}

 let name = person.name;
 console.log(name);

 let age = person["age"];
 console.log(age);

 let property = "hobby";
 let hobby = person[property];
 console.log(hobby);

 person.job = "fe developer";
 person["favoriteFood"] = "떡볶이";

 console.log(person.job);
 console.log(person.favoriteFood);
 console.log(person);

 person.job = "educator";
 person["favoriteFood"] = "초콜릿";

 console.log(person.job);
 console.log(person.favoriteFood);
 console.log(person);

 delete person.job;
 delete person["favoriteFood"];
 console.log(person);

 let result1 = "name" in person;
 let result2 = "cat" in person;
 console.log(result1);
 console.log(`result2의 값은 ${result2}입니다.`);
