/* For changing first dice */
var imgRef = document.querySelector('img').src;
var randomNumber1 = Math.ceil((Math.random() * 6));
//alert(randomNumber1);
imgRef = imgRef.slice(0,81);
var imgVar = imgRef.concat("dice",randomNumber1);
var imgOne = imgVar.concat(".png");
document.querySelector('img').src = imgOne;

/* For changing second dice */
var imgRef2 = document.querySelector("img.img2").src
 var randomNumber2 = Math.ceil((Math.random() * 6));
imgRef2 = imgRef2.slice(0,81);
var imgVar2 = imgRef2.concat("dice",randomNumber2);
var imgTwo = imgVar2.concat(".png");
document.querySelector('img.img2').src = imgTwo;

/*for declaring winner*/
function winner (randomNumber1,randomNumber2) {
if (randomNumber1>randomNumber2) {
  document.querySelector('h1').innerText = "Player 1 Wins! ";
  }
else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerText = "Player 2 Wins!";
}
else {
  document.querySelector('h1').innerText = "Draw!";
}
}
winner(randomNumber1,randomNumber2);

/* var randomNumber1  = Math.round(Math.random() * 6);
var imgRef = document.querySelector('img').src;
imgRef = imgRef.slice(0,81);
imgFinalstep1 = imgRef.concat("dice",randomNumber1);
imgFinal = imgFinalstep1.concat(".png");
document.querySelector('img').src = imgFinal;
var dice = "dice";
var imgNumber = dice.concat(randomNumber1,".png"); */
