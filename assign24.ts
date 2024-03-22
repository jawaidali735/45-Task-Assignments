
// Question 24

let fruit:string = "Apple";
let fruit1:string = "Orange";
console.log(fruit === fruit);
console.log(fruit === fruit1);


let str:string = "Jawaid";
let str1:string = "JAWAID";

console.log(str.toLowerCase() == str1.toLowerCase());
console.log(str.toLowerCase() == str1);

let a:number = 20;
let b:number = 15;

console.log(a > b);
console.log(a < b);

let passNumber:number = 20;
let passNumber1:number = 21;
let passNumber2:number = 22;

console.log(passNumber < passNumber1 && passNumber2 > passNumber);
console.log(passNumber > passNumber1 && passNumber2 < passNumber);

console.log(passNumber < passNumber1 || passNumber2 > passNumber);
console.log( passNumber > passNumber1 || passNumber2 < passNumber); 

let arr:string[] = ['car','bike','cycle','bus','veen'];

let searchItem:string = "bike";


if(arr.includes(searchItem)){
    console.log(`${searchItem} is in a array`);
}
let searchItem1 :string = "Air Plane";
if(!arr.includes(searchItem1)){
    console.log(`${searchItem1} is not in a array`);
}






