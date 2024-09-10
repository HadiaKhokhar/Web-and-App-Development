// Radom Number 
function randomNumberGenerator(){
    var randomNumber1 = Math.floor((Math.random()*6) + 1) ;
    return(randomNumber1);
}
// Displaying the Random Number in a dice
function randomDiceNumberGenerator (randomNumber,imgClass){
    for (var i=1 ; i <= 6; i++){
        if (i === randomNumber){
            document.querySelector(imgClass).setAttribute("src", ("images/dice"+ i + ".png") );
            return i;
        } 
         
    }
}
function whoWins(userOne, userTwo){
    switch (true){
        case (userOne === userTwo):
            document.querySelector("h1").innerText = "It's a Tie";
            break;
        case (userOne > userTwo):
            document.querySelector("h1").innerText = "User 1 Wins";
            break;
        default:
            document.querySelector("h1").innerText = "User 2 Wins";
    }

}

if (sessionStorage.getItem("pageRefreshed")) {
    // If the page has been refreshed, run your functions
    var diceOne = randomDiceNumberGenerator(randomNumberGenerator(),".img1");
    var diceTwo  = randomDiceNumberGenerator(randomNumberGenerator(),".img2");
    whoWins(diceOne, diceTwo);
    document.querySelector("h6").innerText = "Reload to Roll Dice again"
} 
else {
    // Set a flag in sessionStorage to indicate the page has been loaded
    sessionStorage.setItem("pageRefreshed", "true");
    // Display a message asking the user to refresh the page
}


    
















































