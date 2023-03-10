'use strict'

function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors']
    return moves[Math.floor(Math.random() * 3)]
}