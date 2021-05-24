// variable declaration
var startbutton = document.getElementById("start-btn");
var intro = document.getElementById("intro");
var answerbuttons = document.getElementsByClassName("ans-btn");
var questionBoxElement = document.getElementById("question-box");
var questionEL = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var backButton = document.getElementById("Go-back");
var clearScoreButton = document.getElementById("Clear-Scores");
var initialsField = document.getElementById("initials-score");
var finalscore = document.getElementById("final-score");
var highScoreButton = document.getElementById("highscores-btn");
var scoresPage = document.getElementById("highscores")
var goBack = document.getElementById("back-btn")

// variable for the score sheet
var scoreForm = document.querySelector("#initials-score");
var initialsInput = document.querySelector("#initials");
var scoreList = document.querySelector("#highscore-list")

// timer variable
var timeEl = document.querySelector(".time");
var watch = document.getElementById("timer");

// arrays for use in high score function
var users = [];
var final = [];

// global variable declaration
var timeLeft = 70;
var Q =0;
var Current = 0;
var score = 0;


// function to start timer
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

// function calls for navigation buttons
startbutton.addEventListener('click', startGame);
goBack.addEventListener('click', GoBack);

// function for the star button
function startGame() {
    
    startbutton.classList.add("hidden");
    highScoreButton.classList.add("hidden");
    intro.classList.add("hidden");
    questionBoxElement.classList.remove("hidden");
    Current = 0;
    setNextQuestion()
    setTime()
}

// cycler for questions
function cycleQuestion() {

    Current++;
    
    if (Current < 7) {

    setNextQuestion();
    }
    else {
        GameOver()
    }
}


// function calls that remove and display the next question and amswer
function setNextQuestion() {
    resetquestion()
    questiondisplay(randomanswers[Current])
}
// creates the buttons from the objects to display in the answer section
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


// removes the previous question and the previous answer buttons once an answer is chosen
function resetquestion() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}
// determines whether an answer is correct and scales the timer that answer is wrong
function selectAnswer(e) {
    if (Q == e.target.firstChild.textContent) {
        console.log("answer is correct")
    }
    else{
        console.log("answer is wrong")
        timeLeft = timeLeft-10
    }

    
        cycleQuestion();
    
    
}

// controls what happens when all the questions are answered or if the timer hits 0
function GameOver() {
    questionBoxElement.classList.add("hidden");
    timeEl.classList.add("hidden");
    // clearScoreButton.classList.remove("hidden");
    // backButton.classList.remove("hidden");
    initialsField.classList.remove("hidden");
    finalscore.classList.remove("hidden");
    score = Math.abs(timeLeft).toString()
    finalscore.textContent = "Your final score is " + score
    console.log("score",score)
}

// stores the final timer value and the initials entered by the user
function storeScores(){
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("scores", JSON.stringify(final));
}

// function call for the high score button
highScoreButton.addEventListener('click', pageHighScores);

// allows the high scores page to render
function pageHighScores() {

    var storedusers = JSON.parse(localStorage.getItem("users"));
    var storedscores = JSON.parse(localStorage.getItem("scores"));

    if(storedusers !== null) {
        users = storedusers
    }

    if(storedscores !== null) {
        final = storedscores
    }

    console.log("users", users)
    console.log("scores", final)

    goBack.classList.remove("hidden");
    startbutton.classList.add("hidden");
    scoresPage.classList.remove("hidden");
    highScoreButton.classList.add("hidden");
    intro.classList.add("hidden");

    scoreList.innerHTML = "";


    for (var i = 0; i < users.length; i++){

        var user = users[i];
        var scorevalue = final[i];

        var li = document.createElement("li");
        li.textContent = user + " - " + scorevalue;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}

// pushes the scores and initials into seperate arrays in order to be stored
scoreForm.addEventListener("submit", function(event) {

    var initialText = initialsInput.value.trim();

    users.push(initialText);
    final.push(score);

    storeScores();
})
// controls the go back button on the high scores page
function GoBack() {
    startbutton.classList.remove("hidden");
    scoresPage.classList.add("hidden");
    highScoreButton.classList.remove("hidden");
    intro.classList.remove("hidden");
    goBack.classList.add("hidden");
}
// question and answer objects
var question1 = {
    question: "What are containers for named values within Javascript",
    answers: [
        {txt: 'Strings', correct: false},
        {txt: 'arrays', correct: false},
        {txt: 'Objects', correct: true},
        {txt: 'Methods', correct: false}  
    ],
    correct: "Objects",
}

var question2 = {
    question: "What programming language is the skeleton of a website",
    answers: [
        {txt: 'HTML', correct: true}, 
        {txt: 'Python', correct: false},
        {txt: 'Javascript', correct: false},
        {txt: 'Rust', correct: false}   
    ],
    correct: "HTML",
}

var question3 = {
    question: "A binary variable having two possible values of 'true' and 'false' is called what",
    answers: [
        {txt: 'generic',  correct: false}, 
        {txt: 'string', correct: false},
        {txt: 'integer', correct: false},
        {txt: 'Boolean', correct: true}   
    ],
    correct: "Boolean",
}

var question4 = {
    question: "What kind of variable is the following [1,2,3,5,7]",
    answers: [
        {txt: 'integer', correct: false}, 
        {txt: 'string', correct: false},
        {txt: 'array', correct: true},
        {txt: 'Boolean', correct: false}   
    ],
    correct: "array",
}
var question5 = {
    question: "Within CSS what does the following denote: .face ",
    answers: [
        {txt: 'a variable', correct: false}, 
        {txt: 'a class', correct: true},
        {txt: 'an ID', correct: false},
        {txt: 'a string', correct: false}   
    ],
    correct: "a class",
}

var question6 = {
    question: "what is the html tag of an order list",
    answers: [
        {txt: '<ul>', correct: false}, 
        {txt: '<li>', correct: true},
        {txt: '<ol>', correct: false},
        {txt: '<list>', correct: false}   
    ],
    correct: "<li>",
}

var question7 = {
    question: "Within CSS what does the following denote: #random",
    answers: [
        {txt: 'an ID', correct: true}, 
        {txt: 'a class', correct: false},
        {txt: 'a variable', correct: false},
        {txt: 'a string', correct: false}   
    ],
    correct: "an ID",
}

// array of objects that stores the questions
var questions = [question1, question2, question3, question4, question5, question6, question7];

// randomizes the order of the answers
var randomanswers = questions.map(question => {
    return {
        ...question,
        answers: random(question)
    }
})



// randomizes questions
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


// randomizes the order of the answers
var randomanswers = questions.map(question => {
    return {
        ...question,
        answers: random(question)
    }
})






