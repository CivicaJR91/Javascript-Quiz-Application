
//Timer variables
var timer = document.querySelector(".timer");
var btn = document.querySelector("#qsbutton");
var counterStart = 60;
var score = 0;


//Start timmer function. Timmer will start after the "StartQuiz" button is pressed
function setTimer() {
  event.preventDefault();
  var time = setInterval(function () {
    counterStart--;
    timer.textContent = "Timer: " + counterStart;

    if (counterStart <= 0) {
      clearInterval(time);
    }

  }, 1000);

}

//Main Variables to HTML Elements for the questions and answers

var start = document.querySelector("#start");
var quiz = document.querySelector("#questions");
var questionDisplay = document.querySelector("#question-display");
var choiceList = document.querySelector(".choices-list");


// questions, answers and correct answers are inside of the object quizInfo

var quizInfo = [
  {
    question: "1. A very useful tool used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ["A. JavaScript", "B.terminal/bash", "C.for loops", "D.console log"],
    answer: "D.console log",
  },
  {
    question: "2. String values must be enclosed within (blank) when being assigned to variable.",
    possibleAnswers: ["A. commas", "B. curly brackets", "C. parentheses", "D. quotations"],
    answer: "D. quotations",
  },
  {
    question: "3. Arrays in JavaScript can be used to store:",
    possibleAnswers: ["A.Numbers and strings", "B. other arrays", "C. booleans", "D.all of the above"],
    answer: "D.all of the above",
  },
  {
    question: "4. The condition in an if/else statement is enclosed within:",
    possibleAnswers: ["A. quotes", "B. curylbrakets", "C. parentheses", "D. square brackets"],
    answer: "B. curylbrakets",
  },
  {
    question: "5. Commonly used data types DO NOT include:",
    possibleAnswers: ["A.strings", "B.booleans", "C.alerts", "D.numbers"],
    answer: "C.alerts",
  },
];


var quizQuestion = quizInfo.length - 1;
var questionDisplayIndex = 0;

//Displayin the questions
function displayQuestions() {

  var showQuestion = quizInfo[questionDisplayIndex];
  var currQuestion = showQuestion.question
  var answersArray = showQuestion.possibleAnswers
  var correctAnswer = showQuestion.answer

  //A div has created to display the questions
  questionDisplay.innerHTML = currQuestion
  var answerslist = document.createElement("div");
  questionDisplay.appendChild(answerslist);

  // for loop to render questions and answers

  if (questionDisplayIndex === 4) {
    displayingResults();
  }

  for (var i = 0; i < answersArray.length; i++) {

    //a button was creating, and it's attaching all the aswers
    var optionButton = document.createElement("button");
    optionButton.innerHTML = answersArray[i];
    answerslist.appendChild(optionButton);

  }

  var results = document.getElementById("results-correct-wrong");

  //desision statements to confirm if the aswers is wrong or right, time chages and score

  answerslist.addEventListener("click", function (event) {
    var element = event.target
    console.log(element)

    if (element.textContent === quizInfo[questionDisplayIndex].answer) {
      results.textContent = "Correct";
      counterStart += 10;
      score++
      console.log(score);
      scoreDisplay.textContent = "Your Score: " + score;


    }
    else {
      results.textContent = "Wrong";
      counterStart -= 30;


    }

    questionDisplayIndex++;
    displayQuestions();

  });

}

var quizEnd = document.getElementById("quizend");
var nameSubmittButton = document.getElementById("endbutton");

//Display Resuls

function displayingResults() {

  quizEnd.style.display = "block"
  quiz.style.display = "none"

}

//local store

var nameInput = document.querySelector("#first-name");
console.log(nameInput);
var scoreDisplay = document.querySelector("#scoredisplay");
var rowOne = document.getElementById("one");
var rowTwo = document.getElementById("two");

nameSubmittButton.addEventListener("click", function (event) {
  event.preventDefault();

  //1 create user object from submission

  var players = {
    firstName: nameInput.value.trim(),
    playerScore: scoreDisplay.value,
  };


  //2. Set Nee Submission
  localStorage.setItem("players", JSON.stringify(players));

  // 3. Get most recent submission
  var recentPlayers = JSON.parse(localStorage.getItem("players"));
  rowOne.textContent = recentPlayers.firstName;
  rowTwo.textContent = recentPlayers.playerScore;

});



//function that will start rendefin questions, answers, and timer.


function startQuiz() {
  start.style.display = "none";
  setTimer();
  displayQuestions();

};

btn.addEventListener("click", startQuiz);


var startAgain = document.getElementById("startagain");
startAgain.addEventListener("click", displayQuestions);

var highScoreButton = document.getElementById("highscores");

highScoreButton.addEventListener("click", playersPage)

function playersPage() {
  table.style.display = "block";
}









