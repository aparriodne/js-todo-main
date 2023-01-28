//function greet(name){
//    return "Hello" +name+"!"
//}

let prmptName =prompt("enter your name");

let greet = function(name)
{
    return "Hello"+name+"!";
}


console.log(greet("Aaron"));

function sum(a,b){
    return a+b;
}

console.log(sum(2,5));

//define multiplyThree

function multipltThree(number){
    let total = number*3;
    document.write(`
    <p>${number} x 3 = ${total}</p>
    `);
    return number*3;
}

multipltThree(5)
multipltThree(6)

