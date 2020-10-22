
//Timer variables
var timer = document.querySelector(".timer");
var btn = document.querySelector("#qsbutton");

//Start timmer function. Timmer will start after the "StartQuiz" button is pressed
function setTimer() {
  event.preventDefault();
  var counterStart = 0;
  var timerInterval = setInterval(function () {
    counterStart++;
    timer.textContent = "Timer: " + counterStart;

  }, 1000);
}

btn.addEventListener("click", setTimer);

//Quiz object containing questions and answers (options)

function startQuiz() {

  var start = document.querySelector("#start");//containr with the stat quizz button
  var quiz = document.querySelector("#questions"); // container that holds the questions & choices
  var choiceList = document.getElementById("#choice-list");//ul in the HMTL

  // Holds questions information in a Object format      
  var quizInfo = [{
    question: "Question 1?",
    option1: "Choice 1",
    option2: "Choice2",
    //add the correct answer at some point correct:A XXX
  },
  {
    question: "Question 2?",
    option1: "Choice 1",
    option2: "choice2",
    //add the correct answer at some point correct:A XXX
  }

  ];

  //loop to go over the oject array
  for (var i = 0; i < quizInfo.length; i++) {
    quizInfo[0].question;
    start.innerHTML = quizInfo[0].question

    // creating multiple choide list 
    var li = document.createElement("li"); // creating li element
    choiceList.appendChild(li); // appending li to ul
    li.textContent = quizInfo[0].option1 // go thru quizInfo and get the option 1 in position 1 =0



    //radio button
    //var optionButton = document.createElement("button");//added button to test it. How i do a radio button
    //li.appendChild(optionButton);
    //optionButton.textContent = quizInfo.option1[0];

    console.log(quizInfo[0]);

  }

  //Display a next button to go to the next question 
  //var nextButton = document.querySelector("#next-button");
  //nextButton.textContent = "Next";


}

btn.addEventListener("click", startQuiz);


