let currentGame;
let currentCharacter;
let obstaclesFrequency = 0;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
const gameBoard = document.getElementById('gameBoard');
const gameIntro = document.getElementById('gameIntro');
gameBoard.style.display = 'none'

document.getElementById('btn-start').onclick = () => startGame();

document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.character.moveCharacter(whereToGo);
}

const canvasBackground = new Background (canvas, ctx);

function updateCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasBackground.draw();
    currentGame.character.drawCharacter();
    requestAnimationFrame(updateCanvas)
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
