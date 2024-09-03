// LOVE CALCULATOR
alert("Welcome to the Love Calculator")
var userOne = prompt("Enter your Name:");
var userTwo = prompt("Enter your Partner's Name:");
var n = Math.random();
n = Math.floor((n*100)+1)
alert(`Your and ${userTwo} Love Score is: ${n}%`)
if (n > 70){
    alert(`Your and ${userTwo} Love Score is: ${n}% You guys are in love`);
}
else if (n > 30) {
     alert(`Your and ${userTwo} Love Score is: ${n}% you guys loves each other so much`);
}
else{
     alert(`Your and ${userTwo} Love Score is: ${n}% you guys should break up`);
}


// LEAP YEAR CALCULATOR
function isLeapYear(year){
    var Year =  parseInt(year)
    if (Year % 4 == 0){
          if (Year % 100 == 0 ){
               if(Year % 400 == 0 ){
                     return("This is a Leap Year")
               }
               else{
                    return("This is not a Leap Year")
               }
          }
         else{
              return("This is a Leap Year")
         }
    }
    else{
        return("This is not a Leap Year")
    }
}
alert("Welcome to Leap Year Calculator");
alert(isLeapYear(prompt("Enter the Year:")))


// Guest List Checker
var guestList = ["Hadia" , "Ashna" , "Omama" , "Noor"];
function guestChecker(user) {
      if (guestList.includes(user)){
     return("Your are Welcome")
 }
else{
    return("I'm sorry You're not invited")
}
}
alert(guestChecker(prompt("Enter the Name of the Guest You want to Check:")))


// FIZZBUZZ
var numList = [];
function fizzBuzz(){
    listItem = numList.length + 1;
    if (listItem % 3 == 0){
        if  (listItem % 5 == 0){
            listItem = "FizzBuzz"
        }
        else{
             listItem = "Fizz"
        }
    }
    else if (listItem % 5 == 0){
        listItem = "Buzz"
    }
    numList.push(listItem);
    console.log(numList)
}


// WHO'S PAYING FOR DINNER
function whopaying(usernames) {
    ran_Index = Math.floor(Math.random()*names.length)
    return  `${(usernames[ran_Index]).toUpperCase()} is going to pay for the Bill`
}
var names = [ "Hadia" , "Ashna", "Omama" , "ayesha" , "Amna" , "fiza"]
console.log(whopaying(names))


// 99 BOTTLES LYRICS
var bottles = 99;
console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
while (bottles > 1){
    bottles -= 1;
    console.log(`Take one down and pass it around, ${bottles} bottles of beer on the wall.`);
    console.log(`\n${bottles} bottle of beer on the wall, ${bottles} bottles of beer.`);
}
 bottles = 99;
console.log(`Take one down and pass it around, no more bottles of beer on the wall.`)
console.log(`\nNo more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, ${bottles} bottles of beer on the wall.`)


// How many Character
var userName  = prompt("Enter Your Name?").toLowerCase();
var char = prompt("Enter Character").toLowerCase();
var numofchar = 0 ;
for ( var i = 0 ; i < userName.length ; i++ ){
    if (userName.charAt(i) === char){
        numofchar++;
    }
}
alert(numofchar)

// Fabonacchi Calculator
function fibonacciGenerator(n){
    fabonacciList = []
    for (var i = 0; i < n ; i++ ){
        if (i>1) {
            sumOfIndex = fabonacciList[fabonacciList.length - 1]  +  fabonacciList[fabonacciList.length - 2];
            fabonacciList.push(sumOfIndex);
        }
        else{
            fabonacciList.push(i)
        }
    }
    return fabonacciList
}

// Exercise: Write a switch statement that prints out a message based on the day of the week. Use the variable dayOfWeek to represent the day. The messages should be:
// "It's Monday!" for Monday
// "Hump day!" for Wednesday
// "Weekend is near!" for Friday
// "It's the weekend!" for Saturday and Sunday
// "Just another day!" for all other days

function dayGreetings(day){
    var dayInWeek  = day.toLowerCase()
    switch (dayInWeek){
        case "monday":
            return ("It's Monday!");
            break
        case "wednesday":
             return ("Hump day!");
            break
        case "friday":
             return ("Weekend is near!");
            break
        case "saturday":
        case "sunday":
             return ("It's the weekend!");
            break
        default :
            return ("Just another day!")    
    }
    
}
console.log(dayGreetings(prompt("What day is today?")))