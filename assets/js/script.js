// Wait for the DOM to finish loading before running the game
// Get the button element and add event listener to it.

/*document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByTagName("button");
    console.log("i am shaher");
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit"){
            alert('you clicked the submit button');
        }
    });
}*/
function submitUsername (event) {
    let userName = document.getElementById('username').value;
    console.log(userName);
    window.location.href = "select_level.html";

    /*let node = document.getElementsByClassName('test');
    node.innerHTML= userName;
    console.log(userName);*/
}
let myButton = document.getElementById('my-btn');
myButton.addEventListener('click', submitUsername);


/**
 * The main quiz "loop", called when the script is first loaded
 * and after the user's answer has been processed


function quizPlay(quizType){

    if (quizType === "low") {
        displayLowQuestions();
    } else if (quizType === "medium") {
        displayMediumQuestions();
    } else if (quizType === "high" ) {
           displayHighQuestions();
    } else {
        alert(`Unknown quiz type: ${quizType}`);
        throw `Unknown quiz type: ${quizType}. Aborting!`;
    }
}


/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 

 function checkAnswer(){

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${}!`);
        incrementWrongAnswer();
    }

    runQuiz();

}

function CorrectAnswers(){

}

/**
 * Gets the current score from the DOM and increments it by 1
 

let scoreArea=document.createElement('scoreArea');
let html=`<p class="scores">Correct Answers <span id="score">0</span></p>
        <p class="scores">Incorrect Answers <span id="incorrect">0</span></p>`;
        scoreArea.innerHTML=html;
let document.getElementById("score");
let document.getElementById("incorrect");    

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 

function incrementWrongAnswer(){

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayLowQuestions(){
}

function displayMediumQuestions(){
}

function displayHighQuestions(){
}*/