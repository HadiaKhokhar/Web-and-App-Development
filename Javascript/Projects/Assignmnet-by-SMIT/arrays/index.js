/* TODO:  Declare an empty array using JS literal notation to store student names in future. */
var studentNames = [];

/* TODO: Declare an empty array using JS object notation to store student names in future.  */
var studentNames1 = new Array();


/* TODO: Declare and initialize a strings array. */
var stringArray = ['mangoes', 'peach', 'leeche'];


/* TODO: Declare and initialize a numbers array. */
var numberArray = [1,2,3,4,5];


/* TODO: Declare and initialize a boolean array.  */
var booleanArray =  [true , false, true , false];



/* TODO: Declare and initialize a mixed array  */
var mixedArray = ['mangoes',1, 4, true , false];


/* TODO:  Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: */
var education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
document.body.innerHTML = "<h1>Qualification</h1>";
for (var i = 0 ; i < education.length ; i++){
var sentence = `${i + 1}.${education[i]}` ;
document.body.innerHTML  += `<p>${sentence}</p>`
}


/* TODO: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:  */
var studentNames = ["John Doe", "Jane Smith","Bob Johnson"];
var studentScores = [ 320, 120, 470];
var studentPercentage = []
var totalMarks = 500;
var para = "" ;
for (var i = 0 ; i < studentScores.length ; i++){
    var obtainedMarks = (studentScores[i] / totalMarks) *100;
    studentPercentage.push(obtainedMarks)
}
for (var i = 0 ; i < studentNames.length ; i++){
    para += `<p>Score of ${studentNames[i]} is ${studentScores[i]}. Percentage ${studentPercentage[i]}%</p>`
}
document.body.innerHTML = para





/* TODO: Initialize an array with color names. Display the array elements in your browser. 
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
c. Add two more color to the beginning of the array. Display the updated array in your browser. 
d. Delete the first color in the array. Display the updated array in your browser. 
e. Delete the last color in the array. Display the updated array in your browser. 
f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.  */
function showColorArray(){
    console.log(colors)
}
var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
showColorArray()

var newColor = prompt("Enter a color to add at the beginning: ");
colors.unshift(newColor);
showColorArray()
 
newColor = prompt("Enter a color to add at the end: ");
colors.push(newColor);
showColorArray()
 
colors.unshift('beige', 'purple')
showColorArray();

colors.shift()
showColorArray();

colors.pop();
showColorArray();


alert('Enter a color to add at the desired index')
var newColor = prompt("Enter a color to add at the specified index: ");
var index = parseInt(prompt("Enter the index to add a color: "));
colors.splice(index, 0, newColor);
showColorArray()

alert('Enter the index and the number of colors to delete')
var index = parseInt(prompt("Enter the index to delete colors: "));
var numColors = parseInt(prompt("Enter the number of colors to delete: "));
colors.splice(index, numColors);
showColorArray()
 

/* TODO:  Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. */
var scores = [90, 85, 95, 80, 92,]
var content = `<p>Sores of Students: ${scores}</p>`

scores.sort(function(a, b) {
    return a - b;
});

content += `<p>Sorted Scores of Students: ${scores}</p>`
document.body.innerHTML = content;


/* TODO: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. */
var cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia'];
var selectedCities = cities.slice(0, 3);
var text = `<p>Cities List:<br> ${cities}</p> <p>Selected City List:<br>\n ${selectedCities}</p>`;
document.body.innerHTML = text;


/* TODO:  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) */
var arr = ["This ", " is ", " my ", " cat"];
document.body.innerHTML = `Array <br>${arr}<br>`;
var result = arr.join("");
document.body.innerHTML += `String <br>${result}`;


/* TODO:  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)  */
var arr = [];
arr.push("John");
arr.push("Jane");
arr.push("Darcy");
arr.push("Steve")

document.body.innerHTML = `Names: ${arr}`;
document.body.innerHTML += `${arr[0]}<br>`;
document.body.innerHTML += `${arr[1]}<br>`;
document.body.innerHTML += `${arr[2]}<br>`;
document.body.innerHTML += `${arr[3]}<br>`;


/* TODO: Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)  */
 document.body.innerHTML = `Names: ${arr}<br>`;
 for (var i= 1 ; i < arr.length+1 ; i++){
    document.body.innerHTML += `${arr[arr.length - i]}<br>`;
 }

// Another Solution
arr.unshift("John");
arr.unshift("Jane");
arr.unshift("Darcy");
arr.unshift("Steve");
document.body.innerHTML += `${arr}<br>`;
document.body.innerHTML += `${arr[1]}<br>`;
document.body.innerHTML += `${arr[2]}<br>`;
document.body.innerHTML += `${arr[3]}<br>`;


/* TODO: Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:  */

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var option;
for (var i = 0; i < manufacturers.length; i++){
   option += `<option value='${manufacturers[i]}'>  ${manufacturers[i]} </option>`
}
document.body.innerHTML = `<select> ${option}</select>`

