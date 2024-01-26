let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0]; 
let result = document.getElementById('result');


function calculateAge(){
let birthDate = new Date(userInput.value);
let todayDate = new Date();

let y1 = birthDate.getFullYear();
let y2 = todayDate.getFullYear();

let y3 = y2-y1;

result.innerHTML =  `You are ${y3} years old`;
}