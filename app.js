//! JavaScript Higher Order Array Loop:

// ['', '', '', 1, true] [{}, {}, {}];

const myName = "Shipon";
for (const name of myName) {
    // console.log(`Each char is ${name}`);
}

const country = new Map([
    ["Bn", "Bangladesh"],
    ["In", "India"],
    ["Pk", "Pakistan"],
    ["Np", "Nepal"],
]);

country.set("Vu", "Vutan");
country.set("Bn", "Bangladesh"); // Same data not allow

// for (const key of country) {
//     console.log(key);
// }

for (const [key, value] of country) {
    // console.log(key, ':' ,value);
}

const myCountry = {
    Bn: "Bangladesh",
    In: "India",
    Pk: "Pakistan",
    Np: "Nepal",
};
// for (const key of myCountry) {
//     // console.log(key, myCountry);     // object is not iterable
// }

// for (const key in myCountry) {
//     console.log(key, ':' ,myCountry[key]);
// }

for (const key of Object.keys(myCountry)) {
    // console.log(key, ':', myCountry[key]);     // This rules follow object is iterable
}

const fruits = ["Mango", "Banana", "Orange", "Graps"];
for (let fruit = 0; fruit < fruits.length; fruit++) {
    // console.log(fruits[fruit]);
}
for (const i of fruits) {
    // console.log(i);
}
for (const key in fruits) {
    // console.log(key, fruits[key]);
    // console.log(fruits[key]);
}

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// })

// function myfruit(fruit){
//     console.log(fruit);
// }
// fruits.forEach(myfruit);

fruits.forEach((fruit, index, arr) => {
    // console.log(fruit, index, arr);
});

const stack = [
    {
        name: "MERN STSCK",
        property: "Mongo, Express, React, Node",
    },
    {
        name: "Laravel",
        property: "JavaScript, vue, PHP, Laravel, MySQL",
    },
    {
        name: "WordPress",
        property: "JavaScript, PHP, WordPress, MySQL",
    },
];
stack.forEach((info) => {
    console.log(`Want to learn ${info.name}? Learn this ${info.property}`);
});
