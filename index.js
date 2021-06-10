
//Generating random no for dice1
var randomNo1= Math.floor(Math.random() * 6) + 1; 
var randomDiceImage1 = "dice" + randomNo1 + ".png";
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randomDiceImage1);

//Generating random no for dice2
var randomNo2= Math.floor(Math.random() * 6) + 1; 
var randomDiceImage2 = "dice" + randomNo2 + ".png";
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randomDiceImage2);

//Logic
if(randomNo1>randomNo2){
	document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNo2>randomNo1){
	document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
	document.querySelector("h1").innerHTML = "Draw!";
}