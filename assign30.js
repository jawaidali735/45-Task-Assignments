// Question 30
let userName = ['arslan', 'imran', 'Admin', 'ali'];
for (let name of userName) {
    if (name === "Admin") {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello, ${name} thank you for logging in again.`);
    }
}
export {};
