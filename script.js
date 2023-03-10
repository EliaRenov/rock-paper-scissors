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
            console.log('You Lose! Paper Beats Rock')
            return 1
        } else if (computerSelection === 'scissors') {
            console.log('You Win! Rock beats Scissors')
            return 0
        } else {
            console.log(`It's a Tie!`)

        }
    }
    // If player chooses paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log('You Lose! Scissors beat Paper')
            return 1
        } else if (computerSelection === 'rock') {
            console.log('You Win! Paper beats Rock')
            return 0
        } else {
            console.log(`It's a Tie!`)

        }
    }
    // If player chooses scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors')
            return 1
        } else if (computerSelection === 'paper') {
            console.log('You Win! Scissors beats Paper')
            return 0
        } else {
            console.log(`It's a Tie!`)

        }
    }
}

function game() {
    // Score at index 0: Player
    // Score at index 1: Computer
    let scores = [0, 0]

    // Loop iterates 5 times, meaning 5 rounds.
    for (let i = 0; i < 5; i++) {
        let playerMove = prompt('What move do you choose?')
        let winner = playRound(playerMove, getComputerChoice())
        scores[winner]++
    }
    if (scores[0] > scores[1]) {
        console.log(`PLAYER WINS THE GAME!`)
    } else if (scores[1] > scores[0]) {
        console.log(`COMPUTER WINS THE GAME!`)
    } else {
        console.log(`THE GAME ENDS IN TIE`)
    }

}