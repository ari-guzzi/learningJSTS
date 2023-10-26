//import { Invoice } from './classes/Invoice.js';
/************************************************************************
                              Chapter 2
*************************************************************************/
// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
/************************************************************************
                              Chapter 3
*************************************************************************/
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// // character = 20;
// character = 'luigi';
// // age = 'yoshi';
// age = 40;
// // isBlackBelt = 'yes';
// isBlackBelt = true;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// // console.log(area('hello'));
// console.log(circ(7.5));
/************************************************************************
                              Chapter 4
*************************************************************************/
// // arrays
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');
// // names.push(3);
// // names[1] = 3;
// let numbers = [10, 20, 12, 15];
// numbers.push(25);
// // numbers.push('shaun');
// // numbers[0] = 'shaun';
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;
// // objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   // skills: ['running'],
// };
/************************************************************************
                              Chapter 5
*************************************************************************/
// // arrays
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');
// // names.push(3);
// // names[1] = 3;
// let numbers = [10, 20, 12, 15];
// numbers.push(25);
// // numbers.push('shaun');
// // numbers[0] = 'shaun';
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;
// // objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking']
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   // skills: ['running'],
// };
/************************************************************************
                              Chapter 6
*************************************************************************/
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigi' };
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);
// let ninja: { name: any, age: any };
// ninja = { name: 'yoshi', age: 25 };
// console.log(ninja);
// ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);
/************************************************************************
                              Chapter 7
*************************************************************************/
// tsc -- init
// tsc
// tsc -w
// will create src file
/************************************************************************
                              Chapter 8
*************************************************************************/
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
// const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
//   console.log(a + b);
//   console.log(c);
// }
// add(5, 10, 'ninja');
// const minus = (a: number, b: number): number => {
//   return a + b;
// }
// let result = minus(10,7);
// console.log(result);
/************************************************************************
                              Chapter 9
*************************************************************************/
// type StringOrNum = string | number;
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }
//   const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
//   }
//   const greetAgain = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
//   }
/************************************************************************
                              Chapter 10
*************************************************************************/
// // let greet: Function;
// // example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// }
// // example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }
// // example 3
// let logDetails: (obj: {name: string, age: number}) => void;
// logDetails = (ninja: {name: string, age: number}) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }
/************************************************************************
                              Chapter 11
*************************************************************************/
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// //const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
/************************************************************************
                              Chapter 12
*************************************************************************/
// // classes
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;
//   constructor(c: string, d: string, a: number){
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`;
//   }
// }
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo);
// // invoices.push({ name: 'shaun' });
// console.log(invoices);
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
/************************************************************************
                              Chapter 13
*************************************************************************/
// // classes
// class Invoice {
//   // readonly client: string;
//   // private details: string;
//   // public amount: number;
//   constructor(
//     readonly client: string, 
//     private details: string, 
//     public amount: number,
//   ){}
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`;
//   }
// }
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
// })
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
/************************************************************************
                              Chapter 14
*************************************************************************/
// import { Invoice } from './classes/Invoice.js';
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// // invOne.client = 'yoshi';
// // invOne.amount = 50;
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
// })
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
/************************************************************************
                              Chapter 15
*************************************************************************/
// import { Invoice } from './classes/Invoice.js';
// // interfaces
// export interface IsPerson {
//   name: string;
//   age?: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'shaun',
//   //age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('I spent ', amount);
//     return amount;
//   },
// };
// console.log(me);
// me.speak('hello, world');
// const greetPerson = (person: IsPerson): void => {
//   console.log('hello ', person.name);
// }
// greetPerson(me);
// //greetPerson({name: 'shaun'});
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
/************************************************************************
                              Chapter 16
*************************************************************************/
// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';
// // let docOne: HasFormatter;
// // let docTwo: HasFormatter;
// // docOne = new Invoice('yoshi', 'web work', 250);
// // docTwo = new Payment('mario', 'plumbing', 200);
// // let docs: HasFormatter[] = [];
// // docs.push(docOne);
// // docs.push(docTwo);
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }
//   console.log(doc);
// });
/************************************************************************
                              Chapter 17
*************************************************************************/
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
/************************************************************************
                              Chapter 18
*************************************************************************/
// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { ListTemplate } from './classes/ListTemplate.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// // list template instance
// const ul = document.querySelector('ul')!;
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }
//   list.render(doc, type.value, 'end');
// });
// // GENERICS
// // const addUID = (obj: object) => {
// //   let uid = Math.floor(Math.random() * 100);
// //   return {...obj, uid};
// // }
// // const addUID = <T extends object>(obj: T) => {
// //   let uid = Math.floor(Math.random() * 100);
// //   return {...obj, uid};
// // }
// const addUID = <T extends {name: string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let docOne = addUID({name: 'yoshi', age: 40});
// //let docTwo = addUID('shaun');
// console.log(docOne.name);
// // with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1, 
//   resourceName: 'person', 
//   data: { name: 'shaun' }
// };
// const docFour: Resource<string[]> = {
//   uid: 1, 
//   resourceName: 'shoppingList', 
//   data: ['bread', 'milk']
// };
// console.log(docThree, docFour);
/************************************************************************
                              Chapter 19
*************************************************************************/
// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { ListTemplate } from './classes/ListTemplate.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// // list template instance
// const ul = document.querySelector('ul')!;
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }
//   list.render(doc, type.value, 'end');
// });
// // ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }
// console.log(docOne);
// console.log(docTwo);
/************************************************************************
                              Chapter 20
*************************************************************************/
// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { ListTemplate } from './classes/ListTemplate.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// // list template instance
// const ul = document.querySelector('ul')!;
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   let values: [string, string, number];
//   values = [tofrom.value, details.value, amount.valueAsNumber];
//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(...values);
//   } else {
//     doc = new Payment(...values);
//   }
//   list.render(doc, type.value, 'end');
// });
// // TUPLES
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];
// let tup: [string, number, boolean] = ['ryu', 25, true];
// // tup[0] = false;
// tup[0] = 'ken';
// let student: [string, number];
// //student = [23564, 'chun-li'];
// student = ['chun-li', 23564];
