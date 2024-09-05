/* TODO: Write a program that take two numbers & add them in a new variable. Show the result in your browser */
var num1 = Number(prompt("Enter a Number:"));
var num2 = Number   (prompt("Enter another Number: "));
var sum = num1 + num2 ;
document.querySelector('h1').innerText = `The Sum of ${num1} and ${num2} is ${sum}`


/* TODO: Repeat task1 for subtraction, multiplication, division & modulus */
// var num1 = Number(prompt("Enter a Number:"));
// var num2 = Number   (prompt("Enter another Number: "));
// var sum = num1 - num2 ;
// document.querySelector('h1').innerText = `The Subtraction of ${num1} and ${num2} is ${sum}`

// var num1 = Number(prompt("Enter a Number:"));
// var num2 = Number   (prompt("Enter another Number: "));
// var sum = num1 * num2 ;
// document.querySelector('h1').innerText = `The Multiplication of ${num1} and ${num2} is ${sum}`

// var num1 = Number(prompt("Enter a Number:"));
// var num2 = Number   (prompt("Enter another Number: "));
// var sum = num1 / num2 ;
// document.querySelector('h1').innerText = `The Division of ${num1} and ${num2} is ${sum}`

// var num1 = Number(prompt("Enter a Number:"));
// var num2 = Number   (prompt("Enter another Number: "));
// var sum = num1 % num2 ;
// document.querySelector('h1').innerText = `The Modulus of ${num1} and ${num2} is ${sum}`


/* TODO: Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value 
by 3. 
l. Output : “The remainder is : 0”.
*/
var $number ;
document.querySelector('h1').innerText = `Value after variable declaration is: ${$number}`;
$number = 10;
document.querySelector('h1').innerText = `Initial value: ${$number}`;
$number++;
document.querySelector('h1').innerText = `Value after increment is: ${$number}`;
$number += 7; 
document.querySelector('h1').innerText = `Value after addition is: ${$number}`;
$number--;
document.querySelector('h1').innerText = `Value after decrement is: ${$number}`;
$number %= 3;
document.querySelector('h1').innerText = `The remainder is : ${$number}`;


/* TODO: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. */
var ticketPrice = 600; 
var ticketNumbers = Number(prompt(`Ticket Price is: ${ticketPrice}PKR\nHow many TIckets you want:`));
document.querySelector('h1').innerText = `The Total Cost to buy ${ticketNumbers} tickets to a movie is: ${ticketPrice * ticketNumbers }PKR.`;


/* TODO: Write a script to display multiplication table of any number in your browser..*/
var Table =  Number(prompt('Which Number of Table:'));
document.querySelector('h1').innerText = `Table of ${Table}` 
for (var i=0 ; i <= 10 ; i++){
    document.querySelector('p').innerText += `${Table} * ${i} = ${Table * i} \n`
}


/* TODO: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC” */
var cTem = 25;
var fTem = 70;
function convertToCelsius(farenheit) {
    return `${(farenheit - 32) * 5 /  9}`
}
function convertToFarenheit(celsius) {
    return (celsius * 9 /  5) + 32;
}
document.querySelector('p').innerHTML = `${cTem}<sup>0</sup>C is  ${convertToFarenheit(cTem)}<sup>0</sup>F.<br>${fTem}<sup>0</sup>F is  ${convertToCelsius(fTem)}<sup>0</sup>C`;


/* TODO Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.
*/
var priceOfItemOne  = 650;
var numberofItemOne = 3;
var priceOfItemTwo  = 100;
var numberofItemTwo = 7;
var shippingCharges = 100;
function  itemTotal(priceOfItem , numberItems) {
    return (priceOfItem * numberItems)
}
var totalAmount = itemTotal(priceOfItemOne,numberofItemOne) + itemTotal(priceOfItemTwo,numberofItemTwo) + shippingCharges;
document.querySelector('h1').innerText = `Shopping Cart` 
document.querySelector('p').innerHTML = `Price of Item 1: ${priceOfItemOne}<br>Quantity of Item 1: ${numberofItemOne}<br>Price of Item 2: ${priceOfItemTwo}<br>Quantity of Item 2: ${numberofItemTwo}<br>Shipping Charges: ${shippingCharges} <br><br><br>Total Cost: ${totalAmount} `;


// TODO: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browse
var totalMarks = 100;
var obtainedMarks = 55;
var percentage  = (obtainedMarks / totalMarks) * 100;
document.querySelector('h1').innerText = `MarkSheet` 
document.querySelector('p').innerHTML = `Total Marks : ${totalMarks}<br>Obtained Marks: ${obtainedMarks}<br><br><br>Percentage: ${percentage}`;


/* TODO: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) */
var usDollar  = 10;
var saudiRiyal  = 25;
var totalCurrency = (10 * 104.80) + (25 * 28 );
document.querySelector('h1').innerText = `Currency  in PKR`
document.querySelector('p').innerText = `The Total Currency is: ${totalCurrency}`;


/*TODO Write a program to initialize a variable with some number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */
var number_f  = 10;
var total = ((number_f * 5) * 10) / 2;


/*The Age Calculator: Forgot how old someone is? Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored 
values.
Output them to the screen like so: “They are either NN or NN
years old”.*/
var curYear = 2024;
var birthYear = 2005;
var age1 = (curYear - birthYear);
var age2 = age1-1;
document.querySelector('h1').innerText = `Age Calculator` 
document.querySelector('p').innerHTML = `Current Year : ${curYear}<br>Birth Year : ${birthYear}<br><br><br>You're either ${age1} years old or ${age2} years old `;


/*TODO: The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/
var radius = 20;
var circumference = 2 * 3.142 * 20;  
var area = 3.142 * (radius**2);
document.querySelector('h1').innerText = `The Geometrizer` 
document.querySelector('p').innerHTML = `Radius of a circle: ${radius}<br>The Circumference is : ${circumference}<br>The area is : ${area}.`;


/*TODO: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need 
NNNN to last you until the ripe old age of NN*/
var snack = "Samosa";
var age = 15;  
var estiAge = 65;
var numOfSnackPerDay = 3;
document.querySelector('h1').innerText = `The LifeTime Supply Calculatorr` ;
document.querySelector('p').innerHTML = `You will need ${((estiAge - age)* 365)*numOfSnackPerDay} to last you until the ripe old age of ${estiAge}`;



