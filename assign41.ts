// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Lord Voldemort"];

function showMagicians(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
    }  
}
showMagicians(magicians);

// // .array.forEach(element => {
        
    // });  we can also use this method to i Did with for loop
    