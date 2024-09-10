// Rounding number and difference
var num1 = "22.6633";
console.log(Math.floor(num1));
console.log(Math.round(num1));
console.log(Math.ceil(num1));


// Converting string into integers and float
var num1 = "22.6633";
console.log(parseInt(num1)); //clears the decimal numbers
console.log(parseFloat(num1));  // convert with flaot numbers
console.log(Number(num1)) /// convert as it is

// Converting integers to strings
var numTwo = 23
console.log(numTwo.toString())

// Controlling the length of decimals
var number = 23.44 * 45.99932;
console.log(number.toFixed(2));

//Getting the current date and time
var date = new Date(); //It is date is class and this () creates an date objuect now thing it retrieve form your computer and output is not string you have to convert it string
// console.log(date);
// var dateData = date.toString();
var daysInWeeks =  ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"]
var dayindex = date.getDay();
var theDay = daysInWeeks[dayindex]
console.log(theDay);
    // Separately gettinng the objects data :
    // FOR DATE:
    var dayindex = date.getDay();
    var daysInWeeks =  ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"]
    var theDay = daysInWeeks[dayindex]
    console.log(theDay);
    // FOR DATE:
    var datenow = date.getDate();
    console.log(datenow);
    // FOR Month:
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthindex = date.getMonth();
    var monthnow = months[monthindex]
    console.log(monthnow);
    // FOR YEAR:
    var yearNow  = date.getFullYear();
    console.log(yearNow);
    // FOR HOURS:
    var hour =  date.getHours();
    console.log(hour)
    // FOR MINUTES:
    var minutes = date.getMinutes()
    console.log(minutes);
    // FOR SECONDS:
    var seconds = date.getSeconds()
    console.log(seconds)
    // FOR MILLISECONDS:
    var milliSeconds = date.getMilliseconds(); //gives you a number from 0 through 999.
    console.log(milliSeconds);
    // FOR TIME ZONE:
    var time = date.getTime()//gives you the number of milliseconds that have elapsed since midnight, Jan. 1, 1970.
    console.log(time)


    //Specifying a date and time
    var date = new Date("September 10,2024");
    var d = new Date("July 21, 1983 13:25:00"); 
    var dateNow = new Date();
    var totalMilliSeconds = date.getTime()-dateNow.getTime() ;
    var milliToDays = Math.floor(((totalMilliSeconds/1000)/60)/60)/24;
    console.log(milliToDays);

    //Changing elements of a date and time 
    //It willl only chnge what you will change other thongs will same Date object without affecting other date components.
    var d = new Date();
    date.setFullYear(2005);// Sets the year to 2005 while keeping the current month, day, etc.
    date.setHours(1); 
    date.setDate(10);
    date.setMonth(8);
    console.log(date);
 


// Randomization
var n = Math.random();
console.log(n)
n = Math.floor((n*6)+1)
console.log(n)


// Conditional Statements
if (n > 70){
    alert(`Your and ${userTwo} Love Score is: ${n}% You guys are in love`);
}
else if (n > 30) {
     alert(`Your and ${userTwo} Love Score is: ${n}% you guys loves each other so much`);
}
else{
     alert(`Your and ${userTwo} Love Score is: ${n}% you guys should break up`);
}


// Comparators : 
// === (Equality + smae data type)
// == (Equality only)
// ==! (not equal)
//  >, < , >= , <= 


// For Combining the Comparators : &&(and) , ||(or) , !   


// ARRAYS
var fruits = ["Apple" , "Banana" , "Bery"]
console.log(fruits[0]);
console.log(fruits.includes("mango"))


// Adding list items at random positions and and multiply data types in array
var numList = [];
console.log(numList);
numList[5] = 2
numList[2] = "d"
console.log(numList);
numList[2] = "e"


// Adding items at the end of the list
fruits.push("Appricot");


// Removing an item from the end of the list
fruits.pop()


// Adding items at the begining of the list
fruits.shift();


// Removing an item from the begining of the list
fruits.unshift("Mango" , "Peach")


// Splice Method in array
var animal = ["dog", "cat", "fly", "bug", "ox"];
    // array.splice(start, deleteCount, item1, item2, ..., itemN)
    //start: Index to begin changing the array; negative values count from the end.
    //deleteCount (optional): Number of elements to remove. 0 means none are removed.
    //item1, item2, ..., itemN (optional): Elements to add at the start index; if omitted, splice() only removes elements.
    // Return Value
    // The splice() method returns an array containing the deleted elements.
    // If no elements are removed, an empty array is returned.
var removedElements = animal.splice(2, 2); // Start at index 2, remove 2 elements
console.log(animal);        // Output: ["dog", "cat", "ox"]
console.log(removedElements); // Output: ["fly", "bug"]
fruits.splice(1, 0, 'rabbit', 'horse');
colors.splice(1, 1, "frog" , "bull" , "rabbit");
console.log(animal);
let arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-2, 1); // Removes 1 element starting from the second-to-last index
console.log(arr); // Output: ['a', 'b', 'e']


// WHILE LOOP
var numList = [];
function fizzBuzz(){
    while (numList.length < 100)  {
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
    }
    console.log(numList)
}
// Write a while loop that keeps asking the user to enter a number between 1 and 10 until they do so correctly.
var userResponse ;
while  (! (userResponse>0 && userResponse<11) ){
    userResponse = Number(prompt("Enter the number between 1 and 10"))
}


// DO WHILE LOOP
// In a do...while loop, the loop body is executed at least once before checking the condition. This ensures that the loop runs at least one time regardless of the condition. 
var i = 0;
do {
  alert(i);
  i++;
} while (i < 0);



// FOR LOOPS
for (var  i=1 ; i <= 50 ; i++){
    console.log(i)
}
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var userCity =  prompt("Write your city name tosee if it is clean:");
var matchFound = false;
for (var i = 0; i < cleanestCities.length; i++){
    if (userCity === cleanestCities[i]){
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === false){
        alert("It's not on the list");
}
// Nested For Loops
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullName = []
for (var i=0 ; i < firstNames.length ; i++ ){
    firstName = firstNames[i];
    for (var j=0 ; j < lastNames.length ; j++ ){
        lastName = lastNames[j];
        fullName.push(firstName+lastName);
    }
}
console.log(fullName)


// Findind Index

// str.indexOf(searchValue, fromIndex)
var str = "Hello, world!";
var index = str.indexOf("world");  // Returns 7
console.log(index);  // Output: 7
var notFoundIndex = str.indexOf("goodbye");  // Returns -1
console.log(notFoundIndex);  // Output: -1
// Last Index of 
var txt = "one 2 is two one is two";
var index = txt.indexOf("two");
console.log(index)


// Finding Charater in a string
var userName = "Hadia";
var fChar = userName.charAt(1)
console.log(fChar)


//Switch Statement
switch(expression) {
    case value1:
      // code to execute if expression === value1
      break;
    case value2:
      // code to execute if expression === value2
      break;
    // additional cases...
    default:
      // code to execute if expression doesn't match any case
  }
var score = 85; // Example score
switch (true) {
  case (score >= 90):
    console.log("Grade: A");
    break;
  case (score >= 80):
    console.log("Grade: B");
    break;
  case (score >= 70):
    console.log("Grade: C");
    break;
  case (score >= 60):
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}

  
