

function calculator(){
let num1 = Number(prompt("Seclect number and press ok"));
let num2 = Number(prompt("Seclect number and press ok"));
let op = prompt("Select an operation:( +, -, *, / ) then press ok.");
sum(num1,num2)
sub(num1,num2)
mult(num1,num2)
div(num1,num2)
switch (op){
    case '+' : sum(a,b);
    break;
    case '-' : sub(a,b);
    break;
    case '*' : mult(a,b);
    break;
    case '/' : div(a,b);
    break;
    
};
};

function sum(a,b){
    console.log("Calculator");
    let product = num1+num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} + ${num2} = ${product}</p>
    `
};
function sub(a,b){
    console.log("Calculator");
    let product = num1-num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} - ${num2} = ${product}</p>

    `
};
function mult(a,b){
    console.log("Calculator");
    let product = num1*num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} x ${num2} = ${product}</p>

    `
};
function div(a,b){
    console.log("Calculator");
    let product = num1/num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} / ${num2} = ${product}</p>

    `
};
