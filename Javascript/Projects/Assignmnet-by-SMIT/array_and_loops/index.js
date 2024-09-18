/*TODO: Declare and initialize an empty multidimensional array. (Array of arrays)  */
var emptyArray = [[],[],[]];


/*TODO:  Declare and initialize a multidimensional array representing the following matrix:  */
var matrix = [ 
    [0,1,2,3] , 
    [1,0,1,2] , 
    [2,1,0,1] 
];
for (var i = 0 ; i < matrix.length ; i++ ){
    var row = matrix[i]
    console.log(row);
}

/*TODO: Write a program to print numeric counting from 1 to 10.  */
for (var i = 1 ; i <= 10; i++){
    console.log(i);
}



/*TODO: Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.  */

// var tableNumber = parseInt(prompt("Enter a number:"));
// var tableLength = parseInt(prompt("Enter the length of the table:"));

console.log(`Multiplication table of ${tableNumber}:`);
for (var i = 1 ; i <= tableLength; i++){
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


/*TODO:  Write a program to print items of the following array using for loop: 
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]  */
fruits = ["apple", "banana", "mango", "orange", "strawberry"] 
for (var i = 0 ; i < fruits.length ; i++ ){
    console.log(fruits[i])
}
for (var i = 0 ; i < fruits.length ; i++ ){
    console.log(`Element at ${i} is ${fruits[i]}`)
}


/*TODO:  Generate the following series in your browser. See 
example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */
// a
var counting = [];
for (var i = 1 ; i <= 15 ; i++ ){
   counting.push(i) 
}
console.log(`Counting: \n ${counting}`)
// b
counting = []
for (var i = 10 ; i >= 1 ; i-- ){
    counting.push(i)
}
console.log(`Reverse: \n${counting}`)
// c
counting = []
for (var i =2; i <= 20 ; i += 2){
    counting.push(i)
}
console.log(`Even: \n ${counting}`)
// d
counting = []
for (var i =1; i <= 19 ; i +=2 ){
    counting.push(i)
}
console.log(`Odd: \n ${counting}`)

//e 
counting = [];
for (var i = 2; i <= 20 ; i += 2){
    counting.push(`${i}k`)
}
console.log(`Series: \n ${counting}`)


/*TODO: . You have an array 
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: */
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSerach = prompt("Welcome to Catlym's Bakery What do you want Sir/Maam?").toLowerCase();
var itemFound = A.includes(userSerach);
if (itemFound){
    alert(`Yes, ${userSerach} is found in our menu at ${A.indexOf(userSerach)} index`);
}
else{
    alert(`No, ${userSerach} is not found in our menu. Please try again.`);
}


/*TODO:  Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].*/
var A = [24, 53, 78, 91, 12];
var gNum  =  0;
for (var i = 0 ; i < A.length ; i++ ){
    if ( gNum < A[i]){
        gNum = A[i]
    }
}
console.log(`Array Items: ${A} \n The Largest Number is: ${gNum}`)

/*TODO: Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] */
var Ae = [24, 53, 489, 91, 12];
var sNum = [24];
for (var i = 0 ; i < Ae.length ; i++ ){
    if (sNum ==
        undefined){
        sNum = Ae[i]
    }
    if ( sNum > Ae[i] ) {
        sNum = Ae[i]
    }
}
console.log(`Array Items: ${Ae} \n The Smallest Number is: ${sNum}`)


/*TODO: Write a program to print multiples of 5 ranging 1 to 100. */
for (var i=5 ; i <= 100 ; i += 5 ){
    console.log(i)

}