/*TODO: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. */
function  CapitalizeName(name){
    name = name.toLowerCase();
    var fLetters = name.slice(0,1).toUpperCase();
    var letters  = name.slice(1,name.length)
    return fLetters + letters;
}
var fName =  CapitalizeName(prompt("Enter your First Name"));
var lName = CapitalizeName(prompt("Enter your Last Name"));
alert(`Hello ${fName} ${lName}`);


/*TODO: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser */
var userInput = prompt("Enter your favorite mobile phone model");
 console.log(userInput);  //To check the entered value in console
alert(`Length of String of your favorite mobile phone model: ${userInput.length}`);


/*TODO: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . */
var countryName = "Pakistani";
var nIndex = countryName.indexOf("n");
console.log(`String: ${countryName}`)
console.log(`Index of n: ${nIndex}`)


/*TODO: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. */
var string = "Hello World!";
var lIndex = string.lastIndexOf("l");
console.log(`String: ${string}`)
console.log(`Last Index of l : ${lIndex}`)

/*TODO:  Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser  */
var $3index = countryName.charAt(3);
console.log(`String: ${countryName}`)
console.log(`Character at 3rd index of Pakistani: ${$3index}`)


/*TODO: Repeat Q1 using string concat() method. */
var mergeString = fName.concat(lName,"jjd")
console.log(`Concatenated String: ${mergeString}`);


/*TODO:  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser */
var city = "Hyderabad";
console.log(`City: ${city}`);
city =  city.replace("Hyder", "Islamabad")
console.log(`After Replacement: ${city}`);


/*TODO: Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
var message = “Ali and Sami are best friends. They play cricket and football together.”;  */
var message = "Ali and Sami are best friends. They play cricket and football together.";
var modifiedMessage = message.replaceAll("and","&");
 console.log(`Original Message: ${message}`);  // To check the original message in console
console.log(`Modified Message: ${modifiedMessage}`);


/*TODO: Write a program that converts a string “472” to a number 472. Display the values & types in your browser.  */
var strNumber = "472";
var number = Number(strNumber);
console.log(`String: ${strNumber}`); 
console.log(`Number: ${number}`);
console.log(`Type of String: ${typeof strNumber}`);
console.log(`Type of Number: ${typeof number}`);


/*TODO: Write a program that takes user input. Convert and show the input in capital letters.  */
var userInput = prompt("Enter any text");
var capitalizedInput = userInput.toUpperCase();
console.log(`User Input: ${userInput}`);
console.log(`Upper Case: ${capitalizedInput}`);


/*TODO: Write a program that takes user input. Convert and show the input in title case.  */
var title = CapitalizeName(userInput);
console.log(`User Input: ${userInput}`);
console.log(`Title Case: ${title}`)

/*TODO: Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser.   */
var num = 35.36 ;
var String = num.toString();
String = String.replace(".", "");
console.log(`Number: ${num}`);
console.log(`Result: ${String}`);


/*TODO: Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
Note: 
ASCII code of ! is 33 
ASCII code of , is 44 
ASCII code of . is 46 
ASCII code of @ is 64   */
var userName = prompt("Enter Your User Name:");
var char = ["@", "." , "," , "!"]
var haveChar;
do{
    userName = prompt("Enter Your User Name:");
    for (var i = 0 ; i < char.length ; i++){
        if (userName.includes(char[i])){
            haveChar = true;
            alert(`This character is not allowed ${char[i]}`)
            break;
        }
        else{
            haveChar = false;
        }
        
    }

}
while(haveChar)

// // Function to check for special characters using ASCII codes
// function containsSpecialChar(userName) {
//     for (var i = 0; i < userName.length; i++) {
//         var charCode = userName.charCodeAt(i);  // Get the ASCII code of each character

//         // Check if the character is one of the special symbols
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             return true;  // Return true if a special character is found
//         }
//     }
//     return false;  // Return false if no special characters are found
// }

// var userName;
// do {
//     // Take username input from user
//     userName = prompt("Enter Your User Name:");

//     // Check if the username contains any special characters
//     if (containsSpecialChar(userName)) {
//         alert("Username contains invalid characters! Please enter a valid username without [@ . , !]");
//     }

// } while (containsSpecialChar(userName));  // Repeat until a valid username is entered

// alert("Valid username!");

 
/*TODO: You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE,program should inform about its availability. Example:  */

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter a item to search: ").toLowerCase();
var isFound = false;

for (var i = 0; i < A.length; i++) {
    if (searchItem === A[i]) {
        isFound = true;
        console.log(`Searched Item ${searchItem} is found at ${i}`)
        break;
    }
}
if (isFound === false){
    console.log(`Searched Item ${searchItem} is not found`)
}


/*TODO: Write a program to take password as an input from user. The password must qualify these requirements: 
a. It should contain alphabets and numbers 
b. It should not start with a number 
c. It must at least 6 characters long 
If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.  */
var emptyPassword; 
var userPassword ;
var incorrectPassword;
function alpha$num(Password) {
    var ASCII ;
    var haveAlpha = false ;
    var haveNum  = false;
    for (var i=0 ; i < Password.length; i++){
        ASCII = Password.charCodeAt(i)
        if ((ASCII >= 65 && ASCII <=90) || (ASCII >= 97 && ASCII <=122)){
            haveAlpha = true
        }
        else if ((ASCII >= 48 && ASCII <=57)){
            haveNum = true;
        }
        if (haveAlpha && haveNum) {
            break;
        }
    }
    if (haveAlpha && haveNum){
        return true
    }
    else{
        if(! haveAlpha){
            alert("Enter Alphabets in your Password")
        }
        if (! haveNum){
            alert("Enter Numbers in your Password")
        }
        return false
    }
}
function notFirstCharNum(Password){
    var first_ASCII = Password.charCodeAt(0);
    if (first_ASCII >= 48 && first_ASCII <= 57){
        alert("Cannot Start with Number in your Password")
        return false;
    }
    else{
        return true
    }
}
function password6Char(Password){
    var passwordLength = Password.length;
    if (passwordLength < 6){
        alert("Enter atleast 6 characters")
        return false
    }
    else{
        return true
    }
}

do {
    userPassword = prompt("Set Your Password");
    if (userPassword === "" ){
        alert("Password cannot be empty.");
        emptyPassword = true
    }
    else{
        emptyPassword = false;
        incorrectPassword = false;
        if (!(userPassword ===  null)){
            if(alpha$num(userPassword) && notFirstCharNum(userPassword) && password6Char(userPassword)){
                alert("Your Password have been Set")
            }
            else{
                alert("Please enter a Valid Password")
                incorrectPassword = true
            } 
        }
    }
}while(emptyPassword || incorrectPassword)


/*TODO: Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.   */
var university = "University of Karachi";
var array = university.split("") ;
console.log(array)


/*TODO: Write a program to display the last character of a user input. */
var userInput = prompt("Enter your Country Name:");
var lastChar  = userInput.slice(userInput.length - 1 ,userInput.length);
console.log(lastChar)


/*TODO: You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. */
var string = "The quick brown fox jumps over the lazy dog";
var tTimes = 0;
for (var i = 0 ; i < string.length;i++ ){
    var index =  string.charAt(i);
    var fNextIndex = string.charAt(i+1)
    var sNextIndex = string.charAt(i+2)
    if ((index === "t" || index === "T") && fNextIndex === "h" && sNextIndex === "e"   ){
        tTimes++
    }
}
console.log(string);
console.log(`There are ${tTimes} occurence(s) of word "the"`)
