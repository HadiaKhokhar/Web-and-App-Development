// Alerts
alert("Hello");

// Data types
alert("String");
alert(123); // Number
alert(true) ;// Boolean

alert(typeof "e")
alert(typeof 1 )
alert(typeof true )

alert(2+3);
alert(2==3);

Variables
prompt("What is your name?")

var myName = prompt("What is your name?");
alert(myName);
alert("Your name is "+myName);

myName = "hiba"
alert(myName);

// Variable Naming
// ☒ stupid name
// ☒ starting variable name with a number
// ☒ naming a variable with a keyword 
// ☒ using spaces and symbol 

// ☑  using camel Casing
// ☑  Only using number middle or after the in the name of the varible 
// ☑  Only using dollar and inderscores 

// Concatenation of strings

var message = "hello"

alert(message + " there, " + myName )

// slicing
alert(message.slice(1,4))



// Arithematic operation
var a = 2;
var b = 45 - 6;
var c = 23 *3;
var d = 24/4;
var e = 23 % 4 ;   // Modulus the answer will be the remiander of the division
alert("a: "+ a +" b: " +b )

// Increment and Decrement operators
a++;
b--;
alert("After the Increment and Decremen \na: "+ a +" b: " +b );
a+=b ;
alert("The answer of a+=b:"+ a);

// Creating and Calling functions
function evenAndOddIdentifier(){
    var number =    parseInt(prompt("EVEN AND ODD GUESSER: \n \nEnter a Number"));
    if (number % 2 == 0) {
        alert(number + " is an Even Number");
    }
    else {
        alert(number + " is an Odd Number");
    }
    alert(number++)
}

evenAndOddIdentifier();


// Creating and giving parameter
function numOfBottles(Money){
    var price_of_bottle = 1.5;
    var change = Money%price_of_bottle; 
    var  num_bottles = (Money-change)/1.5 ;
    alert(num_bottles + " bottles of Milk and here is your change " + change);
   
}
numOfBottles(5)




