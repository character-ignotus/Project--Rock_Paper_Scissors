function computerSelection() {                                                                                  // A FUNCTION THAT RETURNS A RANDOM INTEGER BETWEEN 1 & 3
    return Math.floor(Math.random() * 3) + 1;                                                                   
}


function playerSelection() {                                                                                    // A FUNCTION THAT TAKES THE USER'S INPUT  
    let userInput = prompt(`Enter your warrior of choice: "rock", "paper" or "scissors"`).toLocaleLowerCase();      // 1. The user inputs there choice. Choice is not case sensitive

    if (userInput == 'paper') {                                                                                     // 2. User's choice is converted to an integer representing the given input choice
        return 1;
    } else if (userInput == 'scissors') {                                                                               // Each integer between 1 & 3 represents one of the three input choices:
        return 2;                                                                                                           // - 1 is paper
    } else if (userInput == 'rock') {                                                                                       // - 2 is scissors                                                
        return 3;                                                                                                           // - 3 is rock
    } else {}
}                                                                                                               
                                                                                                                // A FUNCTION THAT TAKES BOTH THE USER & THE COMPUTER'S CHOICES & DETERMINES WICH COMBINATION FUNCTION TO INITIALIZE
function playRound(player = playerSelection(), computer = computerSelection()) {                                    // The Combination functions are used to determine who wins the round                                                                  
    if ((player == 1 || player == 3) && (computer == 1 || computer == 3)) {                                         // There are three possible combinations:
        Combination1(player, computer);                                                                                 // - Combination1: rock-rock, paper-paper, paper-rock or rock-paper choice combination
    } else if ((player == 1 || player == 2) && (computer == 1 || computer == 2)) {                              
        Combination2(player, computer);                                                                                 // - Combination2: paper-paper, scissors-scissors, paper-scissors or scissors-paper choice combination
    } else if ((player == 2 || player == 3) && (computer == 2 || computer == 3)) {                                                                                                 
        Combination3(player, computer);                                                                                 // - Combination3: scissors-scissors, rock-rock, scissors-rock or rock-scissors choice combination                                                                    
    } else {                                                                                                    
        alert('Wrong Input! Enter one of the listed choices');                                                      // If the user has entered an incorrect input a message alerts about that, and then the user needs to enter a valid input
        playRound();
    }                                                                                                                                                                                                                      
}


let user = 0;                                                                                                   // Variable for storing the user's score
let program = 0;                                                                                                // Variable for storing the computer's score

                                                                                                                
function Combination1(userChoice, programChoice) {                                                              //FUNCTION FOR COMBINATION1

    if (userChoice == 1 && programChoice == 3) {                                                                    // 1. An If Else statement is initialized to determine both the user & the computer's choices                                   
        uS = 'paper';
        pS = 'rock';
        console.log(`USER HAS CHOSEN: ${uS}`);                                                                          // The user & the computer's choices are printed out
        console.log(`PROGRAM HAS CHOSEN: ${pS}`);
    } else if (userChoice == 3 && programChoice == 1) {
        uS = 'rock';
        pS = 'paper';
        console.log(`USER HAS CHOSEN: ${uS}`);                                                                          // The user & the computer's choices are printed out
        console.log(`PROGRAM HAS CHOSEN: ${pS}`);
    } else {}


    if (userChoice == programChoice) {                                                                              // 2. An If Else statement to evaluate the winner of the round
        alert('We have a tie this round! Play again');                                                                  // If both the user & the computer's choices are the same then the round is played again until a winner is determined
        playRound();
    } else if (!(userChoice > programChoice)) {
        console.log('User wins this round! Paper beats rock!');
        ++user;                                                                                                         // If the user wins, there variable is incremented by one
    } else {
        console.log('Program wins this round! Paper beats rock!');
        ++program;                                                                                                      // If the program wins, there variable is incremented by one
    }
}

