console.log("script")

//exercise 1
var jobTitle = "Developer";
var geoLocation = "Southern California"
var partnerName = "Nicole";
var numberChildren = 0;

document.write(
    `
    <p class="text"> You will be a ${jobTitle} in ${geoLocation}</p>
    <p class="text"> and married to ${partnerName} With ${numberChildren} kids</p>
    `
);

//exercise 2
var user = "Aaron"
var email = "example@mail.com"
var password = "javascript"
var age = 31
var country = "USA"
var salary = 6000

document.write(
    `
    <p class="text">Name: ${user} </p>
    <p class="text">email: ${email} </p>
    <p class="text">password: ${password} </p>
    <p class="text">age: ${age} </p>
    <p class="text">country: ${country} </p>
    <p class="text">salary: ${salary*12} </p>
    `
    );
