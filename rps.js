// Function to get Computer's choice
function getComputerChoice(){
    let computerChoice = ""; // Initiate variable to store choice
    let randomNum = Math.floor(Math.random() * 3) // Generates whole random number between 0 and 2 inclusive 
    
    // Select Rock, Paper or Scissor based on random number generated in the previous step
    if (randomNum === 0){
        computerChoice = "rock";
    }
    else if (randomNum === 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors"
    }

    return computerChoice;
}

// Function to get Human's choice
function getHumanChoice(){
    let humanChoice = ""; // Initiate variable to store choice
    let userInput = ""; // Initiate variable to store user input
    let isInputValid = false; // Initiate boolean for input validation
    
    userInput = prompt("Enter your choice: rock, paper or scissors") // Prompts user for input

    // Trim white space at the front or back of the input text if any
    userInput = userInput.trim();
    
    // Validate user input
    // Check if input is valid
    if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")){
        isInputValid = true; // Sets boolean to true
    }

    // Keep prompting if input is not valid
    while(isInputValid === false){
        userInput = prompt(`Invalid input: You entered "${userInput}". Please enter either rock, paper or scissors exactly without extra spaces, quotes or spelling errors`) // Prompts user for input again  
        // Check if input is valid
        if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")){
            isInputValid = true; // Sets boolean to true
        } 
    }
    humanChoice = userInput; // Store validated input in variable to return
    
    return humanChoice    
}

// Declare variables to store Computer and Human scores
let computerScore = 0;
let humanScore = 0;

// Function to play one round

// Play a game with five rounds and declare winner in the end

