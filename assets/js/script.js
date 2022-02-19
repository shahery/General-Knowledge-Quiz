/**
 * submitUsername function with the 
 * welcome Username message
 */

let userName = "";
function submitUsername (event) {
    if (usernameEmpty!= ""){
        let node = document.getElementsByClassName('info-area');
        for (var i=0;i<node.length;i++){
            node[i].style.display = 'none';
        }
        let node2 = document.getElementsByClassName('input-area');
        for (var i=0;i<node2.length;i++){
            node2[i].style.display = 'none';
        }
        let node3 = document.getElementsByClassName('submit-area');
        for (var i=0;i<node3.length;i++){
            node3[i].style.display = 'none';
        }
        userName = document.getElementById('username').value;
        console.log(userName);

        let section = document.getElementById("select-level");
        section.style.display='block';

        let usernameText = document.getElementById('welcome-username');
        usernameText.innerHTML="Welcome "+ userName;
    }
}
var usernameEmpty;
function emptyUsername() {
    usernameEmpty = document.getElementById("username").value;
    if (usernameEmpty == "") {
        alert("Please Enter username");
        return false;
    }
}

let myButton = document.getElementById('my-btn');
myButton.addEventListener('click', submitUsername);

/**
 * The main quiz "loop", called when the script is first loaded
 * and after the user's answer has been processed
 **/

let level;
function selectLevel (event) {
    if(document.getElementById('intermediate').checked || document.getElementById('beginner').checked
     || document.getElementById('advanced').checked){
     level = document.querySelector('input[name="level"]:checked').value;
       if (typeof(level) != "undefined"){
         level = document.querySelector('input[name="level"]:checked').value;
         console.log(level);
         let node = document.getElementById('select-level');
         node.style.display='none';
         showLevel();
        }
    }
    else{
        alert("No level selected"); 
    }
}

let myButton2 = document.getElementById('my-level-btn');
myButton2.addEventListener('click', selectLevel);


