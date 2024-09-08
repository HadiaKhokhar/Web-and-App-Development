/* TODO:  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: */ 
var a =  10;
document.body.innerHTML = 'Result <br>'
document.body.innerHTML += `The value of a is ${a} <br>`
document.body.innerHTML += `................. <br>`
document.body.innerHTML += `The value of ++a is: ${++a} <br>`
document.body.innerHTML += `Now the value of a is : ${a} <br>`
document.body.innerHTML += `The value of a++ is: ${a++} <br>`
document.body.innerHTML += `Now the value of a is : ${a} <br>`
document.body.innerHTML += `The value of --a is: ${--a} <br>`
document.body.innerHTML += `Now the value of a is : ${a} <br>`
document.body.innerHTML += `The value of a-- is: ${a--} <br>`
document.body.innerHTML += `Now the value of a is : ${a} <br>`


/* TODO:  What will be the output in variables a, b & result after execution of the following script: 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;  */  
var a =  2;
var b = 1;
var result = --a - --b + ++b + b--; 
// --a; output: 1
// --a - --b; output: 1 - 0 = 1
// --a - --b + ++b; output: 1 + 1 = 2
// --a - --b + ++b + b--; 2 + 1= 3 
document.body.innerHTML = `a is ${a} <br>`;
document.body.innerHTML += `b is ${b} <br>`;
document.body.innerHTML += `The result of --a - --b + ++b + b-- is ${result} <br>`


/* TODO:  Write a program that takes input a name from user & greet the user.  */  
var userName =  prompt("What's Your Name?");
alert(`Hello ${userName} , Welcome to the Coding World`);


/* TODO:   Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 
should be displayed by default. */  
var tableNum = parseInt(prompt('Enter the Number for the Table to be Printed'));
if (Number.isNaN(tableNum)) {
    tableNum = 5;
}
document.querySelector('h1').innerText = `Table of ${tableNum}` ;
for (var i=0 ; i <= 10 ; i++){
    document.querySelector('p').innerText += `${tableNum} * ${i} = ${tableNum * i} \n`
}


/* TODO:  Take 
a) Take three subjects name from user and store them in 3 
different variables. 
b) Total marks for each subject is 100, store it in another 
variable. 
c) Take obtained marks for first subject from user and 
stored it in different variable.  
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables. 
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table) 
*/ 
var subject_1 = prompt("Enter the Subject 1:");
var subject_2 = prompt("Enter the Subject 2:");
var subject_3 = prompt("Enter the Subject 3:");
var totalMarkOfSub = 100;
var numberOfSubjects = 3;
var marks_Subject_1 = Number(prompt("Enter the Marks of Subject 1:"));
var marks_Subject_2 = Number(prompt("Enter the Marks of Subject 2:"));
var marks_Subject_3 = Number(prompt("Enter the Marks of Subject 3:"));
var perc_Subject_1 = (marks_Subject_1 / totalMarks)*100 ;
var perc_Subject_2 = (marks_Subject_2 / totalMarks)*100;
var perc_Subject_3 = (marks_Subject_3 / totalMarks)*100;
var totalMarksOfAll = totalMarkOfSub * numberOfSubjects;
var totalObtainedMarks = marks_Subject_1 + marks_Subject_2 + marks_Subject_3;


document.body.innerHTML = `
    <table>
        <tr>
            <td>Subjects</td>
            <td>Total Marks</td>
            <td>Obtained Marks</td>
            <td>Percentage</td>
        </tr>
        <tr>
            <td>${subject_1}</td>
            <td>${totalMarks}</td>
            <td>${marks_Subject_1}</td>
            <td>${perc_Subject_1}%</td>
        </tr>
        <tr>
             <td>${subject_2}</td>
            <td>${totalMarks}</td>
            <td>${marks_Subject_2}</td>
            <td>${perc_Subject_2}%</td>
        </tr>
        <tr>
            <td>${subject_3}</td>
            <td>${totalMarks}</td>
            <td>${marks_Subject_3}</td>
            <td>${perc_Subject_3}%</td>
        </tr>
        <tr>
            <td></td>
            <td>${totalMarksOfAll}</td>
            <td>${totalObtainedMarks}</td>
            <td>${(( totalObtainedMarks/totalMarksOfAll)*100)}% </td>
        </tr>
    </table>`