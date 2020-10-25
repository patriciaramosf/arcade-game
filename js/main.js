let currentGame;
let currentCharacter;
let obstaclesFrequency = 0;
const canvas = document.getElementById('canvas').getContext('2d');
const gameBoard = document.getElementById('gameBoard');
const gameIntro = document.getElementById('gameIntro');
gameBoard.style.display = 'none'

document.getElementById('btn-start').onclick = () => startGame();

document.onkeydown = (e) => {
    let whereToGo = e.key;
    currentGame.character.moveCharacter(whereToGo);
}

function startGame(){
    gameIntro.style.display = 'none'
    gameBoard.style.display = 'block'
    currentGame = new Game();
    currentCharacter = new Character();
    currentGame.character = currentCharacter;
    currentGame.character.drawCharacter();
    updateCanvas();
}
function updateCanvas(){
    canvas.clearRect(0, 0, 500, 600);
    currentGame.character.drawCharacter();
}