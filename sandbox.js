// for loops

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

//The Document Object Model

// const para = document.querySelector("body>h1");
// console.log(para)

// const paras = document.querySelectorAll("p");

// paras.forEach(para => {
// console.log(para)
// });
// const errors = document.querySelectorAll(".error");
// console.log(paras[2]);

//get an element from its ID
// const title = document.getElementById("page-title");
// console.log(title);

// //get elements by class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);

//get elements based on tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras[1]);

// const para = document.querySelector("p");
// console.log(para.innerText);
// para.innerText = "ninjas are awesome"; //+= to concatinate
// console.log(para.innerText);

// const paras = document.querySelectorAll("p");
// paras.forEach(para =>
//   {
//     console.log(para.innerText);
//     para.innerText += " new text"
//   }
//   );

  // const content = document.querySelector(".content");
  // console.log(content.innerHTML);
  // content.innerHTML += '<h2>this is a new h2</h2>'

  // const people = ['mario','luigi','yoshi']
  // people.forEach(person => {
  //   content.innerHTML += `<p>${person}</p>`;

  // });

  //links

//   const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.boredbutton.com')
// link.innerText = "bored button";

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class',"success");
// mssg.setAttribute('style','color:green;')

// //styles 
// const title = document.querySelector('h1');
// title.setAttribute('style','margin:50px;');
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';

// title.style.fontSize ='60px';
// title.style.margin = '';

//get classes element has
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p =>{
  if(p.textContent.includes("error")){
    p.classList.add('error');
  }
  if(p.textContent.includes("success")){
    p.classList.add('success');
  }});

  //toggle classes

  const title = document.querySelector(".title");
  title.classList.toggle('test');
  title.classList.toggle('test');