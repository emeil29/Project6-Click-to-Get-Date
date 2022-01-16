const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

let i = new Date();
 let date = i.getFullYear()+'-'+(i.getMonth())+'-'+i.getDate();
btn.addEventListener('click', () =>
result.innerHTML = `Today Date and Time are ${i}`,
);
