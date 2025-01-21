//console.log(Boolean(0));
//console.log(Boolean(""));
//console.log(Boolean('Hello'));
//console.log(Boolean(42));
//console.log(Boolean(null));

//let age = 15;

//if (age >= 18) {
//    console.log('You are eligible to vote');
//} else {
 //   console.log('You are not eligible to vote');
//}

const username = 'admin';
const password = 'password123';

if (username === 'admin') {
    if (password === 'password123') {
        console.log('Access Granted');
    } else {
        console.log('Incorrect password');
    }
} else {
    console.log('Unknown user');
}
