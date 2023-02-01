//global vars
let cart=[];
let proID=0;
function addPro(){
    let product = document.getElementById("txtProduct").value;//get the value
    cart.push(product);//add prodct into array
    disCart(product);//display value
    document.getElementById("txtProduct").value = "";//clear input
    upPrdNum();// keeping count in basket
}

function disCart(newProduct){
    let item = `<li id="${proID}">${newProduct} <span onclick="deletePro(${proID})">🗑️</span></li>`; // create html tmp
    const ul = document.getElementById("productList")//get html element
    ul.innerHTML+=item; //add item to html
    proID++;

}

function upPrdNum(){
    document.getElementById("amountProduct").innerHTML=cart.length;
}

function deletePro(id){
    document.getElementById(id).remove();
    cart.pop();
    upPrdNum();
}

function init(){
    console.log("init");
    upPrdNum();
}

window.onload-init;//wait to render the html