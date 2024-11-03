/* TODO: Suppose You have an array of object 
var itemsArray = [
{name:”juice”,price:”50”, quantity:”3”},
{name:”cookie”,price:”30”, quantity:”9”},
{name:”shirt”,price:”880”, quantity:”1”},
{name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items;*/
let total = 0;
let itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
itemsArray.forEach(function(item){
    total += parseInt(item.price) * parseInt(item.quantity);
}) 
console.log("Total Price: " + total); 


/*TODO: Create an object with properties name, email, password, age, 
gender, city, country.Check if age and country properties exist in object or not.Also check firstName and lastName properties in object.*/
let person = {
    name: "John",
    email: "john@example.com",
    password: "123456",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
};
console.log(`Age exists: ${ (Object.hasOwn(person,'age') ? 'Yes': 'No') }  `);
console.log(`Country exists: ${ (Object.hasOwn(person,'country') ? 'Yes': 'No') }  `);
console.log(`First Name exists: ${ (Object.hasOwn(person,'firstName') ? 'Yes': 'No') }  `);
console.log(`Last Name exists: ${ (Object.hasOwn(person,'lastName') ? 'Yes': 'No') }  `);


/*TODO:Create a constructor function with some properties. Now create multiple records using the constructor.*/
function Person(name, age, gender, address){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
}
let person1 = new Person("John", 30, "male", "123 Main St");
let person2 = new Person("Jane", 25, "female", "456 Elm St");
console.log(person1,person2);


/*TODO:Suppose you want to check population of your area, their educations and professions.Create a constructor function which holds following properties:Name, gender, address, education, profession, Enter all records one by one. 
Hint: 
 use select box for education and profession, 
 use radio box for gender
Bonus : use can use localStorage to save records  */ 

// Constructor function for User
function User(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save user records in localStorage
function saveRecords(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to display user records
function displayRecords() {
    const recordsDiv = document.getElementById('records');
    recordsDiv.innerHTML = ''; // Clear existing records
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach((user, index) => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `Record ${index + 1}: ${user.name}, ${user.gender}, ${user.address}, ${user.education}, ${user.profession}`;
        recordsDiv.appendChild(userDiv);
    });
}

// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    const newUser = new User(name, gender, address, education, profession);
    saveRecords(newUser);
    displayRecords(); // Update display with new records

    // Clear the form
    this.reset();
});

// Display records on page load
document.addEventListener('DOMContentLoaded', displayRecords);


