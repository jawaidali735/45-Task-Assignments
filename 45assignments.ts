// Qiestion 01: Install Node.js, TypeScript and VS Code on your computer.
// install these things on my laptop.

/*Question 02: Personal Message: Store a person’s name in a variable, and print a message to
that person. Your message should be simple, such as, “Hello Eric, would you like to learn 
some Python today?” */

let personName:string = "jawaid ali";
console.log(`Hello ${personName}, would you like to learn some python today?`);


/* Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.*/

let personName = "jawaid ali";

let upperCase = personName.toUpperCase();
console.log(upperCase);
let lowercase = personName.toLowerCase();
console.log(lowercase);

// title case
let words = personName.split(" ");
let titleCase = ""

for (let i = 0 ; i < words.length ; i++){
    titleCase +=words[i].charAt(0).toUpperCase() /*  +=words[i].charAt(0).toUpperCase()    that means the every first albhets of word is on zero and we are saying here that every zero comes with upercase.*/
    +words[i].slice(1).toLowerCase()+" "         /*+words[i].slice(1).toLowerCase()+" " here this loop means that after 0 we have 1, inshot except zero from 1 to every charcters should comes with lower case */
};

console.log(titleCase);

/*Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/


console.log ("Bruce Lee once said, \"The successful warrior is the average man, with laser-like focus.\" ");


/* Question 05: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
famous_person. Then compose your message and store it in a new variable called message. Print your message.?*/


let famousPerson = "Bruce Lee";
let message = `${famousPerson} once said, \"The successful warrior is the average man, with laser-like focus.\"`
console.log(message);

/* Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the
name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

let personName:string = "\t  jawaid ali   \n";
console.log(personName);
let personName1 = personName.trim();
console.log(personName1);


/* question 07: Number Eight: Write addition, subtraction, multiplication, and division operations that 
each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/

// addition
console.log(4 + 4);
// subtraction
console.log(10 - 2);
// multiplication
console.log(2 * 4);
// division
console.log(16 / 2);


/* Question 8: You should create four lines that look like this: ___________________
console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line. */


console.log(4 + 4)
console.log("-".repeat(60))
console.log(10 - 2)
console.log("-".repeat(60))
console.log(2 * 4)
console.log("-".repeat(60))
console.log(16 / 2)
console.log("-".repeat(60))

// as you can see here i used a function which is reapt(). this function will help use to reapt things.


/*Question 9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that 
reveals your favorite number. Print that message.*/

let favoriteNumber = 7;
let message = `${favoriteNumber} is my favorite number.`;
console.log(message);


/*Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, 
just add your name and the current date at the top of each program file. 
Then write one sentence describing what the program does.*/


// so this question is about for commneting program and i am also using this features on my evry prgoram to
// remember things that u did. and my j=name is jawaid ali and time is her 9:15 o'click.



/* Question 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
accessing each element in the list, one at a time.*/

let friendsName = ['ali', 'aamir', 'mustafa', 'anwar','arslan'];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
console.log(friendsName[4]);


/*Question 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name.*/

let friendsName = ['ali', 'aamir', 'mustafa', 'anwar','arslan'];
for(let name of friendsName){
    console.log(`Hello, ${name} i hope you are doing well`);
}


// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let myFavoritTransport =  []
myFavoritTransport.push(["Bike","Harley"]);
myFavoritTransport.push(["car","BMW"]);
myFavoritTransport.push(["cycle","SOHARAB"]);
myFavoritTransport.forEach(([transport, brand])=>
console.log(`I would like to have a ${brand} ${transport}.`)
)

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestInvitationList = ["ali", "arslan", "Mr Musk","aamir", "mustafa","sajjad"];
for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};


// Question 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guestInvitationList = ["ali", "Mr Musk","aamir",];
for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};

let notAttending:string = "Mr Musk";
let newAttending:string = "Mr Gates";
console.log(`${notAttending} not attendind the dinner party he got some work to do`);

