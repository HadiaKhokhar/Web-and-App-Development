/* OBJECTS

----- Accessing properties
----- Adding new properties
----- Creating and using functions with object data
----- Iterating through object properties
----- Deleting a property

Gym Membership Plans Data*/
var plan1 = {
    planName : "Basic",
    pricePerMonth : 20 ,
    accessTiming : "8am - 6pm",
    perTrainerHours : 1,
    classes : "None",
    discountMonths : [1,7]
}
var plan2 = {
    planName : "Standard",
    pricePerMonth : 35,
    accessTiming : "24/7",
    perTrainerHours : 	2 ,
    classes : "	2 Classes/Week",
    discountMonths : [6, 12]
}
var plan3 = {
    planName : "Premium",
    pricePerMonth : 60,
    accessTiming : "24/7",
    perTrainerHours : 4 ,
    classes : "	Unlimited",
    discountMonths : [3, 6, 12]
}
var plan4 = {
    planName : "VIP",
    pricePerMonth : 100,
    accessTiming : "24/7",
    perTrainerHours :8 ,
    classes : "Unlimited",
    discountMonths :[1, 6, 12],
    yearlyCost : function(){
            return this.pricePerMonth * 12
    }
}
plan4.pricePerMonth = 110


/* Task 1: Alert Gym Membership Details Create an alert that displays the price and name of the premiumPlan object. */
alert(`The cost of the ${plan3.planName} plan is $${plan3.pricePerMonth} per month.`);

/* Task 2: Function to Calculate Discounted Price Create a function called calculateDiscountPrice that takes a plan and a month as arguments. The function  should check if the month is in the discountMonths array of the plan and apply a 20% discount to the price.*/
function calculateDiscountPrice(plan , month){
    if (plan.discountMonths.includes(month)){
        return plan.pricePerMonth - (plan.pricePerMonth * 0.20);
    }
    else{
        return plan.pricePerMonth;
    }
}
var discountedPrice = calculateDiscountPrice(plan3,6); // Discount for June
console.log(`The Original Price of ${plan3.planName} is ${plan3.pricePerMonth} After  Discounted Price: ${discountedPrice}` );


/* Task 3: Access Object Properties Access and print the personalTrainerHours and classesIncluded of the premium Plan. */
console.log(`Personal Trainer Hours of the ${plan3.planName} :  ${plan3.perTrainerHours} per month`);
console.log(`Classes Included of the ${plan3.planName} :  ${plan3.classes}`);

/* Task 4: Add a new property called signupFee to each plan, then print it. For example, for the basicPlan, the signup fee is $50.. */
plan1.signUpFee = 50;
plan2.signUpFee = 60;
plan3.signUpFee = 70;
plan4.signUpFee = 80;
console.log(`Sign-up Fee of the ${plan1.planName} :  $${plan1.signUpFee}`);


/* Task 5: Loop Through Properties: Use a for...in loop to iterate over the properties of standardPlan and print each key-value pair javascript */
for (key in plan2){
    console.log(`${key}: ${plan2[key]}`)
}

/* Task 6:  Add a Method to Calculate Yearly Cost Add a method inside each plan that calculates the yearly cost (without a discount) based on the monthly price. */

plan2.yearlyCost = function(){
    return this.pricePerMonth * 12;
}
console.log(`Yearly Cost of the ${plan2.planName} :  $${plan2.yearlyCost()}`);
console.log(`Yearly Cost of the ${plan3.planName} :  $${plan3.yearlyCost()}`);

/* Task 7: Delete classes property from object plan1 */
delete plan1.classes
console.log(plan1.classes)

/* Task 8: Checking if the classes property exist in  object plan2 */
var classPropertyplan2 = "classes" in plan2;
console.log(classPropertyplan2)

// FOR METHODS IN MORE DETAIL
/* Exercise 1: Create a Library System Object
Create a librarySystem object that has the following properties:

name: The name of the library.
books: An array of books (each book is an object with title, author, and isAvailable properties).
A method addBook(book) that adds a book to the library.
A method lendBook(bookTitle) that marks a book as not available.
A method returnBook(bookTitle) that marks a book as available. */
var book1 = {
    title: "1984", 
    author: "George Orwell", 
    isAvailable: true ,
    genre : ["Fiction","Comics","Science Fiction" , "Dystopia"]
}
var book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee", 
    isAvailable: true ,
    genre : ["Fiction", "Young Adult","Historical Fiction","Historical","Novels","Literature"]
}
var book3 = {
    title: "The Kite Runner", 
    author: "Khaled Housenni", 
    isAvailable: true ,
    genre : ["Fiction","Contemporary","Historical Fiction","Historical","Adult","Novels","Literature","Adult Fiction","Literary Fiction"]
}
var book4 = {
    title: "The Silent Patient", 
    author: "Alex Michaelides", 
    isAvailable: true ,
    genre : ["Mystery","Fiction","Contemporary","Adult","Thriller","Crime","Suspense","Mystery Thriller"]
}
var librarySystem = {
    name: "City Library",
    books: [book1, book2, book3],

    addBooks: function(bookobject){
        this.books.push(bookobject)
        console.log(`The Book ${bookobject.title} has been added to the Shelf`)
    },
    lendBook: function(bookTitle){
            var bookObject = this.books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase())
            console.log(bookObject)
            if (bookObject && bookObject.isAvailable){
                bookObject.isAvailable = false;
                console.log(`${bookTitle} has been lent out to you`)
            }
            else{
                console.log(`${bookTitle} is unavailable.`);
            }
    },
    returnBook : function(bookTitle){
        var bookObject = this.books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase())
        if (bookObject && !bookObject.isAvailable ){
            bookObject.isAvailable = true;
            console.log(`Thanks for returning the ${bookTitle}`)
        }
        else if (bookObject == undefined){
            console.log(`Sorry This Book ${bookTitle} is not taken from here`)
        }
        else{
             console.log(`This Book ${bookTitle} is already in our Shelf you must have taken it from another Library`)
        }
    },
    whatsTheGenreOf : function(bookTitle){
        var bookObject = this.books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase());
        if (bookObject){
            console.log(`${bookTitle} is in the following genre(s): ${bookObject.genre.join(", ")}`)
        }
    },
    listOfGenreBooks : function(genre){
        var listOfBook = [];
        for (var i in this.books){
            var book = this.books[i]
            var bookGenreArray = book.genre;
            for (var j in bookGenreArray){
                if (bookGenreArray[j].toLowerCase().includes(genre.toLowerCase())){
                    listOfBook.push(book.title)
                    break;
                }
            } 
        }
        console.log(listOfBook)
        if (listOfBook.length > 0 ){
            console.log(`These are list of Books That Matches the Genre '${genre}': ${listOfBook.join(",")}`)
        }
        else{
            console.log(`We don't have books that That Matches the Genre '${genre}'`)
        }
        
    }
}
// librarySystem.lendBook("The Kite Runner")
// librarySystem.lendBook("The Kite Runner")
librarySystem.addBooks(book4)
// librarySystem.lendBook("The Silent Patient")
// librarySystem.returnBook("Thfe Kite Runner")
// librarySystem.lendBook("The Kite Runner")
// librarySystem.returnBook("1984")
librarySystem.genreBooks("Thriller")
librarySystem.lendBook("the silent patient")
librarySystem.returnBook("1984")
