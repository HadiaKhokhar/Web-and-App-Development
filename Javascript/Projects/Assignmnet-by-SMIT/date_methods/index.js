/*TODO: . Write a program that displays current date and time in your browser.*/
var dateObj = new Date();
console.log(dateObj.toString())


/*TODO: Write a program that alerts the current month in words. For example December. */
var curMonth = dateObj.getMonth();
var monthArray = ["January","February","March","April","May","June","July","August","September","November","December"]
console.log(`Current Month: ${monthArray[curMonth]}`)


/*TODO: Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show Sun.*/
var curday = dateObj.getDay();
var dayArray = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat","Sun"]
alert(`Today is ${dayArray[curday]}`)


/*TODO:  Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. */
var curday = dateObj.getDay();
if (curday === 0 || curday === 6){
    alert("It's Fun day")
}


/*TODO: Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.*/
var curDate = dateObj.getDate();
if (curDate < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}


/*TODO: Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. */
var timeSince1970 = dateObj.getTime();
console.log(dateObj.toString())
console.log(`Elapsed Milliseconds Since January 1, 1970: ${timeSince1970}`)
console.log(`Elapsed Minutes Since January 1, 1970: ${timeSince1970/(1000*60)}`)


/*TODO: Write a program that tests whether it's before noon and alert “Its AM” else “its PM” */
var time = dateObj.getHours()
var amOrpm = "AM" ;
console.log(time)
if (time >= 12){
    amOrpm = "PM"
}
alert(`It's ${amOrpm}`)


/*TODO: Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. */
var laterDate = new Date("December 31, 2020")
console.log(laterDate)


/*TODO: Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 */
var ramdanDate = new Date("March 11,2024")
var numofDays = (dateObj.getTime() - ramdanDate.getTime()) / (1000 * 60 * 60 * 24)
console.log(`${Math.floor(numofDays)} Days have been past Since 1st Ramadan 2024`) 


/*TODO: Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015 */
var begin2015 = new Date("January 01,2015")
var numOfSecs = (dateObj.getTime() - begin2015.getTime()) / 1000;
console.log(`On a Refrence date: ${dateObj}`)
console.log(`${Math.floor(numOfSecs)} Seconds have been past Since the beginning of 2015`) 


/*TODO: Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser */
console.log(`Current Date: ${dateObj}`)
var curHour = dateObj.getHours();
dateObj.setHours(curHour + 1);
console.log(`Date and Time After 1 Hour: ${dateObj}`)


/*TODO: Write a program that creates a date object and show the date in an alert box that is reset to 100 years back*/
console.log(`Current Date: ${dateObj}`)
var currYear = dateObj.getFullYear()
dateObj.setFullYear(currYear - 100);
console.log(`100 Years Ago It was: ${dateObj}`)


/*TODO: Write a program to ask the user about his age. Calculate and show his birth year in your browser.*/
var userAge = parseInt(prompt("What's Your Age?"));
var userBirthYear = dateObj.getFullYear() - userAge
console.log(`Your Age is: ${userAge}`)
console.log(`Your Birth Year : ${userBirthYear}`)


/*TODO: . Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */
var customerName = prompt("Enter Your Name:");
var currentMonth = new Date().toLocaleString('default', { month: 'long' });
var numberOfUnits = parseInt(prompt("Enter Number of Units:"));
var chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaySubcharge = 350;
var grossAmountPayable = netAmountPayable + latePaySubcharge;
var totalPayment;
console.log(`Customer Name: ${customerName}`);
console.log(`Current Month: ${currentMonth}`);
console.log(`Number of Units: ${numberOfUnits}`);
console.log(`Charges per Unit: ${chargesPerUnit.toFixed(2)}`);
console.log(`Net Amount Payable (Within Due Date): ${netAmountPayable.toFixed(2)}`);
console.log(`Late Payment Surcharge: ${latePaySubcharge}`);
console.log(`Gross Amount Payable (after Due Date): ${grossAmountPayable.toFixed(2)}`);
if (dateObj.getDate() > 15){
    alert("Late Payment Detected.");
    totalPayment = grossAmountPayable
}
else{
    alert("No Late Payment Detected.");
    totalPayment = netAmountPayable
}
console.log(`Your Total is:${totalPayment}`);




