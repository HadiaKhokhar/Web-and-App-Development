function test(){

    var a = "3";
    var b = "8";
    
// my code here
    var c = a;
    a = b;
    b = c;


    alert("a is :" + a);
    alert("b is :" + b);


}

test(); 


var tweet = prompt("Enter your tweet:");
var tweetLength = tweet.length;
var total_character = 240;
var remaining_character = total_character - tweetLength
alert("you have written " + tweetLength + " characters and left with "+ remaining_character)
 
var s_tweet = tweet.slice(0,148)
alert(s_tweet)
alert(s_tweet.length) 
