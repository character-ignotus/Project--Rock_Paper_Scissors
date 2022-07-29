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
const rules = document.createElement('div');
const roundOutcome = document.createElement('div');
const startBtn = document.createElement('button');
const playAgainBtn = document.createElement('button');
const computerPaperBtn = document.querySelector('.paper.computer');
const computerScissorsBtn = document.querySelector('.scissors.computer');
const computerRockBtn = document.querySelector('.rock.computer');
const computerImg = document.querySelector('.ImageOfComputer');
const userImg = document.querySelector('.ImageOfUser');
const playerBtnsSelection = document.querySelectorAll('.sub.four div');

// Set element's styles
playerChoice.setAttribute('style', 'font-style: italic; color: #f3f1d2;');
computerChoice.setAttribute('style', 'font-style: italic; color: #f3f1d2;');
rules.setAttribute('style', 'font-size: 24px; font-family: Roboto, sans-serif; font-weight: 900;')
playerButtons.classList.add('invisible');
computerButtons.classList.add('invisible');
startBtn.classList.add('Btn');
playAgainBtn.classList.add('Btn');
playAgainBtn.classList.add('invisible');

// Set element's text
startBtn.textContent = 'START GAME';
playAgainBtn.textContent = 'PLAY AGAIN';
rules.textContent = 'First to reach 5 points wins!';

// Insert elements in DOM
outcome.appendChild(startBtn);
subContainer2.insertBefore(rules, playerButtons);
subContainer2.insertBefore(playAgainBtn, playerButtons);

// Add Event Listeners
startBtn.addEventListener('click', () => {
    playerButtons.classList.remove('invisible');
    computerButtons.classList.remove('invisible');
    playerButtons.classList.add('visible');
    computerButtons.classList.add('visible');
    outcome.removeChild(startBtn);
    subContainer2.removeChild(rules);
});

paperBtn.addEventListener('mousedown', () => {
    paperBtn.setAttribute('id', 'mouseDown');
    let playerSelection = 1;
    playRound(playerSelection, computer = computerSelection());
});

scissorsBtn.addEventListener('mousedown', () => {
    scissorsBtn.setAttribute('id', 'mouseDown');
    let playerSelection = 2;
    playRound(playerSelection, computer = computerSelection());
});

rockBtn.addEventListener('mousedown', () => {
    rockBtn.setAttribute('id', 'mouseDown');
    let playerSelection = 3;
    playRound(playerSelection, computer = computerSelection());
});

playerBtnsSelection.forEach((button) => {
    button.addEventListener('mouseup', () => {
        button.removeAttribute('id', 'mouseDown');
    });

    button.addEventListener('mouseenter', () => {
        button.setAttribute('id', 'mouseEnter');
    });

    button.addEventListener('mouseleave', () => {
        button.removeAttribute('id', 'mouseEnter');
    });
});

// Random number function between 1 & 3
function computerSelection() {                                                                                  
    return Math.floor(Math.random() * 3) + 1;                                                                   
}   
  
// Evaluates player & computer selection
function playRound(player, computer) {                                                                                                    
    if ((player == 1 || player == 3) && (computer == 1 || computer == 3)) {                                         
        Combination1(player, computer);                                                                                 
    } else if ((player == 1 || player == 2) && (computer == 1 || computer == 2)) {                              
        Combination2(player, computer);                                                                               
    } else if ((player == 2 || player == 3) && (computer == 2 || computer == 3)) {                                                                                                 
        Combination3(player, computer);                                                                                                                                                   
    }                                                                                                                                                                                                    
}

// Stores current User & computer scores
let user = 0;                                                                                                   
let program = 0; 

// Stores current round
let round = 0;                                                                                              

