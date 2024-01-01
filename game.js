var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "green", "blue", "yellow"];
var level = 0;

function nextSequence() {
    level++;
    userPattern = [];
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}

$(".btn").click(function(event) {
    if(level!==0) {
        var userClickedColor = event.target.id;
        userPattern.push(userClickedColor);
        playSound(userClickedColor);
        animatePress(userClickedColor);
        checkAnswer(userPattern[userPattern.length - 1]);
    }
});

$(document).keydown(function() {
    if(level===0) {
        $("h1").text("Level " + level);
        nextSequence();
    }
})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel) {
    if (currentLevel===gamePattern[userPattern.length-1]) {
        if (userPattern.length===level) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    gamePattern = [];
    level = 0;
}
