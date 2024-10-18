/*TODO: Write a custom function power ( a, b ), to calculate the value of a raised to b. */
function power(a, b) {
    /*TODO: Implement the power function using a loop. */
    if (Number.isInteger(b) || b === 0) {
        return Math.pow(a, b)
    }
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a
    }
}
power(5, 4)


/*TODO:  Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. */
function isLeapYear(year) {
    /*TODO: Implement the logic to determine whether the year is a leap year or not. */
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
isLeapYear(2020)


/*TODO: . If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by 
area = S(S − a)(S − b)(S − c) 
where, S = ( a + b + c ) / 2 
Calculate area of triangle using 2 functions*/

// Function to calculate semi-perimeter (S)
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}
calculateArea(3, 4, 5)
console.log("The area of the triangle is: " + area);


/*TODO: Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. */
function averageMarks(marks1, marks2, marks3) {
    return ((marks1 + marks2 + marks3) / 3).toFixed(2)
}
function percentage(marks1,marks2,marks3){
    var avg = averageMarks(marks1, marks2, marks3);
    return (avg / 100) * 100
}
function mainFunction(marks1,marks2,marks3){
    var average = averageMarks(marks1,marks2,marks3);
    var perce = percentage(marks1,marks2,marks3);
    console.log(`Average Marks: ${average}`);
    console.log(`Percentage: ${perce}`);
}
mainFunction(80, 90, 75);


/*TODO: You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.*/
var str = ["hadia","ashna","ayesha","iqra"]
function knowIndex(target,searchString,startPostion){
    for (var i = (startPostion !== undefined ? startPostion : 0) ; i<target.length; i++){
        if (target[i] === searchString){
            return i
        }
    }
    return -1
}
knowIndex(str,"omama",2)


/*TODO: Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. */
function deleteVowels(sentence){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newSentence = "";
    outerloop:
    for (var i in sentence){
        for (var j in vowels){
            if (sentence[i].toLowerCase() === vowels[j] ){
                continue outerloop
            }
        }
        newSentence += sentence[i]
    }
    return newSentence
}
console.log(deleteVowels("Welcome to the world"))


/*TODO: Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
“Pleases read this application and give me gratuity” 
Such occurrences are ea, ea, ui.*/
function vowelChecker(letter){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for( var vowel of vowels){
        if (letter === vowel){
            return true
        }
    }
    return false
}
function vowelCounter(sentence){
    var counter = 0;
    var ea = 0;
    var ui = 0;
    for (var i in sentence){
        i = +i
        if (vowelChecker(sentence[i])){
            if(vowelChecker(sentence[i+1])){
                switch (sentence[i]+sentence[i+1]){
                case "ea":
                    ea++
                    break
                case "ui":
                    ui++   
                    break
                default :
                    counter++
                }
            }
        }
    }
    console.log(`the number of occurrences of any two vowels in succession: ${counter},number of occurence of Pair "ea": ${ea},Number of occurence of Pair ui: ${ui}  `)
}
vowelCounter("Pleases read this application and give me gratuity")


/*TODO:  The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.*/

// Km to Meter
function convertKilometersToMeters(distance) {
    return distance * 1000;
}
// Mter to Feet
function convertMetersToFeet(distance) {
    return distance * 3.28084;
}
// Feet to Inches
function convertFeetToInches(distance) {
    return distance * 12;
}
// Inches to cm
function convertInchesToCentimeters(distance) {
    return distance * 2.54;
}
var distanceInKilometers = parseFloat(prompt("Enter the distance in kilometers:"));
var distanceInMeters = convertKilometersToMeters(distanceInKilometers);
var distanceInFeet = convertMetersToFeet(distanceInMeters);
var distanceInInches = convertFeetToInches(distanceInFeet);
var distanceInCentimeters = convertInchesToCentimeters(distanceInInches);
console.log("Distance in meters: " + distanceInMeters);
console.log("Distance in feet: " + distanceInFeet);
console.log("Distance in inches: " + distanceInInches);
console.log("Distance in centimeter: " + distanceInCentimeters);


/*TODO: Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. */

function calculateOvertimePay(hoursWorked, hourlyRate) {
    var overtimeHours = hoursWorked - 40;
    var overtimePay = overtimeHours * hourlyRate;
    return overtimePay;
}
var hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
var hourlyRate = parseFloat(prompt("Enter the hourly rate:"));
var grossPay = 0;
if (hoursWorked > 40) {
    var overtimePay = calculateOvertimePay(hoursWorked, 12);
    grossPay = 40 * hourlyRate + overtimePay;
} else {
    var grossPay = hoursWorked * hourlyRate;
}
console.log("Gross pay: Rs. " + grossPay.toFixed(2));


/*TODO: A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.  */
var amount = parseInt(prompt("Enter the Amount to withdrawn: "));
var note = [0,0,0];
function noteDivider(noteValue,index){
    if (amount>0 && amount/noteValue >=1){
        note[index] = +parseInt(amount/noteValue);
        amount = amount%noteValue;
    }
}
noteDivider(100,0)
noteDivider(50,1)
noteDivider(10,2)
console.log(`You will have ${note[0]} Hundred notes, ${note[1]} Fifty notes,${note[2]} ten notes, `)

