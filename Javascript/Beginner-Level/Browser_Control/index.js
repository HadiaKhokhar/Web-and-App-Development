// BROWSER CONTROL ON APPLE  AND TERE WEBSITE

var whereWeAt = window.location.href;
console.log(whereWeAt); 
// Output: the full URL of the current page. 'www.apple.com/'

var theDomain = window.location.hostname;
console.log(theDomain); 
// Output: Domain name like 'www.apple.com'

var thePath = window.location.pathname;
console.log(thePath); 
// Output: Path like '/iphone-16-pro/' at the home page it's '/'

var theAnchor = window.location.hash;
console.log(theAnchor); 
// Output: The anchor part of the URL like '#benefits-section'

window.location.href = "https://www.facebook.com";
window.location.assign("https://www.facebook.com");
// Output of both: This will redirect the browser to the specified URL. facebook (saves the histry)
window.location.href = 'https://hadiakhokhar.github.io/Tere/#works-section';
// Output: This takes you directly to works-section on Tere.

var currentSite = window.location.hostname; // 'hadiakhokhar.github.io'
var destination = "https://" + currentSite + "/Tere#benefits-section";
window.location.href = destination;

var currentSite = window.location.hostname;
var currentPath = window.location.pathname;
var destination = "http://" + currentSite + currentPath + "#humidifier";
window.location.href = destination;

// PTBN:  Alternative to window.location.href: You can also use document.URL to get the current URL.//

window.location.replace("http://www.example.com/newpage.html"); // You can use window.location.replace() to navigate to a new page without adding the current page to the browser’s history.

window.history.back();  // Goes back one page.
window.history.forward();  // Goes forward one page.

window.location.reload(); //If no argument is provided, the page will reload based on the cache settings (default behavior is similar to false).
window.location.reload(true); //This forces the browser to reload the page from the server, ignoring the cache.
window.location.reload(false); //This reloads the page from the browser's cache if available.


history.go(-3);  // Go back three pages
history.go(2);   // Go forward two pages

var whereUserCameFrom = document.referrer;
console.log(whereUserCameFrom); // Outputs the URL of the previous page if a link was clicked to arrive at the current page.
// This will return an empty string "" if the user navigated via a bookmark or entered the URL directly in the browser address bar.


// var newWindow =  window.open();
// // var content = "<h1>Hey I'm a new Window</h1>"
// // newWindow.document.write(content)
// newWindow.close()
var newWindow =  window.open("https://www.amazon.com");;
newWindow.location.href("https://www.amazon.com");;
newwindow.close()
var monkeyWindow = window.open(" ","win1","width=300,height=300,left=200,top=200");

function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100,height=100");
    if (testPop === null) {
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}
