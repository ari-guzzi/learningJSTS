alert('hello, world');
console.log(1);
console.log(2);

let age = 25;
let year = 2019;
console.log(age,year);
age=30; //can change value of "let"
console.log(age);

const points = 100;
//points = 50; --> DOES NOT WORK --> cannot override constants

var score = 75;
console.log(score);

/* multi line comement :) 
    command + forward / = comments out all selected code
*/

//strings
let email = 'email@email.com';
console.log(score);

//string concatination
let firstname = 'ari'
let lastname = 'guzzi'

let fullname = firstname + ' ' + lastname;
console.log(fullname);

//getting characters
console.log(fullname[0]);

//string length
console.log(fullname.length);

//string methods

fullname.slice(0,5); //first arg = from, second arg = to
let result = fullname.substr(0,5);

//MATH 
// Order of operations = B I D M A S
// bracket, indicies, division, mult, add, sub
let title = 'book';
let author = 'person';
let likes = 5;
//html template
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>this blog has ${likes}</span>
    `;
    console.log(html);