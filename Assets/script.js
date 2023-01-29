let startButton=document.getElementById("start-btn"); //allows us to refer to button later w/o typing all syntax (doc.getEl, etc)
let timerText=document.querySelector(".timer-message");

let secondsLeft = 5; //how many seconds until timer goes off 

//setInterval METHOD used to repeat a function based on the time interval provided (1000 is 1 second)

                        //setting timer from 5 seconds descending to 0
function setTimer() {
    let timerInterval=setInterval(function() {
        secondsLeft--;   //decreases the secondsLeft variable each time timerInterval passes
        // startButton.textContent = secondsLeft + " seconds left until Quiz starts!"
        timerText.textContent = secondsLeft + " seconds left until Quiz starts!";
      
        if(secondsLeft===0) {
            clearInterval(timerInterval); //stops the function from continuing when the countdown ends
            askQuestion();  //asks the first question in quiz
            }   //bracket for if secondsLeft statement
      
    }, 1000); //bracket for setInterval function

}  //function bracket

function askQuestion() {             
    timerText.textContent="";    //takes away the text content
    
}

var questionList=["q1", "q2", "q3"];  //arrays can be any datatype
var i=0;


        //question button
// function display(){
// var question=document.getElementById("question-btn");
// question.textContent=questionList[i];  //square brackets help pick string from array
// question.onclick=checkAnswer;
// }
// display();

function checkAnswer(){     //if statement true if b, else false, etc
   i++; // i=i+1  
   display(); //check for loop
}


// setTimer.addEventListener("click",  )
                                //this is a function
startButton.addEventListener("click", setTimer); //if display function had (), it would run immediately
// display(); //prints a