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
    }  
                                                                                                                // Combination3: scissors-scissors, rock-rock, scissors-rock or rock-scissors choice combination
}









