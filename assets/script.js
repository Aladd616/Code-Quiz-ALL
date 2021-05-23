var startbutton = document.getElementById("start-btn");
var intro = document.getElementById("intro");
var answerbuttons = document.getElementsByClassName("ans-btn");
var questionBoxElement = document.getElementById("question-box");
var questionEL = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var backButton = document.getElementById("Go-back");
var scoreButton = document.getElementById("Clear-Scores");
var initialsField = document.getElementById("initialscore");
var finalscore = document.getElementById("final-score");
var initialsEntry = document.getElementById("initials");
var userScoreSpan = document.querySelector("#high");
var timeEl = document.querySelector(".time");
var watch = document.getElementById("timer");

var timeLeft = 70;
var Q =0;
var Current = 0;
var score = 0;


function setTime() {
    var Interval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time:" + timeLeft;
        if(timeLeft <= 0) {
            clearInterval(Interval);
            timeLeft = 0
            timeEl.textContent = "Time:" + timeLeft;
            console.log("time",timeLeft)
            GameOver()
                   
        }
        else if (Current >= 7) {
            clearInterval(Interval);
        }
    }, 1000);
}

startbutton.addEventListener('click', startGame);

function startGame() {
    console.log("start");
    startbutton.classList.add("hidden");
    intro.classList.add("hidden");
    questionBoxElement.classList.remove("hidden");
    Current = 0;
    setNextQuestion()
    setTime()
}

function cycleQuestion() {
    console.log("called");
    Current++;
    console.log(Current);
    if (Current < 7) {

    setNextQuestion();
    }
    else {
        GameOver()
    }
}

console.log(Current)

function setNextQuestion() {
    resetquestion()
    questiondisplay(randomanswers[Current])
}
function questiondisplay(randomanswers){
    questionEL.innerText = randomanswers.question
    console.log(randomanswers.question)
    console.log(randomanswers.answers)
    console.log(randomanswers.correct)
    Q = randomanswers.correct
    randomanswers.answers.forEach(answer => { 
        var button = document.createElement('button')
        button.innerText = answer.txt
        button.classList.add("ans-btn")
        button.classList.add("btn")
       
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button)
    })
}



function resetquestion() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function selectAnswer(e) {
    if (Q == e.target.firstChild.textContent) {
        console.log("answer is correct")
    }
    else{
        console.log("answer is wrong")
        timeLeft = timeLeft-10
    }

    
        cycleQuestion();
    
    console.log("Current",Current)
    console.log("event", e)
    console.log("answer", Q)
    console.log("target", e.target.firstChild.textContent)

}
function GameOver() {
    questionBoxElement.classList.add("hidden");
    timeEl.classList.add("hidden");
    scoreButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
    initialsField.classList.remove("hidden");
    finalscore.classList.remove("hidden");
    score = Math.abs(timeLeft).toString()
    finalscore.textContent = "Your final score is " + score
    console.log("score",score)
}

function logSubmit(event) {
    localStorage.setItem("initials", initialsEntry);
    localStorage.setItem("score", score);
    highScore()
}
function highScore() {
    initialsField.classList.add("hidden");
    finalscore.classList.add("hidden");
    userScoreSpan.textContent = 
}


var question1 = {
    question: "string1000",
    answers: [
        {txt: '1', correct: false},
        {txt: '2', correct: false},
        {txt: '3', correct: true},
        {txt: '4', correct: false}  
    ],
    correct: "3",
}

var question2 = {
    question: "string222",
    answers: [
        {txt: '5', correct: true}, 
        {txt: '6', correct: false},
        {txt: '7', correct: false},
        {txt: '8', correct: false}   
    ],
    correct: "5",
}

var question3 = {
    question: "string3",
    answers: [
        {txt: '9',  correct: false}, 
        {txt: '10', correct: false},
        {txt: '11', correct: false},
        {txt: '12', correct: true}   
    ],
    correct: "12",
}

var question4 = {
    question: "string4000",
    answers: [
        {txt: '13', correct: false}, 
        {txt: '14', correct: false},
        {txt: '15', correct: true},
        {txt: '16', correct: false}   
    ],
    correct: "15",
}
var question5 = {
    question: "string5",
    answers: [
        {txt: '17', correct: false}, 
        {txt: '18', correct: true},
        {txt: '19', correct: false},
        {txt: '20', correct: false}   
    ],
    correct: "18",
}

var question6 = {
    question: "string6000",
    answers: [
        {txt: '21', correct: false}, 
        {txt: '22', correct: true},
        {txt: '23', correct: false},
        {txt: '24', correct: false}   
    ],
    correct: "22",
}

var question7 = {
    question: "string7",
    answers: [
        {txt: '25', correct: true}, 
        {txt: '26', correct: false},
        {txt: '27', correct: false},
        {txt: '28', correct: false}   
    ],
    correct: "25",
}

var questions = [question1, question2, question3, question4, question5, question6, question7];

var randomanswers = questions.map(question => {
    return {
        ...question,
        answers: random(question)
    }
})

console.log(randomanswers);

// document.getElementById("questionsPrint").innerHTML = JSON.stringify(randomanswers, null, 2);

function createQuestion() {
    var questions = [question1, question2, question3, question4, question5, question6, question7];

    for (var i = 0; i < questions.length; i++) {}
}


function random(question) {
        var displayanswers = [];
            for (i = 0; i < question.answers.length; i++) {
                do {
                var x = question.answers[Math.floor(Math.random()* question.answers.length)];
                }
                while (displayanswers.includes(x));                
                displayanswers.push(x);
                console.log("displayanswers", displayanswers);
}
return displayanswers
}



var randomanswers = questions.map(question => {
    return {
        ...question,
        answers: random(question)
    }
})






