// Question 16
//                       Part of 14 question.
let guestInvitationList = ["ali", "Mr Musk", "aamir",];
for (let guestName of guestInvitationList) {
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `);
}
;
//                Part of 15 Continue with 16 Question.
let notAttending = "Mr Musk";
let newAttending = "Mr Gates";
console.log(`${notAttending} not attendind the dinner party he got some work to do`);
let notAttendingGuest = guestInvitationList.indexOf(notAttending);
guestInvitationList[notAttendingGuest] = newAttending;
for (let guestName of guestInvitationList) {
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `);
}
;
console.log("I just found a bigger dinner table, so now i am invaiting more friends");
//               Part Question 16.
let firstGuest = ("Hamza");
let len = guestInvitationList.unshift(firstGuest);
let middleGuest = "Hassan";
let addInMiddle = Math.round(len / 2);
guestInvitationList.splice(addInMiddle, 0, middleGuest);
guestInvitationList.push("M. Iqbal");
for (let guestName of guestInvitationList) {
    console.log(`Dear, ${guestName} I am invitting you to my dinner party hope you will join us `);
}
;
export {};
