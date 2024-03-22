// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makeShirt(
    size:string,
    message:string
    ){
        console.log(`making a ${size} shirt with the message: ${message}`)
    }

    makeShirt('Small', 'This will fit your body');
    makeShirt('medium', 'This size will fit your boidy');
    makeShirt('large', 'large shirts will fit only on fate bodies');

