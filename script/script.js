console.log("script")
var user = "Aaron"; //string
var gpa = 3.6; //number
var isActive = true; //boolean 


 document.write(
   `
    <p class="text"> ${user} </p> 
    <p class="text"> ${gpa} </p> 
    <p class="text">Stundent: ${isActive} </p>
    `
    );

let userName = prompt("Enter your name");
let email = prompt("Enter email");
let salartMonthly = prompt("Enter money");
const m = 12;
// let yearSalary = salartMonthly*m;


document.write(`
   <p>Name: ${userName}</p>
   <p>Email: ${email}</p>
   <p> Salary: ${salartMonthly*m}</p>
`);