let notAttendingGuest = guestInvitationList.indexOf(notAttending);
guestInvitationList[notAttendingGuest] = newAttending;

for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};



// Question 16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


//                       Part of 14 question.

let guestInvitationList = ["ali", "Mr Musk","aamir",];
for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};

//                Part of 15 Continue with 16 Question.
let notAttending:string = "Mr Musk";
let newAttending:string = "Mr Gates";
console.log(`${notAttending} not attendind the dinner party he got some work to do`);

let notAttendingGuest = guestInvitationList.indexOf(notAttending);
guestInvitationList[notAttendingGuest] = newAttending;

for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};
console.log("I just found a bigger dinner table, so now i am invaiting more friends");
//               Part Question 16.
let firstGuest:string = ("Hamza");
let len:number = guestInvitationList.unshift(firstGuest);
let middleGuest:string = "Hassan";
let addInMiddle:number = Math.round(len/2);
guestInvitationList.splice(addInMiddle, 0, middleGuest);
guestInvitationList.push("M. Iqbal");

for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};


// question 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Question 17


//                       Part of 14 question.

let guestInvitationList = ["ali", "Mr Musk","aamir",];
for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};

//                Part of 15 Continue with 16 Question.
let notAttending:string = "Mr Musk";
let newAttending:string = "Mr Gates";
console.log(`${notAttending} not attendind the dinner party he got some work to do`);

let notAttendingGuest = guestInvitationList.indexOf(notAttending);
guestInvitationList[notAttendingGuest] = newAttending;

for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};
console.log("I just found a bigger dinner table, so now i am invaiting more friends");
//               Part Question 16.
let firstGuest:string = ("Hamza");
let len:number = guestInvitationList.unshift(firstGuest);
let middleGuest:string = "Hassan";
let addInMiddle:number = Math.round(len/2);
guestInvitationList.splice(addInMiddle, 0, middleGuest);
guestInvitationList.push("M. Iqbal");

for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `)
};

//            Part of 17 Question
console.log("I can invite only two people for my dinner Party.");

for(let i = guestInvitationList.length-1; i>=2; i--){
    console.log(`I Soory ${guestInvitationList[i]}! that I can't invite you to dinner`);
    guestInvitationList.pop();
}

for(let guestName of guestInvitationList){
    console.log(`Dear, ${guestName} I am informing you that you are still invited to dinner`);
};

guestInvitationList.splice(0, 2);
console.log(guestInvitationList);


// Question 18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has c

// Question 18

let locations = ['Turkey', 'USA', 'Norway', 'Swiss', 'Maldeves'];
console.log(locations);
console.log([...locations].sort());
console.log(locations);
console.log([...locations].sort().reverse());
console.log(locations);
locations.reverse();
console.log(locations);
locations.reverse();
console.log(locations);
console.log([...locations].sort());
locations.reverse();
console.log(locations);


// question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Guest list
let guestInvitationList = ["Ali", "Mr. Musk", "Aamir", "Hamza", "Hassan", "M. Iqbal"];

console.log(`I am inviting ${guestInvitationList.length} people to my dinner`);


// Question 20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let myCities:string[] = ['New York', 'London','Karachi', 'Istanbul','Islamabad'];

let autoGenrativeArr = [];
for(let city of myCities){
    autoGenrativeArr.push(city);
}

// console.log(autoGenrativeArr);



// Question 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface Car {
    company: string
    model: string
    year: number
    color: string
    price: number
}
let createCar = (company: string, model: string, year: number, color: string, price: number) : Car=>{
    return{
        company,
        model,
        year,
        color,
        price,

    }
}

let car1 = createCar('BMW','i8', 2013,'blue', 40000000);
let car2 = createCar('mercedes','c class', 2022,'Black', 30680000);
console.log(car1, car2);

// Question 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let myFavoriteCars:string[] = ['BMW i8', 'Marcedes', 'Porshce', 'Honda Civic','Land Crouser'];

