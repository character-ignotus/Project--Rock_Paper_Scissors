function computerSelection() {
    return Math.floor(Math.random() * 3) + 1;                                                                   // A function that returns an integer between 1 & 3
}


function playerSelection() {
    let userInput = prompt(`Enter your warrior of choice: "rock", "paper" or "scissors"`).toLocaleLowerCase();  // The user inputs there choice. Choice is not case sensitive

    if (userInput == 'paper') {                                                                                 // User's choice is converted to an integer representing the given input choice
        return 1;
    } else if (userInput == 'scissors') {                                                                       // Each integer between 1 & 3 represents one of the three input choices:
        return 2;                                                                                               // 1 is paper
    } else if (userInput == 'rock') {                                                                           // 2 is scissors                                                
        return 3;                                                                                               // 3 is rock
    } else {
        alert('Wrong input');
        return
    }
}

function playRound(player = playerSelection(), computer = computerSelection()) {                                // A function that takes both the user & the computer's choice & determines wich Combination function to initialize                            
    if ((player == 1 || player == 3) && (computer == 1 || computer == 3)) {                                     // The Combination functions are used to determine who wins & who looses or if its a tie
        Combination1(player, computer);
    } else if ((player == 1 || player == 2) && (computer == 1 || computer == 2)) {                              // There are three possible combinations:
        Combination2(player, computer);
    } else {                                                                                                    // Combination1: rock-rock, paper-paper, paper-rock or rock-paper choice combination
        Combination3(player, computer);                                                                         // Combination2: paper-paper, scissors-scissors, paper-scissors or scissors-paper choice combination
    }                                                                                                           // Combination3: scissors-scissors, rock-rock, scissors-rock or rock-scissors choice combination                                                                                                            
}


let user = 0;                                                                                                   // Variable for storing the user's score
let program = 0;                                                                                                // Variable for storing the computer's score


function Combination1(userChoice, programChoice) {                                                              // Function for Combination1

    if (userChoice == 1 && programChoice == 1) {                                                                // An If Else statement is initialized to determine both the user & the computer's choices                                   
        uS = 'paper';
        pS = 'paper';
    } else if (userChoice == 3 && programChoice == 3) {
        uS = 'rock';
        pS = 'rock';
    } else if (userChoice == 1) {
        uS = 'paper';
        pS = 'rock'
    } else {
        uS = 'rock';
        pS = 'paper';
    }

    console.log(`USER HAS CHOSEN: ${uS}`);                                                                      // The user & the computer's choices are printed out
    console.log(`PROGRAM HAS CHOSEN: ${pS}`);

    if (userChoice == programChoice) {                                                                          // An If Else statement to evaluate the winner of the round or if there is a tie for Combination1
        console.log('This round is a tie');
        console.log('');
    } else if (!(userChoice > programChoice)) {
        console.log('User wins this round! Paper beats rock!');
        console.log('');
        ++user;                                                                                                 // If the user wins, there variable is incremented by one
    } else {
        console.log('Program wins this round! Paper beats rock!');
        console.log('');
        ++program;                                                                                              // If the program wins, there variable is incremented by one
    }
}

function Combination2(userChoice, programChoice) {                                                              // Function for Combination2

    if (userChoice == 1 && programChoice == 1) {                                                                // An If Else statement is initialized to determine both the user & the computer's choices                                   
        uS = 'paper';
        pS = 'paper';
    } else if (userChoice == 2 && programChoice == 2) {
        uS = 'scissors';
        pS = 'scissors';
    } else if (userChoice == 1) {
        uS = 'paper';
        pS = 'scissors'
    } else {
        uS = 'scissors';
        pS = 'paper';
    }

    console.log(`USER HAS CHOSEN: ${uS}`);                                                                      // The user & the computer's choices are printed out                                                                 
    console.log(`PROGRAM HAS CHOSEN: ${pS}`);

    if (userChoice == programChoice) {                                                                          // An If Else statement to evaluate the winner of the round or if there is a tie for Combination2
        console.log('This round is a tie');
        console.log('');
    } else if (userChoice > programChoice) {
        console.log('User wins this round! Scissors beat paper!');
        console.log('');
        ++user;                                                                                                 // If the user wins, there variable is incremented by one
    } else {
        console.log('Program wins this round! Scissors beat paper!');
        console.log('');
        ++program;                                                                                              // If the program wins, there variable is incremented by one
    }
}

function Combination3(userChoice, programChoice) {                                                              // Function for Combination3

    if (userChoice == 2 && programChoice == 2) {                                                                // An If Else statement is initialized to determine both the user & the computer's choices
        uS = 'scissors';
        pS = 'scissors';
    } else if (userChoice == 3 && programChoice == 3) {
        uS = 'rock';
        pS = 'rock';
    } else if (userChoice == 2) {
        uS = 'scissors';
        pS = 'rock'
    } else {
        uS = 'rock';
        pS = 'scissors';
    }

    console.log(`USER HAS CHOSEN: ${uS}`);                                                                      // The user & the computer's choices are printed out
    console.log(`PROGRAM HAS CHOSEN: ${pS}`);

    if (userChoice == programChoice) {                                                                          // An If Else statement to evaluate the winner of the round or if there is a tie for Combination3
        console.log('This round is a tie');
        console.log('');
    } else if (userChoice > programChoice) {
        console.log('User wins this round! Rock beats scissors!');
        console.log('');
        ++user;                                                                                                 // If the user wins, there variable is incremented by one
    } else {
        console.log('Program wins this round! Rock beats scissors!');
        console.log('');
        ++program;                                                                                              // If the program wins, there variable is incremented by one
    }
}

function game() {                                                                                               // The game function is used to play five rounds of the game
    for(i=0; i<5; ++i) {                                                                                        // A for loop goes over the playround function (wich is used to play a single round) five times

        playRound();

        if ((user == 3) || (user == 2 && program == 0 && i>2)) {                                                // An If Else statement in the loop to check wheter a result should be declared after five or after four rounds.
            break;                                                                                              // The verification for that is based on the outcomes of the single rounds
        } else if ((program == 3) || (program == 2 && user == 0 && i>2)) {
            break;
        } else {
            continue;
        }
    }

    if (user > program) {                                                                                       // An If Else statement to check & declare the final winner or tie if there is one
        console.log('User wins the game!');
    } else if (user < program) {
        console.log('Computer wins the game!');
    } else {
        console.log('We have a tie');
    }
}

game();











