// document.querySelector("h1").innerHTML = "Good Bye, World";

//  You can navigate and manipulate the DOM using properties like parentNode, childNodes, nextSibling, and previousSibling.
//document.querySelector('.link').parentElement   //Output: <li class=​"list">​…​</li>​
//document.querySelector('.list-group').childNodes  //Output:NodeList(7) [text, li.list, text, li.list, text, li.list, text]
//document.querySelector('.list').previousElementSibling  //Output: null

// var heading =  document.firstElementChild.children[1].firstElementChild ;

// heading.innerHTML = "World";
// heading.style.color = 'yellow';
// document.querySelector("ul").style.textAlign = "center";
// document.querySelector("input").click();

// document.querySelector("ul")  
///////// This going to select the first ul only
// document.querySelectorAll("li")  
///////// This going to select all li in the document and will return a array of list but you cann't applay style in it you have to do document.querySelectorAll("li")[0] for it
document.querySelectorAll("li").length;
document.getElementById("btn").innerHTML = "Click Here";


// How to acces the class list o f an elemnt and adding and removind list fro it
document.querySelector("ul").classList // outp[ut the lists with class name
document.querySelector("#btn").classList.add("pink")
document.querySelectorAll(".list a")[1].classList.remove("link")
document.querySelector("a").classList.toggle("pink")

// Adding literal HTML to a documnet 
document.querySelector("h1").innerHTML = "Earth is Flat"; 
document.querySelector("h1").innerText = "Earth is Flat";
//Both produce the same results but the with innerHTML You can add Tags
document.querySelector("h1").innerHTML
document.querySelector("h1").innerHTML = "<b>Earth is Flat</b>"; 

// Setting Attributes through JS
document.querySelector("a").attributes ///give list of applied attributes 
document.querySelector("a").getAttribute("href"); //give the value of pass in attribute
document.querySelector("a").setAttribute("href" , "www.bing.com"); // changing the attributes value 

/* Since childNodes includes text nodes, you may encounter a situation where you want to skip over them and only access element nodes. You can use nodeType to check if a node is an element.
*/
var divCalArray = document.getElementById("cal").childNodes;
for (var i = 0; i < divCalArray.length; i++) {
  if (divCalArray[i].nodeType === 1) {  // Node type 1 is an element and text node type is 3
    console.log(divCalArray[i].innerHTML);
  }
}


// Once you have the collection of child nodes, you can loop through them and check for a specific type of node, such as images (<img>). In the example, the code counts the number of images within a div.
var parentNode = document.getElementById("d1");
var nodeList = parentNode.childNodes;
var howManyKids = nodeList.length;  // Gets the number of child nodes

var numberPics = 0;
for (var i = 0; i < howManyKids; i++) {
  if (nodeList[i].nodeName.toLowerCase() === "img") {
    numberPics++;  // Increments the image-counter if the node is an <img>
  }
}

// DOM Methods for Handling Attributes
 
// hasAttribute(): Checks if an element has a specific attribute.
var target = document.getElementById("btn");
var hasClass = target.hasAttribute("id");
console.log(hasClass); // true or false

//getAttribute(): Retrieves the value of a specific attribute.
var targetParent = document.getElementById("d1");
var target1 = targetParent.childNodes[3];
var classValue = target1.getAttribute("src");
console.log(classValue);

// setAttribute(): Sets or updates an attribute value for an element.
target1.setAttribute("src","Images/flower");
console.log(target1.getAttribute("src"));


// Check if the link has a 'target' attribute
var link = document.getElementById("link1");
console.log(link.hasAttribute("target")); // true

// Get the 'href' attribute
var hrefValue = link.getAttribute("href");
console.log(hrefValue); // "http://example.com"

// Change the 'href' attribute to a new URL
link.setAttribute("href", "http://anotherexample.com");
console.log(link.getAttribute("href")); // "http://anotherexample.com"


//The DOM:Attribute names and values
var link = document.getElementById("link1");
var linkArt = link.attributes //{0: id, 1: href, 2: target, id: id, href: href, target: target, length: 3}
//linkArt[1]                  Output: href=​"http:​/​/​anotherexample.com"
//linkArt[1].nodeName         Output: 'href'
//linkArt[1].nodeValue        Output: 'http://anotherexample.com'



//The DOM: Adding Nodes
var unList = document.getElementById("un-list");
var newContent = document.createDocumentFragment();;
for (var i = 1 ; i <= 10; i++){
  var listItem =  document.createElement("li") ; 
  var listContent = document.createTextNode(`list ${i}`);
  listItem.appendChild(listContent);
  newContent.appendChild(listItem)
}
unList.appendChild(newContent);

// Node Insertion and Removal

// Adding Before the element 
var unListFChild = unList.firstChild;
var newList  = document.createElement("li");
newList.appendChild(document.createTextNode("New List Item Add before the first list item"));
unList.insertBefore(newList,unListFChild)
 

// Adding After the element

var unListLChild = unList.children[4];
var newList2  = document.createElement("li");
newList2.appendChild(document.createTextNode("New List Item Add after the 5th list item"));
unList.insertBefore(newList2,unListLChild.nextSibling)

// Deleting an element

var listToRemove = unList.children[3];
unList.removeChild(listToRemove);