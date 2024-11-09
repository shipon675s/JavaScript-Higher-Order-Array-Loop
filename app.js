//! JavaScript Higher Order Array Loop:

// ['', '', '', 1, true] [{}, {}, {}];

const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];
for(let fruit = 0; fruit < fruits.length; fruit++){
    // console.log(fruits[fruit]);
}
for (const i of fruits) {
    // console.log(i);    
}



const myName = 'Shipon';
for (const name of myName) {
    // console.log(`Each char is ${name}`);
}



const country = new Map([
    ['Bn', 'Bangladesh'],
    ['In', 'India'],
    ['Pk', 'Pakistan'],
    ['Np', 'Nepal'],
])

country.set('Vu', 'Vutan');
country.set('Bn', 'Bangladesh');   // Same data not allow

// for (const key of country) {
//     console.log(key);
// }

for (const [key, value] of country) {
    console.log(key, value);
}