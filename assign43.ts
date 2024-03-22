// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Lord Voldemort"];

function copyArr(arr:string[]){
    return[...arr]
}


function makeGreat(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
       magicians[i] = 'The Great ' + magicians[i]
    }  
}


function showMagicians(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
    }  
}

let copyMagacianArr = copyArr(magicians);

makeGreat(copyMagacianArr);

console.log('This is my orignal array:')
showMagicians(magicians);

console.log('This is my modified copy of the array:')
showMagicians(copyMagacianArr);