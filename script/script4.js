//let yourName ="Aaron"
//if(confirm("Are you "+ yourName + "?")){
//	console.log("Hello " + yourName);
//}else{
//	console.log("Then what is your name?");
//}
//
//let num1 = 1;
//let num2 = 2;
//let num3 = 3;
//let notTrue = false;
//
//if(num1<num2 && num3>num2){
//	console.log("num1 is smaller than num2 AND num3 is larger than num2");
//}
//
//if(num1 == 1 || num2 == 1 || num3 == 1){
//	console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
//}
//
//if(!notTrue){
//	console.log("not not true is true!");
//}

// loops
// for (start ; stop ; increment)
let product = []; //array
function displayNumbers(){
 for(let i=0;i<100;i+=3){
    document.write(`<li>${i}</li>`)
 }
}

//switch
 let op = prompt("enter your option");
 switch(op){
    case '1':
        displayNumbers();
        break;
    case '2':
        console.log("option 2");
        break;
    default:
        alert1('sorry, this is not an option');
        break;
 }

