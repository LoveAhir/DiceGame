// Dice Value For Player 1

var randomnumber1 = Math.floor((Math.random() * 6) + 1); // random number from 1 to 6

var RandomImage = "dice" + randomnumber1 + ".png";

var RandomImageSource = "images/" + RandomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",RandomImageSource);

// Dice Value for Player 2

var randomnumber2 = Math.floor((Math.random() * 6) + 1);// random number from 1 to 6

var RandomImageSource2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",RandomImageSource2);

// to get the winner btw player 1 and 2

if(randomnumber1 > randomnumber2 ){
    document.querySelector("h1").textContent ="🚩Player 1 Wins!";
}

else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").textContent ="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").textContent ="Draw";
}