// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "large", Text = "I love TypeScript.") {
    console.log(`making a ${size} shirt with the message: ${Text}`);
}
makeShirt();
makeShirt("Medium");
makeShirt('small', 'I Love JavaScript.');
export {};
