/*TODO: Write a program that takes a positive integer from user & 
display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number  */
var negativeinteger = true;
do{
    var integer = parseFloat(prompt("Enter a postive integer"));
    if (integer >= 0 ){
        negativeinteger = false
    }
}while(negativeinteger)
console.log(`Number: ${integer}`)
console.log(`Round: ${Math.round(integer)}`)
console.log(`Floor: ${Math.floor(integer)}`)
console.log(`Ceil: ${Math.ceil(integer)}`)


/*TODO:  Write a program that takes a negative floating point 
number from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number  */ 
var positive$Integer = true;
do{
    var integer = parseFloat(prompt("Enter a postive integer"));
    if ( !(integer >= 0) && integer.toString().includes(".")){
        positive$Integer = false
    }
}while(positive$Integer)
console.log(`Number: ${integer}`)
console.log(`Round: ${Math.round(integer)}`)
console.log(`Floor: ${Math.floor(integer)}`)
console.log(`Ceil: ${Math.ceil(integer)}`)


/*TODO: Write a program that displays the absolute value of a number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */ 
var number = Number(prompt("Enter a number"))
console.log(`The Absolute value of number ${number} is ${Math.abs(number)}`)


/*TODO:  Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: */ 
var diceValue = Math.floor(Math.random() * 6) + 1
console.log(`The value of dice is ${diceValue}`)


/*TODO: Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser  */
var coinside = Math.floor(Math.random() * 2) + 1;
if(coinside === 1){
    console.log("Heads")
} else {
    console.log("Tails")
}

/*TODO: Write a program that shows a random number between 1 and 100 in your browser.*/ 
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`The random number is ${randomNumber}`)


/*TODO: Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms */ 
var userWeight = parseFloat(prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):"));
if (!isNaN(userWeight)) {
    console.log(`Your weight in kilograms is ${weightInKgs} kgs`)
} else {
    console.log("Invalid input. Please enter a valid weight.")
}


/*TODO: Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. */ 
var secretNumber = Math.floor(Math.random() * 10) + 1;
var incoreect = true
while(incoreect){
    var userNumber = parseInt(prompt("Guess a number between 1 and 10"));
    if (userNumber === secretNumber) {
        alert("Congratulations! You guessed the secret number correctly.")
        incoreect = false;
    } else {
        alert("Sorry, that's not the correct number. Try again.");
        var continueGame = prompt("Do you want to Continue or want to see the secret number Type 'Yes' for continue and 'No' for cancel").toLowerCase()
        if (continueGame == "no"){
            incoreect = false;
            alert(`The secret number was ${secretNumber}`);
        }
    }
}

