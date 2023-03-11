'use strict'

function newRoundMessage(newMsg) {
    let currentMessage = document.querySelector("#current-round")
    currentMessage.textContent = "Current Round: " + newMsg
}

function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors']
    return moves[Math.floor(Math.random() * 3)]
}

function playerWinsRound(scores) {
    let playerScore = document.querySelector("#player-score")
    playerScore.textContent = scores[0] + 1
}

function computerWinsRound(scores) {
    let computerScore = document.querySelector("#computer-score")
    computerScore.textContent = scores[1] + 1
}

function chooseMove() {
    playRound(this.getAttribute("id"))
}

function activateButtons () {
    let moves = document.querySelectorAll(".button");
    moves.forEach(function(move) {
        move.addEventListener('click', chooseMove);
    });
}

function disableButtons () {
    let moves = document.querySelectorAll(".button");
    moves.forEach(function(move) {
        move.removeEventListener('click', chooseMove);
    });
}

function newGame () {
    scores = [0, 0]
    document.querySelector("#computer-score").textContent = 0;
    document.querySelector("#player-score").textContent = 0;
    activateButtons();
    newRoundMessage('-------');
    let gameResult = document.querySelector(".winner");

        gameResult.textContent = '-------';

}


// Index 0: Player
// Index 1: Computer
let scores = [0, 0];

function playRound(playerSelection, computerSelection = getComputerChoice()) {

    // If player chooses rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            newRoundMessage('You Lose! Paper Beats Rock');
            computerWinsRound(scores);
            scores[1]++;

        } else if (computerSelection === 'scissors') {
            newRoundMessage('You Win! Rock beats Scissors');
            playerWinsRound(scores);
            scores[0]++;

        } else {
            newRoundMessage(`It's a Tie!`);

        }
    }
    // If player chooses paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            newRoundMessage('You Lose! Scissors beat Paper');
            computerWinsRound(scores);
            scores[1]++;
            
        } else if (computerSelection === 'rock') {
            newRoundMessage('You Win! Paper beats Rock');
            playerWinsRound(scores);
            scores[0]++;

        } else {
            newRoundMessage(`It's a Tie!`);
        }
    }
    // If player chooses scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            newRoundMessage('You Lose! Rock beats Scissors');
            computerWinsRound(scores);
            scores[1]++;

        } else if (computerSelection === 'paper') {
            newRoundMessage('You Win! Scissors beats Paper');
            playerWinsRound(scores);
            scores[0]++;

        } else {
            newRoundMessage(`It's a Tie!`);

        }
    }

    if (scores[0] + scores[1] === 5) {
        let gameResult = document.querySelector(".winner");
        // Check scores
            if (scores[0] > scores[1]) {
            gameResult.textContent = 'Player Wins!';
        } else if (scores[1] > scores[0]) {
            gameResult.textContent = 'Computer WIns!';
        } else {
            gameResult.textContent = 'Tie!';
        }
        disableButtons();
        
    }


}

let newGameBtn = document.querySelector('.new-game');
newGameBtn.addEventListener('click', newGame)

newGame();



