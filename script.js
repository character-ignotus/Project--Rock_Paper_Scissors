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
    }
}



