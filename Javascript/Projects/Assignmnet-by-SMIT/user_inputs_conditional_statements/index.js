/* TODO:  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”  */
var cityName = prompt("Enter a City Name?").toLowerCase();
if (cityName === "karachi") {
    alert("Welcome to city of lights");
}


/* TODO: Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.  */
var gender = prompt("Enter Your Gender:").toLowerCase();
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma'am");
}

/* TODO: Write a program to take input color of road traffic signal from the user & show the message according to this table: */
var trafficLight = prompt("Enter the Traffic color and know it's meaning?").toLowerCase();
if (trafficLight === 'red'){
    alert("Must Stop");
}
else if (trafficLight === "yellow") {
    alert("Ready to move ");
}
else if (trafficLight === 'green'){
    alert("Move now ");
}
else{
    alert("Invalid color");
}


/* TODO: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”  */
var fuel = Number(prompt("Enter the Fuel in litres?"));
if (fuel < 0.25){
    alert("Please refill the fuel in your car");
}


/* TODO:  Run this script, & check whether alert message would be displayed or not. Record the outputs. 

a. var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
} 
/// Displayed 

b. var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
/// Not Displayed

c. var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
}
/// Not Displayed
if (c === 13){ 
alert("condition 2 is true"); 
} 
/// Displayed 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
/// Not Displayed
if(c === 14){ 
alert("condition 4 is true"); 
} 
/// Displayed 


d. var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
/// Displayed 

e. if (true){ 
alert("True"); 
} 
/// Displayed 
if (false){ 
alert("False"); 
}
/// Not Displayed


f. if("car" < "cat"){ 
alert("car is smaller than cat"); 
}
/// Displayed
*/


/* TODO:  Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: */
var totalMarkOfSub = Number(prompt("Enter the Total Marks of each Subject:"));
var numberOfSubjects = 3;
var marks_Subject_1 = Number(prompt("Enter the Marks of Subject 1:"));
var marks_Subject_2 = Number(prompt("Enter the Marks of Subject 2:"));
var marks_Subject_3 = Number(prompt("Enter the Marks of Subject 3:"));
var totalMarksOfAll = totalMarkOfSub * numberOfSubjects;
var totalObtainedMarks = marks_Subject_1 + marks_Subject_2 + marks_Subject_3;
var perce  = parseInt((totalObtainedMarks/totalMarksOfAll)*100);
var grade;
var remarks;
if (perce >= 80){
    grade = "A-one";
    remarks = "Excellent"
}
else if ( perce >= 70){
     grade = "A";
    remarks = "Good"
}
else if ( perce >= 60){
     grade = "B";
    remarks = "You need to improve"
}
else{
     grade = "Fail";
    remarks = "Sorry"
}
document.body.innerHTML = `
                        <h1>MarkSheet</h1>
                        <p>Total Marks: ${totalMarksOfAll}</p>
                        <p>Obtained Marks: ${totalObtainedMarks} </p>
                        <p>Percentage: ${perce}%</p>
                        <p>Grade: ${grade}</p>
                        <p>Remarks: ${remarks}</p
                        
                        `


/* TODO:  Guess game: Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. 
a. If user guesses the same number, show “Bingo! Correct answer”. 
b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. */
var  randomNumber = Math.floor(Math.random() * 10) + 1;
var userGuess =  Number(prompt("Guess the Number between 1 and 10:"));

if (userGuess === randomNumber){
    alert("Bingo! Correct answer")
}
else if (userGuess + 1 === randomNumber){
    alert("Close enough to the correct answer")
}
else{
     alert("try Again")
}


/* TODO:  Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.  */
var userNumber = Number(prompt("Enter the any number to see if it is divisible by 3"));
if (userNumber % 3 === 0){
    alert(`the number ${userNumber} is divisible by 3.`)
} 


/* TODO:   Write a program that checks whether the given input is an even number or an odd number.*/
var userNumber = Number(prompt("Enter the any number to see if it is Even or Odd"));
if (userNumber % 2 === 0){
    alert(`the number ${userNumber} is Even.`)
} 
else (
     alert(`the number ${userNumber} is Odd.`)
)


/* TODO:  Write a program that takes temperature as input and shows a message based on following criteria 
a. T > 40 then “It is too hot outside.” 
b. T > 30 then “The Weather today is Normal.” 
c. T > 20 then “Today’s Weather is cool.” 
d. T > 10 then “OMG! Today’s weather is so Cool.” 
*/

var temperature = Number(prompt("Enter the temperature:"));
if (temperature > 40){
    alert("It is too hot outside.")
}
else if (temperature > 30){
    alert("The Weather today is Normal.")
}
else if (temperature > 20){
    alert("Today's Weather is cool.")
}
else (
    alert("OMG! Today's weather is so Cool.")
)



/* TODO: Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
a. First number 
b. Second number 
c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user.  
*/
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
if (operation === '+'){
    alert(num1 + num2);
}
else if (operation === '-'){
    alert(num1 - num2);
}

else if (operation === '*'){
    alert(num1 * num2);
}

else if (operation === '/'){
    if (num2 === 0){
        alert("Cannot divide by zero");
    }
    else{
        alert(num1 / num2);
    }
}
else if (operation === '%'){
    if (num2 === 0){
        alert("Cannot divide by zero");
    }
    else{
        alert(num1 % num2);
    }
}
else{
    alert("Invalid operation. Please enter a valid operation (+, -, *, /, %)");
}






