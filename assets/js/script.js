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
    let node = document.getElementsByClassName('info-area');
    for (var i=0;i<node.length;i+=1){
        node[i].style.display = 'none';
    }
    let node2 = document.getElementsByClassName('input-area');
    for (var i=0;i<node2.length;i+=1){
        node2[i].style.display = 'none';
    }
    let node3 = document.getElementsByClassName('submit-area');
    for (var i=0;i<node3.length;i+=1){
        node3[i].style.display = 'none';
    }
    let userName = document.getElementById('username').value;
    console.log(userName);

    let section = document.getElementById("select-level");
    section.innerHTML=`<section class='select-level'>
    <form>
        <p>Please select your level</p>
        <input type="radio" id="beginner" name="level" value="beginner">
        <label for="beginner">Beginner</label><br>
        <input type="radio" id="intermediate" name="level" value="intermediate">
        <label for="intermediate">Intermediate</label><br>
        <input type="radio" id="advanced" name="level" value="advanced">
        <label for="advanced">Advanced</label><br><br>
        <input type="submit" value="Submit">
      </form>
    </section>`;
    console.log(section);
    section.style.backgroundColor=red;
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