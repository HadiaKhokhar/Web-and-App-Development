// TODO 1:  Exercise 1: Write a script that logs the full URL of the current page, then logs only the domain name.
var fullUrl = window.location.href;
var domainName = window.location.hostname
console.log('Full URL:', fullUrl);
console.log('Domain Name:', domainName);


// TODO 2 Write a script that dynamically redirects the user to the "about" page of the current site.: 
window.location.href = "/about";


// TODO 03: Create a script that moves the browser to an anchor (#features) on the same page, without hardcoding the domain and path.
var pathName = window.location.pathname
window.location.href  =  `https://${domainName}${pathName}#aboutme` 

// TODO 04: Navigate to a New Page with window.location.assign():
window.location.assign('/entertainment')


// TODO 05: Redirect Without Saving History with window.location.replace():
window.location.replace('/entertainment')


// TODO 06: Reload the Page from the Server:    
window.location.reload(true)

// TODO 07: Write a script that redirects the user to the "about.html" page, but allows them to go back to the current page using the back button.:
window.location.assign('/about.html')

// TODO 08: Write a script that redirects the user to the "contact.html" page and prevents them from returning to the current page using the back button.
window.location.replace('/contact.html')

// TODO 09: Create a script that forces the browser to reload the current page from the server:
window.location.reload(true)

// TODO 10: Write a script that simply reloads the page from the cache.:
window.location.reload(false)
window.location.reload()