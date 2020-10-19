
//Timer setting function
var timer = document.querySelector(".timer");
var btn = document.querySelector("#qsbutton");

//Start timing function
function setTimer() {
    event.preventDefault();
    var counterStart = 0;
    var timerInterval = setInterval(function () {
        counterStart++;
        timer.textContent = "Timer: " + counterStart;

    }, 1000); 
} 

//Timer will start after Start Quiz Button is clicked
btn.addEventListener("click",setTimer);



