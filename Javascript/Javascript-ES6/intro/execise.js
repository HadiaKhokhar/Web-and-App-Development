
// 1.1
function test(){

    var a = "3";
    var b = "8";
    
// my code here
    var c = a;
    a = b;
    b = c;


    alert("a is :" + a);
    alert("b is :" + b);


}
test(); 

// 1.2
var tweet = prompt("Enter your tweet:");
var tweetLength = tweet.length;
var total_character = 240;
var remaining_character = total_character - tweetLength
alert("you have written " + tweetLength + " characters and left with "+ remaining_character)
 
// 1.3
var s_tweet = tweet.slice(0,148)
alert(s_tweet)
alert(s_tweet.length) 

//1.4 Casing In Text

var user_name = prompt("What's Your Name?");
user_name = user_name.slice(0,1).toUpperCase()+user_name.slice(1,user_name.length).toLowerCase();
alert("Hey! "+ user_name);

//1.  Odd and Even Guess
var number =    parseInt(prompt("EVEN AND ODD GUESSER: \n \nEnter a Number"));
if (number % 2 == 0) {
    alert(number + " is an Even Number");
}
else {
    alert(number + " is an Odd Number");
}

alert(number++)

// Creating a Function for calculating a number of bottles a person can get

function numOfBottles(Money){
   var priceOfBottle = 1.5;
   var Bottles  =  Math.floor(Money/priceOfBottle);
   var change =  Money%priceOfBottle;
   alert("Yow will get " + Bottles +" Bottles of Milk and here is your change "+ change )
}
numOfBottles(parseInt(prompt("How much money do you have?")))



// Function to Count how many days weeks and years left in your life time
// Years to Week Converter
function yearsToWeek(years){
    return (years * 52)
}
// Years to Days Converter
function yearsToDays(years){
    return (years * 365)
}
function lifeInDaysWeeksYears(age){
    idealAge = 90;
    // Life in Years
    var lifeInYears = idealAge - age;
    // Life in Weeks
    var lifeInWeeks = yearsToWeek(idealAge) - yearsToWeek(age)  ;
    // Life in Days
    var lifeInDays = yearsToDays(idealAge) - yearsToDays(age);
    alert(`You have ${lifeInDays} Days, ${lifeInWeeks} Weeks , ${lifeInYears} Years Left in Your Lifetime`)
}
lifeInDaysWeeksYears(12);


// BMI Calculator

function bmiCalc(weight,height){
    return (Math.round(weight/(height**2)))
}
alert(bmiCalc(20,10));