// Determines round winner based on the given combination of there choices                                                                                                      
function Combination1(userChoice, programChoice) {                                                           
    if (userChoice == 1 && programChoice == 3) {                                                                                                
        uS = 'paper';
        pS = 'rock';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent =  `${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserPaper');
        computerImg.setAttribute('id', 'ComputerRock');
        computerRockBtn.setAttribute('id', 'computerFeedback');
    } else if (userChoice == 3 && programChoice == 1) {
        uS = 'rock';
        pS = 'paper'; 
        playerChoice.textContent =  `${uS}`;
        computerChoice.textContent =  `${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserRock');
        computerImg.setAttribute('id', 'ComputerPaper');
        computerPaperBtn.setAttribute('id', 'computerFeedback');
    } else if (userChoice == 1 && programChoice == 1) {
        uS = 'paper';
        pS = 'paper';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent =  `${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserPaper');
        computerImg.setAttribute('id', 'ComputerPaper');
        computerPaperBtn.setAttribute('id', 'computerFeedback');
    } else if (userChoice == 3 && programChoice == 3) {
        uS = 'rock';
        pS = 'rock';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent =  `${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserRock');
        computerImg.setAttribute('id', 'ComputerRock');
        computerRockBtn.setAttribute('id', 'computerFeedback'); 
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

// Determines round winner based on the given combination of there choices   
function Combination2(userChoice, programChoice) {                                                             
    if (userChoice == 1 && programChoice == 2) {                                                                                               
        uS = 'paper';
        pS = 'scissors';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserPaper');
        computerImg.setAttribute('id', 'ComputerScissors');
        computerScissorsBtn.setAttribute('id', 'computerFeedback'); 
    } else if (userChoice == 2 && programChoice == 1) {
        uS = 'scissors';
        pS = 'paper';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserScissors');
        computerImg.setAttribute('id', 'ComputerPaper');
        computerPaperBtn.setAttribute('id', 'computerFeedback'); 
    } else if (userChoice == 1 && programChoice == 1) {
        uS = 'paper';
        pS = 'paper';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserPaper');
        computerImg.setAttribute('id', 'ComputerPaper');
        computerPaperBtn.setAttribute('id', 'computerFeedback'); 
    } else if (userChoice == 2 && programChoice == 2) {
        uS = 'scissors';
        pS = 'scissors';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserScissors');
        computerImg.setAttribute('id', 'ComputerScissors');
        computerScissorsBtn.setAttribute('id', 'computerFeedback'); 
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

// Determines round winner based on the given combination of there choices   
function Combination3(userChoice, programChoice) {                                                             
    if (userChoice == 2 && programChoice == 3) {                                                                    
        uS = 'scissors';
        pS = 'rock';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserScissors');
        computerImg.setAttribute('id', 'ComputerRock');
        computerRockBtn.setAttribute('id', 'computerFeedback'); 
    } else if (userChoice == 3 && programChoice == 2) {
        uS = 'rock';
        pS = 'scissors';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserRock');
        computerImg.setAttribute('id', 'ComputerScissors');
        computerScissorsBtn.setAttribute('id', 'computerFeedback'); 
    } else if (userChoice == 2 && programChoice == 2) {
        uS = 'scissors';
        pS = 'scissors';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserScissors');
        computerImg.setAttribute('id', 'ComputerScissors');
        computerScissorsBtn.setAttribute('id', 'computerFeedback');  
    } else if (userChoice == 3 && programChoice == 3) {
        uS = 'rock';
        pS = 'rock';
        playerChoice.textContent = ` ${uS}`;
        computerChoice.textContent = ` ${pS}`;

        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');
        computerRockBtn.removeAttribute('id');
        computerPaperBtn.removeAttribute('id');
        computerScissorsBtn.removeAttribute('id');

        userImg.setAttribute('id', 'UserRock');
        computerImg.setAttribute('id', 'ComputerRock');
        computerRockBtn.setAttribute('id', 'computerFeedback');    
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
                                                                                                                
// Determines the winner of the game
function winnerDeclaration (currentUserScore, currentProgramScore) {
    if (currentUserScore == 5) {
        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');

        userImg.setAttribute('id', 'UserWinner');
        computerImg.setAttribute('id', 'ComputerLoser');

        playerButtons.classList.remove('visible');
        computerButtons.classList.remove('visible');
        playerButtons.classList.add('invisible');
        computerButtons.classList.add('invisible');
        outcome.setAttribute('id', 'outcomeSize');
        outcome.textContent = 'You win the game! Computer has been annihilated!';
        playAgainBtn.classList.remove('invisible');
        playAgainBtn.classList.add('visible');

        subContainer2.insertBefore(rules, playAgainBtn);

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

            userImg.removeAttribute('id');
            computerImg.removeAttribute('id');

            computerRockBtn.removeAttribute('id');
            computerPaperBtn.removeAttribute('id');
            computerScissorsBtn.removeAttribute('id');
    
            userImg.setAttribute('id', 'imgUser');
            computerImg.setAttribute('id', 'imgComputer');

            subContainer2.removeChild(rules);
        });
    } else if (currentProgramScore == 5) {
        userImg.removeAttribute('id');
        computerImg.removeAttribute('id');

        userImg.setAttribute('id', 'UserLoser');
        computerImg.setAttribute('id', 'ComputerWinner');

        playerButtons.classList.remove('visible');
        computerButtons.classList.remove('visible');
        playerButtons.classList.add('invisible');
        computerButtons.classList.add('invisible'); 
        outcome.setAttribute('id', 'outcomeSize');      
        outcome.textContent = 'You lose! Computer has annihilated you!';
        playAgainBtn.classList.remove('invisible');
        playAgainBtn.classList.add('visible');

        subContainer2.insertBefore(rules, playAgainBtn);

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

            userImg.removeAttribute('id');
            computerImg.removeAttribute('id');

            computerRockBtn.removeAttribute('id');
            computerPaperBtn.removeAttribute('id');
            computerScissorsBtn.removeAttribute('id');
    
            userImg.setAttribute('id', 'imgUser');
            computerImg.setAttribute('id', 'imgComputer');

            subContainer2.removeChild(rules);
        });
    }
}










