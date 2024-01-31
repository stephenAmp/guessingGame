//  variables
let attempts = 5;
let randomNum = Math.floor(Math.random() * 100  + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptText = document.getElementById("attempts");
const replay = document.getElementById("replayButton");


// Event Listeners
submit.addEventListener("click",guessCheck);
replay.addEventListener("click",resetGame)
function guessCheck(event){
    // event.preventDefault();
    enableInput();
    const userValue = Number(guess.value);
    attempts --;
    if(userValue === randomNum){
        hint.textContent = "Congratulations! You won"
        displayGameOver();
    } else if(userValue < randomNum){
        hint.textContent = " Guessed number is low."
    }else{
        hint.textContent=" guessed number is high."
    }
attemptText.textContent = "Attempt(s) left: "+ attempts;
    if(attempts <= 0){
        displayGameOver(); 
    }
 
}

function reset(){
    disableInput();
    randomNum = Math.floor(Math.random()*100 +1);
    attemptText.textContent=""
    hint.textContent = ""
    
    
}

function disableInput(){
    guess.disabled = true;
    submit.disabled = true;
}
 function enableInput(){
    guess.disabled = false;
    submit.disabled = false;
}

function resetGame(){
    reset();
    enableInput()
    replay.style.display = "none"
    attempts =5;
}

function displayGameOver(){
    replay.style.display ="flex";
    disableInput()
    attemptText.textContent = "GAME OVER"
}