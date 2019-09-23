let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function winRound(playerSelection, computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
}

function loseRound(playerSelection, computerSelection) {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
}

function startGame(playerSelection, computerSelection) {
    let results;
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