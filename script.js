'use strict'

function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors']
    return moves[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // If player chooses rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return ('You Lose! Paper Beats Rock')
        } else if (computerSelection === 'scissors') {
            return ('You Win! Rock beats Scissors')
        } else {
            return (`It's a Tie!`)
        }
    }
    // If player chooses paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return ('You Lose! Scissors beat Paper')
        } else if (computerSelection === 'rock') {
            return ('You Win! Paper beats Rock')
        } else {
            return (`It's a Tie!`)
        }
    }
    // If player chooses scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return ('You Lose! Rock beats Scissors')
        } else if (computerSelection === 'paper') {
            return ('You Win! Scissors beats Paper')
        } else {
            return (`It's a Tie!`)
        }
    }


}