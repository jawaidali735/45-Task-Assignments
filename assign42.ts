// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Lord Voldemort"];

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
makeGreat(magicians);
showMagicians(magicians);
