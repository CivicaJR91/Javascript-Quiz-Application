
//Timer variables
var timer = document.querySelector(".timer");
var btn = document.querySelector("#qsbutton");
var counterStart = 60;


//Start timmer function. Timmer will start after the "StartQuiz" button is pressed
function setTimer() {
  event.preventDefault();
  setInterval(function () {
    counterStart--;
    timer.textContent = "Timer: " + counterStart;

  }, 1000);
}



//Quiz object containing questions and answers (options)

var start = document.querySelector("#start");//containr with the stat quizz button
var quiz = document.querySelector("#questions"); // container that holds the questions & choices
var questionDisplay = document.querySelector("#question-display");
var choiceList = document.querySelector(".choices-list");//ul in the HMTL


// questions, answers and correct answers 


var quizInfo = [
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ["1. JavaScript", "2.terminal/bash", "3.for loops", "4.console log"],
    answer: "4.console log",
  },
  {
    question: "String values must be enclosed within (blank) when being assigned to variable.",
    possibleAnswers: ["1. commas", "2. curly brackets", "3. parentheses", "4. quotations"],
    answer: "4. quotations",
  },
  {
    question: " Arrays in JavaScript can be used to store:",
    possibleAnswers: ["1.Numbers and strings", "2. other arrays", "3. booleans", "4.all of the above"],
    answer: "4.all of the above",
  },
  {
    question: "The condition in an if/else statement is enclosed within:",
    possibleAnswers: ["1. quotes", "2. curylbrakets", "3. parentheses", "4. square brackets"],
    answer: "2. curylbrakets",
  },
  {
    question: "Commonly used data types DO NOT include:",
    possibleAnswers: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
    answer: "3.alerts",
  },
];


var quizQuestion = quizInfo.length;
var questionDisplayIndex = 0; // question that is displaying to the user

function displayQuestions() {

  var showQuestion = quizInfo[questionDisplayIndex]; // the question the user is seeing
  var currQuestion = showQuestion.question; //showing current question
  var answersArray = showQuestion.possibleAnswers;// attach each answer to each question
  var correctAnswer = showQuestion.answer; // correct answers

  for (var i = 0; i < answersArray.length; i++) {

    var answerslist = document.createElement("div"); // new element to render answers
    questionDisplay.innerHTML = currQuestion;
    questionDisplay.appendChild(answerslist); // appending div to class=choicelist

    var optionButton = document.createElement("button");//creating button to render answers
    optionButton.innerHTML = answersArray[i]; // adding each value to buttons
    answerslist.appendChild(optionButton);

  };

  // Logic to check for results
  var results = document.getElementById("results-correct-wrong");
  var score = 0;

  answerslist.addEventListener("click", function (event) {
  var element = event.target

   if (element.textContent === quizInfo[questionDisplayIndex].answer) {
  results.textContent = "Correct";

  //score = 10;

  }
  else {
  results.textContent = "Wrong";
  counterStart -= 10;
  //score = 0;
  }
  })

  questionDisplayIndex++;
  displayQuestions();


  //function displayingResults() {

  /*var allDone = document.getElementById("alldone");
  allDone = "All Done!";
  var resultsPage = document.querySelector("#results");
  //results.textContent = "Your score is "; //score; 
  //Your final score is  each question = to 20 points

  var inputName = document.querySelector("#playername");
  inputName.style.display = "block"  // this has to say Enter Initials  Submit
  */
};

function startQuiz() {
  start.style.display = "none";
  setTimer();
  displayQuestions();
}

btn.addEventListener("click", startQuiz);