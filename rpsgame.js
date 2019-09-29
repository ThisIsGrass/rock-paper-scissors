function capitalizeMove(move) {
    let capitalizedWord;
    let word = move.trim();

    remainingChar = word.slice(1).toLowerCase();
    firstChar = word.charAt(0).toUpperCase();
    capitalizedWord = firstChar + remainingChar;
    return capitalizedWord;
}

function winRound(playerSelection, computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
}

function loseRound(playerSelection, computerSelection) {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
}

function playRound(playerSelection, computerSelection) {
    let results;
    console.log(playerSelection);
    if(computerSelection == "Rock") {
        switch(playerSelection) {
            case "Rock":
                results = "Tie!"
                break;
            case "Paper":
                results = winRound(playerSelection, computerSelection);
                break;
            case "Scissors":
                results = loseRound(playerSelection, computerSelection);
                break;
            default:
                results = "Wrong value. Please try again."
        }
    } else if(computerSelection == "Paper") {
        switch(playerSelection) {
            case "Paper":
                results = "Tie!"
                break;
            case "Scissors":
                results = winRound(playerSelection, computerSelection);
                break;
            case "Rock":
                results = loseRound(playerSelection, computerSelection);
                break;
            default:
                results = "Wrong value. Please try again."
        }
    } else if(computerSelection == "Scissors") {
        switch(playerSelection) {
            case "Scissors":
                results = "Tie!"
                break;
            case "Rock":
                results = winRound(playerSelection, computerSelection);
                break;
            case "Paper":
                results = loseRound(playerSelection, computerSelection);
                break;
            default:
                results = "Wrong value. Please try again."
        }
    } else {
        results = "Wrong value. Please try again."
    }
    return results;
}

function computerPlay() {
    let randomNum = Math.random() * 100;
    let move;
    switch(true) {
        case randomNum > 66.66 :
            move = "Rock";
            break;
        case randomNum > 33.33 :
            move = "Paper";
            break;
        default : 
            move = "Scissors";                         
    }
    return move;
}

const playerSelection = capitalizeMove(prompt("Rock, Paper, Scissors"));
const computerSelection = computerPlay();
console.log("Computer chose:\n" + computerSelection + "\n");
console.log("Player chose: \n");
console.log(playRound(playerSelection, computerSelection));
