// question 33

let numbers:number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let number of numbers){
    let ordinalNumbers:string;

if (number === 1){
    ordinalNumbers = "st";
}
else if(number === 2){
    ordinalNumbers = "nd";
}
else if(number === 3){
    ordinalNumbers = "rd";
}
else{
    ordinalNumbers = "th";
}
console.log(`${number}${ordinalNumbers}`)
}
