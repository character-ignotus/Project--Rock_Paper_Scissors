const paperBtn = document.querySelector('.paper.user');
const scissorsBtn = document.querySelector('.scissors.user');
const rockBtn = document.querySelector('.rock.user');
const roundCounter = document.getElementById('roundCounter');
const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
const computerChoice = document.querySelector('#computer-choice');
const playerChoice = document.querySelector('#user-choice');
const outcome = document.querySelector('.sub.three');
const subContainer2 = document.querySelector('.subContainer.two');
const playerButtons = document.querySelector('.sub.four');
const computerButtons = document.querySelector('.sub.two');
const subOne = document.querySelector('.sub.one');
const subFive= document.querySelector('.sub.five');

playerChoice.setAttribute('style', 'font-style: italic; color: #f3f1d2;');
computerChoice.setAttribute('style', 'font-style: italic; color: #f3f1d2;');

playerButtons.classList.add('invisible');
computerButtons.classList.add('invisible');

const roundOutcome = document.createElement('div');
const startBtn = document.createElement('button');
const playAgainBtn = document.createElement('button');

startBtn.classList.add('Btn');
playAgainBtn.classList.add('Btn');

startBtn.textContent = 'START GAME';
playAgainBtn.textContent = 'PLAY AGAIN';

outcome.appendChild(startBtn);

subContainer2.insertBefore(playAgainBtn, playerButtons);
playAgainBtn.classList.add('invisible');

startBtn.addEventListener('click', () => {
    playerButtons.classList.remove('invisible');
    computerButtons.classList.remove('invisible');
    playerButtons.classList.add('visible');
    computerButtons.classList.add('visible');
    outcome.removeChild(startBtn);
});

paperBtn.addEventListener('mousedown', () => {
    paperBtn.classList.add('mouseDown');
    let playerSelection = 1;
    playRound(playerSelection, computer = computerSelection());
});

        paperBtn.addEventListener('mouseup', () => {
            paperBtn.classList.remove('mouseDown');
        });

        paperBtn.addEventListener('mouseenter', () => {
            paperBtn.classList.add('mouseEnter');
        });

        paperBtn.addEventListener('mouseleave', () => {
            paperBtn.classList.remove('mouseEnter');
        });

scissorsBtn.addEventListener('mousedown', () => {
    scissorsBtn.classList.add('mouseDown');
    let playerSelection = 2;
    playRound(playerSelection, computer = computerSelection());
});

        scissorsBtn.addEventListener('mouseup', () => {
            scissorsBtn.classList.remove('mouseDown');
        });

        scissorsBtn.addEventListener('mouseenter', () => {
            scissorsBtn.classList.add('mouseEnter');
        });

        scissorsBtn.addEventListener('mouseleave', () => {
            scissorsBtn.classList.remove('mouseEnter');
        });

rockBtn.addEventListener('mousedown', () => {
    rockBtn.classList.add('mouseDown');
    let playerSelection = 3;
    playRound(playerSelection, computer = computerSelection());
});

        rockBtn.addEventListener('mouseup', () => {
            rockBtn.classList.remove('mouseDown');
        });

        rockBtn.addEventListener('mouseenter', () => {
            rockBtn.classList.add('mouseEnter');
        });

        rockBtn.addEventListener('mouseleave', () => {
            rockBtn.classList.remove('mouseEnter');
        });



function computerSelection() {                                                                                  
    return Math.floor(Math.random() * 3) + 1;                                                                   
}   

                                                                                                                
function playRound(player, computer) {                                                                                                    
    if ((player == 1 || player == 3) && (computer == 1 || computer == 3)) {                                         
        Combination1(player, computer);                                                                                 
    } else if ((player == 1 || player == 2) && (computer == 1 || computer == 2)) {                              
        Combination2(player, computer);                                                                               
    } else if ((player == 2 || player == 3) && (computer == 2 || computer == 3)) {                                                                                                 
        Combination3(player, computer);                                                                                                                                                   
    }                                                                                                                                                                                                    
}