function showLevel(){
    
    let box = document.getElementsByClassName('quiz')[0];
    box.style.height = '185vh';
   
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

/**
 * submitAnswers for beginner,intermediate and advanced questions.
 */

const userAnswers=["","","","",""];

function submitAnswer (event) {
    let box = document.getElementsByClassName('quiz')[0];
    box.style.height = '185vh';


    var capitalSelected = check('capital');
    var planetSelected = check('planet');
    var currencySelected = check('currency');
    var symbolSelected = check('symbol');
    var presidentSelected = check('president');
    var beginnerSelected = false;

    var drinkSelected = check('drink');
    var playersSelected = check('players');
    var timesSelected = check('times');
    var girlSelected = check('girl');
    var citySelected = check('city');
    var intermediateSelected = false;

    var zoneSelected = check('zone');
    var bodypartSelected = check('body-part');
    var StateSelected = check('State');
    var countrySelected = check('country');
    var gameSelected = check('game');
    var advancedSelected = false;

        if(level=='beginner'){
            if(capitalSelected && planetSelected && currencySelected && symbolSelected && presidentSelected){
             let node = document.getElementById('beginner-question');
             node.style.display='none';
            
             userAnswers[0]=(document.querySelector('input[name="capital"]:checked').value);
             userAnswers[1]=(document.querySelector('input[name="planet"]:checked').value);
             userAnswers[2]=(document.querySelector('input[name="currency"]:checked').value);
             userAnswers[3]=(document.querySelector('input[name="symbol"]:checked').value);
             userAnswers[4]=(document.querySelector('input[name="president"]:checked').value);

             for (let index = 0; index < userAnswers.length; index++) {
                 console.log(userAnswers[index]);        
                }
             beginnerSelected=true;
            }
        
        }
        if(level=='intermediate'){
            if(drinkSelected && playersSelected && timesSelected && girlSelected && citySelected){
             let node = document.getElementById('intermediate-questions');
             node.style.display='none';
             userAnswers[0]=(document.querySelector('input[name="drink"]:checked').value);
             userAnswers[1]=(document.querySelector('input[name="players"]:checked').value);
             userAnswers[2]=(document.querySelector('input[name="times"]:checked').value);
             userAnswers[3]=(document.querySelector('input[name="girl"]:checked').value);
             userAnswers[4]=(document.querySelector('input[name="city"]:checked').value);

             for (let index = 0; index < userAnswers.length; index++) {
                 console.log(userAnswers[index]);        
                }
                intermediateSelected = true;
            }
        
        }
        if(level=='advanced'){
            if(bodypartSelected && StateSelected && countrySelected && gameSelected && zoneSelected){
             let node = document.getElementById('advanced-questions');
             node.style.display='none';
             userAnswers[0]=(document.querySelector('input[name="zone"]:checked').value);
             userAnswers[1]=(document.querySelector('input[name="body-part"]:checked').value);
             userAnswers[2]=(document.querySelector('input[name="State"]:checked').value);
             userAnswers[3]=(document.querySelector('input[name="country"]:checked').value);
             userAnswers[4]=(document.querySelector('input[name="game"]:checked').value);

             for (let index = 0; index < userAnswers.length; index++) {
                 console.log(userAnswers[index]);        
                }
                advancedSelected = true;
            }
        }
        if(beginnerSelected || intermediateSelected || advancedSelected)
        showResult();
        else
        alert("Please answer all the questions"); 
}
function check(question){
    var radios = document.getElementsByName(question);

    for (var i = 0, len = radios.length; i < len; i++){
        if (radios[i].checked){
            return true;
        }
    }

    return false;
}
let myButton3 = document.getElementById('beginner-question-btn');
myButton3.addEventListener('click', submitAnswer);

let myButton4 = document.getElementById('intermediate-question-btn');
myButton4.addEventListener('click', submitAnswer);

let myButton5 = document.getElementById('advanced-question-btn');
myButton5.addEventListener('click', submitAnswer);

const beginnerAnswers = ["Islamabad","Mercury","Krone","Tin","Joe-Biden"];
const intermediateAnswers = ["Irn-Bru","Four","Once","Olivia","Constantinople"];
const advancedAnswers = ["4","Knee","Tennessee","China","Call-of-Duty"];

/**
 * Checks the answer compare to userAnswer in
 * the returned calculateCorrectAnswer array
* */

function showResult(){
    let box = document.getElementsByClassName('quiz')[0];
    box.style.height = '80vh';
    let equal = true;
    let countError = 0;
    let div= document.getElementById('mistakes-list');
    let text="";
    const mistakes = [];
    const correctAnswer = [];
    if(level == "beginner"){
        for (let index = 0; index < beginnerAnswers.length; index++) {
            if(beginnerAnswers[index]!=userAnswers[index]){
                mistakes[countError] = userAnswers[index];
                correctAnswer[index] = beginnerAnswers[index];
                text += 'Awwww.... you answered '+mistakes[countError]+'. The correct answer was '+correctAnswer[index]+'!<br>';
                equal = false;
                countError++;
            }
        }
    }
    if(level == "intermediate"){
        for (let index = 0; index < intermediateAnswers.length; index++) {
            if(intermediateAnswers[index]!=userAnswers[index]){
                mistakes[countError] = userAnswers[index];
                correctAnswer[index] = intermediateAnswers[index];
                text += 'Awwww.... you answered '+mistakes[countError]+'. The correct answer was '+correctAnswer[index]+'!<br>';
                equal = false;
                countError++;
            }
        }
    }
    if(level == "advanced"){
        for (let index = 0; index < advancedAnswers.length; index++) {
            if(advancedAnswers[index]!=userAnswers[index]){
                mistakes[countError] = userAnswers[index];
                correctAnswer[index] = advancedAnswers[index];
                text += 'Awwww.... you answered '+mistakes[countError]+'. The correct answer was '+correctAnswer[index]+'!<br>';
                equal = false;
                countError++;
            }
        }
    }

    let scoreArea = document.getElementsByClassName('score-area');
    for (let index = 0; index < scoreArea.length; index++) 
        scoreArea[index].style.display='block';
    let score = document.getElementById("score");
    score.style.display='block';
    score.innerHTML= 5-countError;
    let incorrect = document.getElementById("incorrect");    
    incorrect.style.display='block';
    incorrect.innerHTML= countError;
    console.log(countError);
    
    if(!equal){
        div.innerHTML= text;
    }

    /*let backButton=document.getElementById("back");
    back.innerHTML=backButton;
    backButton.style.display="block";
    console.log(backButton);
    backButton.addEventListener('click',back);*/

}