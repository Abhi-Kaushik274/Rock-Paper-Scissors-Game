const buttons = document.querySelectorAll('button');
const ReloadBtn = document.getElementById('Reload');
const userScoreElement = document.getElementById('user-score');
const comScoreElement = document.getElementById('Com-score');
let computerSelection;
let playerSelection; // Global variable declaration
let userScore = 0;
let comScore = 0;

//Audio Click Effects//
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

//Click and Result Event//
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = ComputerPlay();
        console.log('User Choose!', playerSelection, 'Computer Choose!', computerSelection);
        const result = PlayRound(playerSelection, computerSelection);
        updateScore(result);
        //updateScore(comScore, userScore, result)
    });
});

//Reload Button//
ReloadBtn.addEventListener('click', () => {
    window.location.reload();
});


//Update Score Function//
function updateScore(result) {
    const resultText = document.querySelector('#result');
    resultText.textContent = result;
    
    if (result.includes('You lose!')) {
        comScore++;
        comScoreElement.textContent = comScore;
    }
    else if (result.includes('You win!')) {
        userScore++;
        userScoreElement.textContent = userScore;
    }
    else if (result.includes('It\'s a tie!')) {
        return;
    }
}


function ComputerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return 'Rock';
    }
    else if (randomNumber === 1){
        return 'Paper';
    }
    else if (randomNumber === 2){
        return 'Scissor';
    }
}

function PlayRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'It\'s a tie!';
    }
    else if (playerSelection === 'Rock'){
        if (computerSelection === 'Paper'){
            return 'You lose! Paper beats Rock';
        }
        else if (computerSelection === 'Scissor'){
            return 'You win! Rock beats Scissor';
        }
    }
    else if (playerSelection === 'Paper'){
        if (computerSelection === 'Scissor'){
            return 'You lose! Scissor beats Paper';
        }
        else if (computerSelection === 'Rock'){
            return 'You win! Paper beats Rock';
        }
    }
    else if (playerSelection === 'Scissor'){
        if (computerSelection === 'Rock'){
            return 'You lose! Rock beats Scissor';
        }
        else if (computerSelection === 'Paper'){
            return 'You win! Scissor beats Paper';
        }
    }
    else {
        return 'Invalid Selection';
    }
}