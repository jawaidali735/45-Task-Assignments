/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.*/
let personName = "jawaid ali";
let upperCase = personName.toUpperCase();
console.log(upperCase);
let lowercase = personName.toLowerCase();
console.log(lowercase);
let words = personName.split(" ");
let titleCase = "";
for (let i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() /*  +=words[i].charAt(0).toUpperCase()    that means the every first albhets of word is on zero and we are saying here that every zero comes with upercase.*/
        + words[i].slice(1).toLowerCase() + " "; /*+words[i].slice(1).toLowerCase()+" " here this loop means that after 0 we have 1, inshot except zero from 1 to every charcters should comes with lower case */
}
;
console.log(titleCase);
export {};
