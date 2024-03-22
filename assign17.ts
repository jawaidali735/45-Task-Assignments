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