console.log(`My one of the favorite care is, ${myFavoriteCars[5]}`);

myFavoriteCars.push("Vego");
console.log(`My one of the favorite care is, ${myFavoriteCars[5]}`);


// Question 23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'subaru'? I predict false.");
console.log(car !='subaru');

car = "Honda";
console.log("is car == 'subaru'? I predict false.");
console.log(car == 'subaru');

console.log("is car != 'subaru'? I predict true.");
console.log(car != 'subaru');

console.log("is car == 'Honda'? I predict true.");
console.log(car == 'Honda');

car = "Hundai";
console.log("is car != 'Hundai'? I predict true.");
console.log(car != 'Hundai');

let passNumber:number = 40;
console.log("is passNumber > 35 ? I predict true.");
console.log(passNumber > 35);

console.log("is passNumber < 35 ? I predict false.");
console.log(passNumber < 35);

console.log("is passNumber <= 39 ? I predict false.");
console.log(passNumber <= 39);

console.log("is passNumber <= 40 ? I predict true.");
console.log(passNumber <= 40);




// Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

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


// question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


let alienColor:string = "Green"; 
let alienColor1:string = "Red";
let alienColor2:string = "Yellow"
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if(alienColor === "Green"){
    console.log(`Congratulations you have just earned 5 points.`);
}

//   last one passed so now we consider it Version 2

if (alienColor ==="Red"){
    console.log(`Congratulations you have just earned 5 points.`);
}


// Question 26

let alienColor:string = "Green";
let alienColor1:string = "Red";
let alienColor2:string = "Yellow";

//     version 1
if(alienColor === "Green"){
    console.log('Congratulations You have just earned 5 point shooting the alien.');
}
else{
    console.log('Congratulations You have just earned 10 point shooting the alien.');
}
//   Version 2
if(alienColor === "Yellow"){
    console.log('Congratulations You have just earned 5 point shooting the alien.');
}
else{
    console.log('Congratulations You have just earned 10 point shooting the alien.');
}


// Question 27

let alienColor:string = "Green";
let alienColor1:string = "Red";
let alienColor2:string = "Yellow";

//     version 1
if(alienColor === "Green"){
    console.log('Congratulations You have just earned 5 points shooting the alien.');
}
else if(alienColor === "Yellow"){
    console.log('Congratulations You have just earned 10 points shooting the alien.');
}
else if(alienColor === "Red"){
    console.log('Congratulations You have just earned 15 points shooting the alien.');
}

//   Version 2
if(alienColor2 === "Green"){
    console.log('Congratulations You have just earned 5 points shooting the alien.');
}
else if(alienColor2 === "Yellow"){
    console.log('Congratulations You have just earned 10 points shooting the alien.');
}
else if(alienColor2 === "Red"){
    console.log('Congratulations You have just earned 15 points shooting the alien.');
}

// version 3
if(alienColor1 === "Green"){
    console.log('Congratulations You have just earned 5 points shooting the alien.');
}
else if(alienColor1 === "Yellow"){
    console.log('Congratulations You have just earned 10 points shooting the alien.');
}
else if(alienColor1 === "Red"){
    console.log('Congratulations You have just earned 15 points shooting the alien.');
}



// Question 28:

let age:number = 23;

if(age < 2){
    console.log("You are a baby");
}
else if(age >= 2 && age <= 4){
    console.log("You are a toddler");
}
else if(age >= 4 && age < 13){
    console.log("You are a kid");
}
else if(age >= 13 && age < 20){
    console.log("You are a tenager");
}
else if (age >= 20 && age < 65){
    console.log("You are an adult");
}
else{
    console.log ("You are older person")
}


// Question 29

let favoriteFruit:string[] = ['Apple','Banana',"Orange"];

if(favoriteFruit.includes("Apple")){
console.log("You really like apples.");
}

