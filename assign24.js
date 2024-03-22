// Question 24
let fruit = "Apple";
let fruit1 = "Orange";
console.log(fruit === fruit);
console.log(fruit === fruit1);
let str = "Jawaid";
let str1 = "JAWAID";
console.log(str.toLowerCase() == str1.toLowerCase());
console.log(str.toLowerCase() == str1);
let a = 20;
let b = 15;
console.log(a > b);
console.log(a < b);
let passNumber = 20;
let passNumber1 = 21;
let passNumber2 = 22;
console.log(passNumber < passNumber1 && passNumber2 > passNumber);
console.log(passNumber > passNumber1 && passNumber2 < passNumber);
console.log(passNumber < passNumber1 || passNumber2 > passNumber);
console.log(passNumber > passNumber1 || passNumber2 < passNumber);
let arr = ['car', 'bike', 'cycle', 'bus', 'veen'];
let searchItem = "bike";
if (arr.includes(searchItem)) {
    console.log(`${searchItem} is in a array`);
}
let searchItem1 = "Air Plane";
if (!arr.includes(searchItem1)) {
    console.log(`${searchItem1} is not in a array`);
}
export {};
