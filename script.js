//  variables
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100  + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptText = document.getElementById("attempts");

// Event Listeners
submit.addEventListener("click",guessCheck);

function guessCheck(){
    const userValue = Number(guess.value);
    attempts ++;
    if(userValue === randomNum){
        hint.textContent = "Congratulations! You won"
    } else if(userValue < randomNum){
        hint.textContent = " Guessed number is low. Try again!"
    }else{
        hint.textContent=" guessed number is high. Try again!"
    }
attemptText.textContent = "Attempt(s): "+ attempts;
    if(attempts<=5){
        
    }
}
