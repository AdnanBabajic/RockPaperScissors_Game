var userScore = 0;
var compScore = 0;

function playTheGame(userChoice) {
    var computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0) computerChoice = "Rock";
    else if(computerChoice == 1) computerChoice = "Paper";
    else computerChoice = "Scissors";

    results(userChoice, computerChoice);
}

function results(userChoice, computerChoice) {
    if(userChoice == computerChoice) var text = "It's a draw!";
    else if(userChoice=="Rock" && computerChoice=="Paper") {
        var text = "Users <b>rock</b> loses to Computers <b>paper</b>";
        compScore++;
    }
    else if(userChoice=="Rock" && computerChoice=="Scissors") {
        var text = "Users <b>rock</b> wins against Computers <b>scissors</b>";
        userScore++;
    }
    else if(userChoice=="Paper" && computerChoice=="Rock") {
        var text = "Users <b>paper</b> wins against Computers <b>paper</b>";
        userScore++;
    }
    else if(userChoice=="Paper" && computerChoice=="Scissors") {
        var text = "Users <b>paper</b> loses to Computers <b>scissors</b>";
        compScore++;
    }
    else if(userChoice=="Scissors" && computerChoice=="Rock") {
        var text = "Users <b>Scissors</b> lose to Computers <b>Rock</b>";
        compScore++;
    }
    else if(userChoice=="Scissors" && computerChoice=="Paper") {
        var text = "Users <b>Scissors</b> win against Computers <b>paper</b>";
        userScore++;
    }

    var html = '<p>' + text + '</p>';
    setTimeout(() => {
        document.getElementById("resultText").innerHTML = html;
        document.getElementById("user-score").innerHTML = userScore;
        document.getElementById("comp-score").innerHTML = compScore;
    }, 50);
}

