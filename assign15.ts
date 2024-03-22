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