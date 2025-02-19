// -------  EVENTS :LINKS , Button ,  -------


function askQuestion(example) {
    var answer = prompt(`What is Your ${example}`);
    alert(`Your ${example} is ${answer}`);
}


function validateEmail() {
    var email = document.getElementById('email').value;
    if (!email.includes('.com')) {
        document.querySelector('p').innerText ='Invalid email address. Missing ".com"';
    }       
}


/* TODO:  Create a form with two fields: one for entering a number of ounces and another for displaying the equivalent in grams. When the user types a number in the ounces field and clicks in the grams field, convert ounces to grams (1 ounce = 28.3495 grams).*/
function toGrams(){
    ounces = Number(document.getElementById("ounces").value);
    grams = ounces * 28.3495;
    if (ounces > 50) {
        document.querySelector('#grams ~ p').innerText = 'Enter the ounce amount less than 50';
        return; // Stop further execution if the input is invalid
    } 
    document.querySelector('#grams ~ p').innerText = ''; // Clear any previous error message  
    document.getElementById("grams").value = grams;
}


// TODO: Write a JavaScript function that, when a button is clicked, changes the background color of the webpage.
function changeBG(color) {
    document.firstElementChild.children[1].style.backgroundColor = color
}


/* TODO:  a paragraph expands to show more information when hovered over. You would write the function separately:.*/
function expand() {
    document.querySelector('#para').innerText += 'ipsum dolor sit amet, consectetur adipisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, aliquid.';
}
function shrink(){
    document.querySelector('#para').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, aliquid.';

}
document.querySelector('#para').addEventListener('mouseover', expand);
document.querySelector('#para').addEventListener('mouseout', shrink);



/* TODO: Showing a Tooltip on Hover: */
function showtooltip() {
    document.querySelector('#help-tooltip').style.display = 'inline'
}
function hidetooltip() {
    document.querySelector('#help-tooltip').style.display = 'none'
}
 document.querySelector('#help').addEventListener('mouseover', showtooltip);
 document.querySelector('#help').addEventListener('mouseout', hidetooltip);


// TODO: Check the lenght 0of the password on focus and on blur 
function passwordLengthChecker(){
    var passwordLength =  document.querySelector("#password").value.length;
    if (passwordLength < 8) {
        document.querySelector("#password_length_error").style.display = "inline";
        document.querySelector("#password_length_error").innerText = "Enter character greate than 8 or more ";
        return
    }
    document.querySelector("#password_length_error").style.display = "none";
}
document.querySelector('#password').addEventListener('focus',passwordLengthChecker );
document.querySelector('#password').addEventListener('blur',passwordLengthChecker ); 

// TODO: reading field values and applying validation using JavaScript Before Submission

function emailChecker(){
    var emailContent = document.querySelector('#user-email').value
    if (emailContent === '') {
    alert("Enter an Email");
    return    
}
    if (! (emailContent.includes(".com"))){
        alert('Enter a Valid Email')
    }
}
document.querySelector('form').addEventListener('submit',emailChecker ); 



/* TODO: Toggle Between Text and Password Input Fields  */
var passwordToggler = document.querySelector('#showPassword');
var password = document.querySelector('#password');
function passwordChecker(){
    if (passwordToggler.checked){
        password.type = 'text'
    }
    else{
        password.type = 'password'
    }
}
passwordToggler.addEventListener('change', passwordChecker)



// Add a class to a elment when it is Clicked 
// Remove an imgae when clicked
function hideImage(){
    document.querySelector('#h-image').classList.add("hidden");
}
document.querySelector('#h-img-button').addEventListener( "click", hideImage);