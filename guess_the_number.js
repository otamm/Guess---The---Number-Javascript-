alert("Does this work?");
alert("Yep.");
var randInt = Math.ceil(Math.random() * 10);
var guess = prompt("Now, guess a number. You've got a 1 in 10 chance of getting it right.");
var name = prompt("And what would be your name?");

if (guess === randInt){
  alert(name + ", you are a WINNEROMFGDISISOCOLLLLLLLMAOOO");
}else{
  alert(name + ", you are a loser, lol LOSEEER LOOOOSEEEER");
}