let user = 0;                                                                                                   
let program = 0; 
let round = 0;                                                                                              

                                                                                                                
function Combination1(userChoice, programChoice) {                                                           

    if (userChoice == 1 && programChoice == 3) {                                                                                                
        uS = 'paper';
        pS = 'rock';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent =  `${pS}`;
    } else if (userChoice == 3 && programChoice == 1) {
        uS = 'rock';
        pS = 'paper'; 
        playerChoice.textContent =  `${uS}`;
        computerChoice.textContent =  `${pS}`;
    } else {}


    if (userChoice == programChoice) {                                                                                          
        outcome.textContent = 'We have a tie this round! Play again';
    } else if (!(userChoice > programChoice)) {
        outcome.textContent = 'User wins this round! Paper beats rock!';
        user++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                         
    } else {
        outcome.textContent = 'Program wins this round! Paper beats rock!';
        program++; 
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                      
    }

    winnerDeclaration(user, program);
}

function Combination2(userChoice, programChoice) {                                                             

    if (userChoice == 1 && programChoice == 2) {                                                                                               
        uS = 'paper';
        pS = 'scissors';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent = ` ${pS}`;
    } else if (userChoice == 2 && programChoice == 1) {
        uS = 'scissors';
        pS = 'paper';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;
    } else {}
    

    if (userChoice == programChoice) {                                                                              
        outcome.textContent = 'We have a tie this round! Play again';
    } else if (userChoice > programChoice) {
        outcome.textContent = 'User wins this round! Scissors cuts paper!';
        user++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                        
    } else {
        outcome.textContent = 'Program wins this round! Scissors cuts paper!';
        program++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                      
    }

    winnerDeclaration(user, program);
}

function Combination3(userChoice, programChoice) {                                                             

    if (userChoice == 2 && programChoice == 3) {                                                                    
        uS = 'scissors';
        pS = 'rock';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;
    } else if (userChoice == 3 && programChoice == 2) {
        uS = 'rock';
        pS = 'scissors';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;
    } else {}
        

    if (userChoice == programChoice) {                                                                             
        outcome.textContent = 'We have a tie this round! Play again';
    } else if (userChoice > programChoice) {
        outcome.textContent = 'User wins this round! Rock beats scissors!';
        user++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                        
    } else {
        outcome.textContent = 'Program wins this round! Rock beats scissors!';
        program++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                     
    }

    winnerDeclaration(user, program);
}
                                                                                                                

function winnerDeclaration (currentUserScore, currentProgramScore) {
    if (currentUserScore == 5) {
        playerButtons.classList.remove('visible');
        computerButtons.classList.remove('visible');
        playerButtons.classList.add('invisible');
        computerButtons.classList.add('invisible');
        outcome.setAttribute('id', 'outcomeSize');
        outcome.textContent = 'You win the game! Computer has been annihilated!';
        playAgainBtn.classList.remove('invisible');
        playAgainBtn.classList.add('visible');

        playAgainBtn.addEventListener('click', () => {
            outcome.textContent = '';
            outcome.removeAttribute('id', 'outcomeSize');

            playerChoice.textContent = '';
            computerChoice.textContent = '';
            roundCounter.textContent = '';
            computerScore.textContent = '';
            userScore.textContent = '';

            user = 0;
            program = 0;
            round = 0;

            playAgainBtn.classList.remove('visible')
            playAgainBtn.classList.add('invisible');
            outcome.classList.remove('outcomeSize');
            playerButtons.classList.remove('invisible');
            computerButtons.classList.remove('invisible');
            playerButtons.classList.add('visible');
            computerButtons.classList.add('visible');
        });
    } else if (currentProgramScore == 5) {
        playerButtons.classList.remove('visible');
        computerButtons.classList.remove('visible');
        playerButtons.classList.add('invisible');
        computerButtons.classList.add('invisible'); 
        outcome.setAttribute('id', 'outcomeSize');      
        outcome.textContent = 'You lose! Computer has annihilated you!';
        playAgainBtn.classList.remove('invisible');
        playAgainBtn.classList.add('visible');

        playAgainBtn.addEventListener('click', () => {
            outcome.textContent = '';
            outcome.removeAttribute('id', 'outcomeSize');

            playerChoice.textContent = '';
            computerChoice.textContent = '';
            roundCounter.textContent = '';
            computerScore.textContent = '';
            userScore.textContent = '';

            user = 0;
            program = 0;
            round = 0;

            playAgainBtn.classList.remove('visible')
            playAgainBtn.classList.add('invisible');

            playerButtons.classList.remove('invisible');
            computerButtons.classList.remove('invisible');
            playerButtons.classList.add('visible');
            computerButtons.classList.add('visible');
        });
    }
}










