// TODO  Declare a variable called username.
var username;

// TODO Declare a variable called myName & assign to it a string that represents your Full Name. 
var myName = "Hadia Khokhar";

// TODO Write script to 
    // a) Declare a JS variable, titled message. 
    // b) Assign “Hello World” to variable message  
    // c) Display the message in alert box.
    var message = "Hello World";
    alert(message);

// TODO Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
var studentName = "Hadia Khokhar";
var studentAge = 19;
var education = "Intermediate";
alert(studentName);
alert(studentAge);
alert(education);

// TODO  Write a script to display the following alert using one JS variable:
var dishes = "Pizza";
var string =  "";
for (var i = 0; i < dishes.length ; i++){
    string += `${dishes.slice(0 ,dish.length -i)}\n`
}
alert(string)

// TODO  Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 
var email = "hadiaakhokhar@gmail.com";
alert(`My email address is ${email}`)

// TODO Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert(`I'm trying to learn from the ${book}`);

// TODO Write a script to display this in browser through JS 
document.body.innerHTML = "<b>Yay! I can write HTML content through JS</b>";


// TODO . Store following string in a variable and show in alert and browser through JS 
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);