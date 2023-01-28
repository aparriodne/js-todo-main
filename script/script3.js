function addStudent(){
    let userName = prompt("enter name");
    let fsdi101 =Number (prompt("grade"));
    let fsdi102 =Number (prompt("grade"));
    let gpa = (fsdi101+fsdi102)/2;
    document.getElementById("text").innerHTML+=`
    <h5>Welcome ${userName}</h5>
    <p> ${fsdi101}</p>
    <p> ${fsdi102}</p>
    <p>Name: ${userName}</p>
    <p>GPA: ${gpa}</p>
    `
};

function avocadoShop(){
    let itemName =  "Hass avococado"
    const pricePer = 1.5
    let amount = Number (prompt("How many do you want?"))
    let cost = (amount*pricePer) 
    let tax = (cost*.0725)
    let totalCost = (tax+cost)
    document.getElementById("text").innerHTML=`\
    <h5>Welcome to the ${itemName} shop</h5>
    <p>Item: ${itemName}</p>
    <p>Quantity needed? ${amount}</p>
    <p>Price per: $ ${pricePer}</p>
    <p>Before taxes: $ ${cost}</p>
    <p>Tax total: $ ${tax}</p>
    <p>Total Cost: $ ${totalCost}</p>
    `
};