if(favoriteFruit.includes("Grapes")){
    console.log("You really like Grapes.");
    }

    if(favoriteFruit.includes("Orange")){
        console.log("You really like orange.");
        }

    if(favoriteFruit.includes("Watermalen")){
        console.log("You really like Watermalen.");
        }

        if(favoriteFruit.includes("Banana")){
            console.log("You really like bananas.");
            }

            

// Question 30

let userName:string[] = ['arslan','imran','Admin','ali'];

for(let name of userName){
    if(name === "Admin"){
        console.log('Hello admin, would you like to see a status report?');
    }
    else{
        console.log(`Hello, ${name} thank you for logging in again.`)
    }
}           



// Question 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames:string[] = ['arslan','imran','Admin','ali'];

if (userNames.length === 0) {
    console.log("We need to find some users!");
} else {
    
    for (let username of userNames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

userNames = [];

if(userNames.length === 0){
    console.log("We need to find some users!");
}



// Question 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let userNames:string []= ['arslan','imran','jhon','ali','jawaid'];
let newUserNames:string[]= ['talha','Jhon','rameez','areab','mustafa'];

newUserNames.forEach(newUsers => {
    let lowerCase:string = newUsers.toLowerCase();
    if(userNames.map(nUser => nUser.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsers} is not availble. Please inter new one.`)
    }
    else{
        console.log(`The username ${newUsers} is availble.`)
    }
}
    )



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


// 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let Pizzas:string[] = ['Creamy','pepperoni', 'BBQ Mix'];

for(let pizza of Pizzas){
console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");



// Question 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals:string[] =['dog','cat','rabbit'];
for(let animal of animals){
     console.log(animal);
 };

for(let animal of animals){
    console.log(`A ${animal} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");



// Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makeShirt(
    size:string,
    message:string
    ){
        console.log(`making a ${size} shirt with the message: ${message}`)
    }

    makeShirt('Small', 'This will fit your body');
    makeShirt('medium', 'This size will fit your boidy');
    makeShirt('large', 'large shirts will fit only on fate bodies');

//Question 37:  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size:string = "large", Text:string = "I love TypeScript."){
    console.log(`making a ${size} shirt with the message: ${Text}`);
}
makeShirt();
makeShirt("Medium");
makeShirt('small','I Love JavaScript.');


// Question 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


function describeCity(city:string, country:string = 'Default country.'){
    console.log(`${city} is in ${country}`);
}
describeCity('Karchi','Pakistan');
describeCity('Istanbul','Turkey');
describeCity('Tokyo','Japan');
describeCity('New York', 'USA');
describeCity('London','UK');



// Question 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function cityCountry(city:string, country:string){
    return(`${city}, ${country}`);
    
}

console.log(cityCountry('Lahore','Pakistan'));
console.log(cityCountry('Tokyo','Japan'));
console.log(cityCountry('Karchi','Pakistan'));



// Question 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function makeAlbum( artist:string, title:string, tracks?:number){
    let album: {artist:string, title:string, tracks?:number} = {
        artist : artist,
        title : title

    }
    if(tracks!== undefined){
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum('artist 1', 'album title 1');
console.log(album1);

let album2 = makeAlbum('artist 2', 'album title 2');
console.log(album2);

let album3 = makeAlbum('artist ', 'album title 3', 15);
console.log(album3);



// Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Lord Voldemort"];

function showMagicians(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
    }  
}
showMagicians(magicians);

// // .array.forEach(element => {
        
    // });  we can also use this method to i Did with for loop
    



//Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

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





//Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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




// Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich (item: string[]){
    console.log('making my sandwich with:');

    item.forEach(element => console.log("- " + element));

    console.log('enjoying My sandwich !');
}

makeSandwich(['Ham', 'Creamy', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut', 'jelly']);


// Question 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer: string, modelName:string, ...extraOption: {[key : string]: any}[])
: object {
    const cInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)

    }
    return cInfo
};

let result = carInfo('BMW', 'i8', {color:'blue'}, {feature:['foldable doors', 'navigation','automatic power window']});

console.log(result);