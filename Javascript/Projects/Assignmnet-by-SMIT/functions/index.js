/*TODO:  Write a function that displays current date & time in your browser. */
function curDate$TIme() {
    var currentDate = new Date();
    document.write(currentDate);
}
curDate$TIme();


/*TODO: Write a function that takes first & last name and then it greets the user using his full name. */
function greetUser(firstName, lastName) {
    var fullName = `${firstName} ${lastName}`;
    document.write(`Hello ${fullName}!`);
}
greetUser("John", "Doe");


/*TODO: Write a function that adds two numbers (input by user) and returns the sum of two numbers.*/
function sumNum(){
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    return num1 + num2;
}
console.log(sumNum())


/*TODO: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.  */
function calc(num1,num2,operator){
    switch (operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator!";
    }
}

/*TODO:  Write a function that squares its argument.  */
function square(num){
    return num **2
}


/*TODO:  Write a function that computes factorial of a number.*/
function factorial(num){
    if (num < 0 ){
        return "Invalid input! Factorial is not defined for negative numbers."

    }
    else if (num === 1 || num === 0){
        return 1
    }
    else {
        var result = 1;
        for (var i = 2 ; i <= num ;i++ ){
            result =   result*i
        }
        return result
    }
}
factorial(4)


/*TODO: Write a function that take start and end number as inputs & display counting in your browser. */

function count(start, end){
    for (var i = start; i <= end; i++){
        document.write(`${i}<br/>`);
    }
}
count(23,45)


/*TODO: . Write a nested function that computes hypotenuse of a right angle triangle.  
Hypotenuse2 = Base2 + Perpendicular2  
Take base and perpendicular as inputs. 
Outer function : calculateHypotenuse() 
Inner function: calculateSquare()  */

function calculateHypotenuse(base, perpendicular){
    function calculateSquare(num){
        return num ** 2
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))
}


/*TODO:  Write a function that calculates the area of a rectangle. 
A = width * height 
Pass width and height in following manner: 
i. Arguments as value 
ii. Arguments as variables */

function calculateArea(width, height){
    return width * height
}
console.log(calculateArea(10, 5))
console.log(calculateArea(height=5,width=10 ))


/*TODO: Write a JavaScript function that checks whether a passed string is palindrome or not?   
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.*/function checkPalindrome(str){
    var palindrome =  []
    for(var i in str ){
        palindrome.unshift(str[i])
    }
    palindrome = palindrome.join("")
    if (palindrome === str){
        console.log("The Word is Palindrome")
        return true
    }
    else{
        console.log("The Word is not Palindrome")
        return false
    }
}
checkPalindrome(prompt("Enter a word to check if it is Palindrome or not:"))


/*TODO: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
EXAMPLE STRING : 'the quick brown fox'  
EXPECTED OUTPUT : 'The Quick Brown Fox'*/

function capitalizeFirstLetter(str) {
    var wordList = str.toLowerCase().split(" ")
    for ( i in wordList){
        var word =  wordList[i]
        wordList[i] = word[0].toUpperCase() + word.slice(1)
    }
    return wordList.join(" ")
}
console.log(capitalizeFirstLetter('the Quick brown fox'))


/*TODO: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
EXAMPLE STRING : 'Web Development Tutorial'  
EXPECTED OUTPUT : 'Development'*/
function findLongestWord(str) {
    var wordList = str.split(" ")
    var LongestWord = wordList[0] ;
    for (i in wordList){
        var word = wordList[i];
        if (word.length > LongestWord.length){
            LongestWord  = word
        }
    }
}
console.log(findLongestWord('Web Development Tutorial'))


/*TODO: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  
Sample arguments : 'JSResourceS.com', 'o' */

function countLetter(str, letter){
    var count = 0;
    for (i in str){
        if (str[i] === letter){
            count++
        }
    }
    return count
}
console.log(countLetter('JSResourceS.com', 'o'))


/*TODO:  The Geometrizer 
Create 2 functions that calculate properties of a circle, using 
the definitions here. 
Create a function called calcCircumference: 
    • Pass the radius to the function. 
    • Calculate the circumference based on the radius, and output "The circumference is NN". 
Create a function called calcArea: 
    • Pass the radius to the function. 
    • Calculate the area based on the radius, and output "The area is NN". 
Circumference of circle    =     2πr 
Area of circle       =     πr2 */function calcCircumference(radius){
    var circumference  =  (2*3.142*radius).toFixed(2)
    console.log(`The circumference is ${circumference}`)
}
function calcArea(radius){
    var area  = (3.142*Math.sqrt(radius)).toFixed(2)
    console.log(`The area is ${area}`)
}

calcCircumference(5)
calcArea(5)