function Combination2(userChoice, programChoice) {                                                              //FUNCTION FOR COMBINATION2

    if (userChoice == 1 && programChoice == 2) {                                                                    // 1. An If Else statement is initialized to determine both the user & the computer's choices                                   
        uS = 'paper';
        pS = 'scissors';
        console.log(`USER HAS CHOSEN: ${uS}`);                                                                          // The user & the computer's choices are printed out                                                                 
        console.log(`PROGRAM HAS CHOSEN: ${pS}`);
    } else if (userChoice == 2 && programChoice == 1) {
        uS = 'scissors';
        pS = 'paper';
        console.log(`USER HAS CHOSEN: ${uS}`);                                                                          // The user & the computer's choices are printed out                                                                 
        console.log(`PROGRAM HAS CHOSEN: ${pS}`);
    } else {}
    

    if (userChoice == programChoice) {                                                                              // 2. An If Else statement to evaluate the winner of the round
        alert('We have a tie this round! Play again');                                                                  // If both the user & the computer's choices are the same then the round is played again until a winner is determined
        playRound();
    } else if (userChoice > programChoice) {
        console.log('User wins this round! Scissors beat paper!');
        ++user;                                                                                                         // If the user wins, there variable is incremented by one
    } else {
        console.log('Program wins this round! Scissors beat paper!');
        ++program;                                                                                                      // If the program wins, there variable is incremented by one
    }
}

function Combination3(userChoice, programChoice) {                                                              //FUNCTION FOR COMBINATION3

    if (userChoice == 2 && programChoice == 3) {                                                                    // 1. An If Else statement is initialized to determine both the user & the computer's choices
        uS = 'scissors';
        pS = 'rock';
        console.log(`USER HAS CHOSEN: ${uS}`);                                                                          // The user & the computer's choices are printed out
        console.log(`PROGRAM HAS CHOSEN: ${pS}`);
    } else if (userChoice == 3 && programChoice == 2) {
        uS = 'rock';
        pS = 'scissors';
        console.log(`USER HAS CHOSEN: ${uS}`);                                                                          // The user & the computer's choices are printed out
        console.log(`PROGRAM HAS CHOSEN: ${pS}`);
    } else {}
        

    if (userChoice == programChoice) {                                                                              // 2. An If Else statement to evaluate the winner of the round
        alert('We have a tie this round! Play again');                                                                  // If both the user & the computer's choices are the same then the round is played again until a winner is determined
        playRound();
    } else if (userChoice > programChoice) {
        console.log('User wins this round! Rock beats scissors!');
        ++user;                                                                                                         // If the user wins, there variable is incremented by one
    } else {
        console.log('Program wins this round! Rock beats scissors!');
        ++program;                                                                                                      // If the program wins, there variable is incremented by one
    }
}
                                                                                                                
function game() {                                                                                               // THE GAME FUNCTION IS USED FOR PLAYING TEN ROUNDS OF THE GAME OR LESS DEPENDING ON THE SINGLE ROUND OUTCOME
    for(i=1; i<11; ++i) {                                                                                           // 1. A for loop goes over the playRound function (wich is used to play a single round) a maximum of ten times 

        playRound();

        console.log(`ROUND ${i} SCORE IS --> user: ${user} / program:${program}`);                                  // 2. Printout the user & the computer's scores for each round
        console.log('');

        if (user == 5) {                                                                                            // 3. An If Else statement in the loop to check wheter a result should be declared after ten rounds or earlier
            break;                                                                                                      // - The verification for that is based on the outcomes of the single rounds
        } else if (program == 5) {
            break;
        } else {
            continue;
        }
    }

    if (user > program) {                                                                                           // 4. An If Else statement to check & declare the final winner 
        console.log('USER WINS THE GAME!');
        alert('You win the game! Computer has been annihilate!')
    } else if (user < program) {
        console.log('COMPUTER WINS THE GAME!');
        alert('You lose! Computer has annihilated you!')
    } else {}
}

game();











