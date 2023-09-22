
const choiceArray = ["./Img/Hands/Rock.png", "./Img/Hands/Paper.png", "./Img/Hands/Scissors.png"];

var playerSelection;

$("#refresh").css("display", "inline-block");

document.addEventListener('keydown', key => {
    if (key.code === "Enter" && $("#hostLayout").is(":visible"))  roomCreate()});

async function scrollUp(){
    console.log("Boom");
    $("#ts").slideUp(300, function () {
       rolling();
    });;
}

async function rolling(){
    $("#playerSelect").css("display", "block");
    $("#playerChoosing").css("display", "inline-block");
    $("#oppChoosing").css("display", "inline-block");
}

function hostScreen(){
    
}

function opponentChoice(){
    var rng = Math.random();
    if (rng < 0.15) { //tie
        $("#oppChoosing").attr("src", choiceArray[playerSelection]);
        $("#resultScreen").text("It's A Tie!");
        $("#refresh").css("display", "block");
    } 
    else if (rng < 0.67){ //lose
        $("#oppChoosing").attr("src", choiceArray[findLosing(playerSelection)]);
        $("#resultScreen").text("You Lose!");
        $("#refresh").css("display", "block");
    }
    else { //win
        $("#oppChoosing").attr("src", choiceArray[findWinning(playerSelection)]);
        $("#resultScreen").text("You Win!");
        $("#refresh").css("display", "block");
    }
}

function replay(){
    $("#resultScreen").text("");
    $("#refresh").css("display", "none");
    $("#playerChoosing").attr("src", "./Img/Hands/playerSelec.gif");
    $("#oppChoosing").attr("src", "./Img/Hands/oppSelec.gif");
    $("#playerSelect").css("display", "block");
}

function findLosing(playerSelec){
    switch(playerSelec){
        case 0:
            return 2;
        case 1:
            return 0;
        case 2:
            return 1;
    }
}

function findWinning(playerSelec){
    switch(playerSelec){
        case 0:
            return 1;
        case 1:
            return 2;
        case 2:
            return 0;
    }
}

function rockChoice(){
    playerSelection = 0;
    $("#playerSelect").css("display", "none");
    $("#playerChoosing").attr("src", "./Img/Hands/Rock.png");
    opponentChoice();
}

function paperChoice(){
    playerSelection = 1;
    $("#playerSelect").css("display", "none");
    $("#playerChoosing").attr("src", "./Img/Hands/Paper.png");
    opponentChoice();
}

function scissorsChoice(){
    playerSelection = 2;
    $("#playerSelect").css("display", "none");
    $("#playerChoosing").attr("src", "./Img/Hands/Scissors.png");
    opponentChoice();
}
