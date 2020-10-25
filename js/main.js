const canvas = document.getElementById('canvas').getContext('2d')
const gameBoard = document.getElementById('gameBoard');
const gameIntro = document.getElementById('gameIntro');
gameBoard.style.display = 'none'

document.getElementById('btn-start').onclick = () => startGame();

function startGame(){
    gameIntro.style.display = 'none'
    gameBoard.style.display = 'block'
}