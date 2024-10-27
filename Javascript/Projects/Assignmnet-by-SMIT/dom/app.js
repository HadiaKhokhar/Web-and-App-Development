/*TODO:  Consider you have following code snippet:(Copy it in your HTML file)
 i. Get element of id “main-content” and assign them in a variable.
 ii. Display all child elements of “main-content” element.
 iii. Get all elements of class “render” and show their innerHTML 
 in browser.
 iv. Fill input value whose element id first-name using javascript.
 v. Repeat part iv for id ”last-name” and “email”.
*/
var mainContent = document.getElementById('main-content');

console.log(mainContent.children);
var renderElement =  document.getElementsByClassName('render')
for(var i=0; i<renderElement.length; i++){
    console.log(renderElement[i].innerHTML);
}
document.getElementById('first-name').value  = "Hadia"
document.getElementById('last-name').value  = "Khokhar"
document.getElementById('email').value  = "workwithhadia@gmail.com"

/*TODO: use HTML code of question 1 and show the result on browser.
i. What is node type of element having id “form-content”.
ii. Show node type of element having id “lastName” and its child node.
iii. Update child node of element having id “lastName”.
iv. Get First and last child of id “main-content”.
v. Get next and previous siblings of id “lastName”.
vi. Get parent node and node type of element having id “email”
*/
console.log(document.getElementById('form-content').nodeType);
var lastName = document.getElementById('lastName');
console.log(lastName.nodeType,lastName.childNodes)
lastName.childNodes[0].nodeValue = "Last Name : Khokhar"

var mainContentFirstChild = mainContent.firstChild;
 console.log(mainContentFirstChild);
 var mainContentLastChild = mainContent.lastChild;
 console.log(mainContentLastChild);
 var lastNameNextSibling = lastName.nextSibling;
 console.log(lastNameNextSibling);
 var lastNameLastSibling = lastName.previousSibling
 console.log(lastNameLastSibling);
 var email = document.getElementById('email')
console.log(email.parentNode)
console.log(email.nodeType)