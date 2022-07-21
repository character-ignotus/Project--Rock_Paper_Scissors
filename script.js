const paperBtn = document.querySelector('.paper.user');
const scissorsBtn = document.querySelector('.scissors.user');
const rockBtn = document.querySelector('.rock.user');
const roundCounter = document.getElementById('roundCounter');
const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
const computerChoice = document.querySelector('.sub.one div div');
const playerChoice = document.querySelector('.sub.five div div');
const outcome = document.querySelector('.sub.three');
const subContainer2 = document.querySelector('.subContainer.two')


const roundOutcome = document.createElement('div');

paperBtn.addEventListener('click', () => {
    let playerSelection = 1;
    playRound(playerSelection, computer = computerSelection());
});

scissorsBtn.addEventListener('click', () => {
    let playerSelection = 2;
    playRound(playerSelection, computer = computerSelection());
});

rockBtn.addEventListener('click', () => {
    let playerSelection = 3;
    playRound(playerSelection, computer = computerSelection());
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


let user = 0;                                                                                                   // Variable for storing the user's score
let program = 0; 
let round = 0;                                                                                               // Variable for storing the computer's score

                                                                                                                
function Combination1(userChoice, programChoice) {                                                              //FUNCTION FOR COMBINATION1

    if (userChoice == 1 && programChoice == 3) {                                                                    // 1. An If Else statement is initialized to determine both the user & the computer's choices                                   
        uS = 'paper';
        pS = 'rock';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent = `${pS}`;
    } else if (userChoice == 3 && programChoice == 1) {
        uS = 'rock';
        pS = 'paper';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent = `${pS}`;
    } else {}


    if (userChoice == programChoice) {                                                                             
        alert('We have a tie this round! Play again');                                                                  
        // roundOutcome.textContent = 'We have a tie this round! Play again';
        // outcome.appendChild(roundOutcome);
        outcome.textContent = 'We have a tie this round! Play again';
    } else if (!(userChoice > programChoice)) {
        // roundOutcome.textContent = 'User wins this round! Paper beats rock!';
        // outcome.appendChild(roundOutcome);
        outcome.textContent = 'User wins this round! Paper beats rock!';
        user++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                         
    } else {
        // roundOutcome.textContent = 'Program wins this round! Paper beats rock!';
        // outcome.appendChild(roundOutcome);
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
        computerChoice.textContent = `${pS}`;
    } else if (userChoice == 2 && programChoice == 1) {
        uS = 'scissors';
        pS = 'paper';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent = `${pS}`;
    } else {}
    

    if (userChoice == programChoice) {                                                                              
        alert('We have a tie this round! Play again');                                                                  
        // roundOutcome.textContent = 'We have a tie this round! Play again';
        // outcome.appendChild(roundOutcome);
        outcome.textContent = 'We have a tie this round! Play again';
    } else if (userChoice > programChoice) {
        // roundOutcome.textContent = 'User wins this round! Scissors cuts paper!';
        // outcome.appendChild(roundOutcome);
        outcome.textContent = 'User wins this round! Scissors cuts paper!';
        user++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                        
    } else {
        // roundOutcome.textContent = 'Program wins this round! Scissors cuts paper!';
        // outcome.appendChild(roundOutcome);
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
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent = `${pS}`;
    } else if (userChoice == 3 && programChoice == 2) {
        uS = 'rock';
        pS = 'scissors';
        playerChoice.textContent = `${uS}`;
        computerChoice.textContent = `${pS}`;
    } else {}
        

    if (userChoice == programChoice) {                                                                             
        alert('We have a tie this round! Play again');                                                                
        // roundOutcome.textContent = 'We have a tie this round! Play again';
        // outcome.appendChild(roundOutcome);
        outcome.textContent = 'We have a tie this round! Play again';
    } else if (userChoice > programChoice) {
        // roundOutcome.textContent = 'User wins this round! Rock beats scissors!';
        // outcome.appendChild(roundOutcome);
        outcome.textContent = 'User wins this round! Rock beats scissors!';
        user++;
        round++;
        roundCounter.textContent = `${round}`;
        computerScore.textContent = `${program}`;
        userScore.textContent = `${user}`;                                                                                                        
    } else {
        // roundOutcome.textContent = 'Program wins this round! Rock beats scissors!';
        // outcome.appendChild(roundOutcome);
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
        outcome.textContent = 'You win the game! Computer has been annihilated!';
    } else if (currentProgramScore == 5) {
        outcome.textContent = 'You lose! Computer has annihilated you!';
    }
}










