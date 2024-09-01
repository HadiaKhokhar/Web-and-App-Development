// TODO Declare a variable called age & assign to it your age. Show your age in an alert box. 
var age  = 19;
alert(`I'm ${age} years old`);

// TODO  Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
// var visites = 0  ;
// document.onload

// TODO Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2005;
document.body.innerHTML = `My birth year is ${birthYear} <br>Date type of my declared variable is number<br> `

// TODO  A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
    //a. Visitor’s name
    //b. Product title 
    //c. Quantity i.e. how many products a visitor wants to order 
//Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var userName = prompt("What's Your Name?");
var productTitle = prompt("What's the Product Title?");
var quantity = prompt(`How many  ${productTitle} do you want to order?`)
document.body.innerHTML += `Hello ${userName}, you ordered ${quantity} ${productTitle}(s) on XYZ Clothing store.`;
