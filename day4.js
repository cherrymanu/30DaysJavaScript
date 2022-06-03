
const age = 13;
if (age >= 18) {
    console.log('you can drive')
}
else {
   console.log("you can't drive"); 
}

let a = 3;
let b = 5;
if (a > b) {
    console.log('a is greater than b');
}
else {
    console.log('b is greater than a');
}

console.log(a > b ? "a is greater than b" : "b is greater than a");

let day = 'sunday';
switch (day) {
    case 'monday':
        console.log('weekday')
        break
    case 'sunday':
        console.log('weekend')
        break
    default:
        console.log('give correct day')
        break
        
}

//day5
let firstArray = [2,5,4,2];
console.log(firstArray.length);
console.log(firstArray);
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0] + ' ' + itCompanies[(parseInt(itCompanies.length / 2))] + ' ' + itCompanies[itCompanies.length - 1]);
for (let i = 0; i < itCompanies.length; i++){
    //itCompanies[i].toUpperCase()
    console.log(itCompanies[i].toUpperCase());
}