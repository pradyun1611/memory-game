var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "green", "blue", "yellow"];

function randomNumber() {
    return Math.floor(Math.random() * 4);
}

var randomColor = buttonColors[randomNumber()];
gamePattern.push(randomColor);

$("#"+randomColor).fadeOut(100).fadeIn(100);
var sound = new Audio("sounds/" + randomColor + ".mp3");
// sound.play();

var num = 0;
$(".btn").click(function(event) {
    userPattern.push(event.target.id);
});