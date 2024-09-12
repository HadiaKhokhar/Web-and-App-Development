/* TODO: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).  */
var userInput = prompt("Enter a Number or String");
var isNumber = false;
var isString = false;
// Checking if it is a number 
if (!isNaN(Number(userInput))) {
    isNumber = true;
    alert("The given Input is a Number")
}
// Checking if it is a string
else{
    isString = true;
    if (userInput === userInput.toUpperCase()){
        alert("The entered string is in uppercase");
    }
    else if (userInput === userInput.toLowerCase()){
        alert("The entered string is in lowercase");
    }
    else{
        alert("The entered string is neither uppercase nor lowercase");
    }
}


/* TODO:  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.  */
var num1 = Number(prompt("Enter The Num 1:"));
var num2 = Number(prompt("Enter The Num 2:"));
if (num1 == num2){
    alert("Both numbers are equal");
}
else if (num1 > num2){
    alert("Number 1 is larger");
}
else{
    alert("Number 2 is larger");
}


/* TODO:  Write a program that takes input a number from user & state whether the number is positive, negative or zero.   */
var num = Number(prompt("Enter The Num:"));
if (num == 0){
    alert("The Number is Zero");
}
else if (num > 0){
    alert("The Number is Positive");
}
else{
    alert("The Number is Negative");
}


/* TODO:  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise  */
var vowel = ['a' , 'e' , 'i', 'o','u'];
var userInput ;
var isNotVowel = true;
do {
    userInput = prompt( `Enter the character to see if it is vowel or not \n Only Enter a Character`)
}
while ( ! (userInput.length === 1))
for (var i = 0 ; i < vowel.length; i++){
    if (userInput.toLowerCase() === vowel[i]){
        alert( `The character "${userInput}" is a vowel`);
        isNotVowel = false;
       break;
    }
}
if (isNotVowel){
    alert( `The character "${userInput}" is not a vowel`);
}

    
/* TODO:  Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.  Validate the two passwords: 
    i. Check if user has entered password. If not, then give message “ Please enter your password” 
    ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.  */
var password = "hadia123" ;
var userPassword ;
do{
    userPassword = prompt("Enter Your Password");
}
while (userPassword === "");
if (password === userPassword){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}


/* TODO: . This if/else statement does not work. Try to fix it: */
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting); 
}  


/* TODO:  Write a program that takes time as input from user in 24 hours clock format like: 19 = 7pm. Implement the following case using if, else & else if statements */
var time ;
var amOrpm  = "pm";
var timeSet = 0;
do{
    time = prompt("Enter time in 24 hours clock format")
}
while (time > 24 || isNaN(time) ||  time <=0) 
if (time <= 11){
    amOrpm = "am";
    alert(`The given time is ${time}${amOrpm}`);
}
else{
    for (var i = 12 ; i <= 24 ; i++){
        if ( i > 12){
            timeSet++;
            amOrpm = "pm";
        }
        if (time == i){
            if (time == 12){
                timeSet = 12;
            }
            alert(`The given time ${time} is ${timeSet}${amOrpm}`);
            break
        }
    }
}


/* TODO: Write a program that takes time as input from user in 24 hours clock format like: 19 = 7pm. Implement the following case using if, else & else if statements */
var time ;
do{
    time = prompt("Enter time in 24 hours clock format")
}
while (time > 24 || isNaN(time) ||  time <=0) ;
if (time >= 0 && time < 12){
    alert('Good Morning')
}
 else if (time >= 12 && time < 17){
    alert('Good Afternoon')
}
 else if (time >= 17 && time < 21){
    alert('Good Evening')
}
 else{
    alert('Good Night')
}
