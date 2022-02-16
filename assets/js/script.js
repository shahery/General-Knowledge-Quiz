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
        node.style.display = 'block';
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

const userAnswers=[];

function submitAnswer (event) {
    if(level=='beginner'){
        let node = document.getElementById('beginner-question');
        node.style.display='none';
        userAnswers[0]=(document.querySelector('input[name="capital"]:checked').value);
        userAnswers[1]=(document.querySelector('input[name="planet"]:checked').value);
        for (let index = 0; index < userAnswers.length; index++) {
            console.log(userAnswers[index]);        
        }
    }
    if(level=='intermediate'){
        let node = document.getElementById('intermediate-questions');
        node.style.display='none';
        answer[0]=(document.querySelector('input[name="drink"]:checked').value);
        for (let index = 0; index < answer.length; index++) {
            console.log(answer[index]);        
        }
    }
    if(level=='advanced'){
        let node = document.getElementById('advanced-questions');
        node.style.display='none';
        answer[0]=(document.querySelector('input[name="zone"]:checked').value);
        for (let index = 0; index < answer.length; index++) {
            console.log(answer[index]);        
        }
    }
    showResult();
}

let myButton3 = document.getElementById('beginner-question-btn');
myButton3.addEventListener('click', submitAnswer);

let myButton4 = document.getElementById('intermediate-question-btn');
myButton4.addEventListener('click', submitAnswer);
console.log(level);

let myButton5 = document.getElementById('advanced-question-btn');
myButton5.addEventListener('click', submitAnswer);

const beginnerAnswers = ["Islamabad","Mercury"];
const intermediateAnswers = ["Islamabad","Mercury"];
const advancedAnswers = ["Islamabad","Mercury"];

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 * */

function showResult(){
    let equal = true;
    let countError = 0;
    const mistakes = [];
    const correctAnswer = [];
    for (let index = 0; index < beginnerAnswers.length; index++) {
        if(beginnerAnswers[index]!=userAnswers[index]){
            countError++;
            mistakes[index]= userAnswers[index];
            correctAnswer[index] = beginnerAnswers[index]
            equal = false;
        }
    }
    if(equal){
        alert("Hey! You got it right! :D");
    }
    else{
        for(let i = 0; i < countError; i++)
            alert(`Awwww.... you answered +${mistakes[i]}. The correct answer was ${correctAnswer[i]}!`);
    }
    

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