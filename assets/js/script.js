let userName = "";
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
    userName = document.getElementById('username').value;
    console.log(userName);

    let section = document.getElementById("select-level");
    section.style.display='block';

    let usernameText = document.getElementById('welcome-username');
    usernameText.innerHTML="Welcome "+ userName;

}

let myButton = document.getElementById('my-btn');
myButton.addEventListener('click', submitUsername);

/**
 * The main quiz "loop", called when the script is first loaded
 * and after the user's answer has been processed
 **/

let level;
function selectLevel (event) {
    let node = document.getElementById('select-level');
    node.style.display='none';
    level = document.querySelector('input[name="level"]:checked').value;
    showLevel();
    console.log(level);
}

let myButton2 = document.getElementById('my-level-btn');
myButton2.addEventListener('click', selectLevel);
let score=0;

function showLevel(){
    if(level=="beginner"){
        let node = document.getElementById('beginner-question');
        node[0].style.display = 'block';
        }

    }
    else if(level=="intermediate"){
        let node = document.getElementById('intermediate-questions');
        node.style.display='block';
        console.log(node);

    }
    else if(level=="advanced"){
        let node = document.getElementById('advanced-questions');
        node.style.display='block';
        console.log(node);

    }
}
/** 
function nextQuestion(){

}

let myButton3 = document.getElementById('beginner-question-btn');
myButton3.addEventListener('click',checkAnswer);
let myButton4 = document.getElementById('intermediate-question-btn');
myButton4.addEventListener('click',checkAnswer);
let myButton5 = document.getElementById('advanced-question-btn');
myButton5.addEventListener('click',checkAnswer);

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
    document.getElementsByClassName('questions');
    document.getElementsByClassName('beginner-question')

}

/**
 * Gets the current score from the DOM and increments it by 1


let scoreArea=document.getElementsByClassName('scoreArea');
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

}*/