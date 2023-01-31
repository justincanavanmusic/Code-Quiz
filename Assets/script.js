let startButton=document.getElementById("start-btn"); //allows us to refer to button later w/o typing all syntax (doc.getEl, etc)
let timerText=document.querySelector(".timer-message");

let secondsLeft = 10 //how many seconds until timer goes off 

//setInterval METHOD used to repeat a function based on the time interval provided (1000 is 1 second)

                        //setting timer from 5 seconds descending to 0
function setTimer() {
  
    document.querySelector(".p1-paragraph").textContent=questionList[0];
        
    let timerInterval=setInterval(function() {
        if (secondsLeft>0) {
        secondsLeft--;   //decreases the secondsLeft variable each time timerInterval passes

        // startButton.textContent = "Start Quiz!";
        timerText.textContent = secondsLeft + " seconds left!";
     
      
        if(secondsLeft===0) {
            clearInterval(timerInterval); //stops the function from continuing when the countdown ends
            introText();  //asks the first question in quiz
            }   //bracket for if secondsLeft statement
      
 } }, 1000); //bracket for setInterval function

} 

function introText() {      //deletes intro p        
    timerText.textContent="";    content
    nextQuestion();

}

var questionList=["q1", "q2", "q3", "q4"];  //arrays can be any datatype
var i=0;

function nextQuestion(){
    var question=document.getElementById("question-btn");
    question.textContent=questionList[i];  //square brackets help pick string from array
    question.onclick=checkAnswer;
}

let questions = [
    {
        question1: 'what is 2+2?',
        option1: '2',
        option2: '3',
        option3: '4',
        option4: '5',
        answer1: 3,
    }
      
    ] 




function checkAnswer(){     //if statement true if b, else false, etc

   i++; // i=i+1  
   nextQuestion(); //check for loop
}



// setTimer.addEventListener("click",  )
                                //this is a function
startButton.addEventListener("click", setTimer);
// startButton.addEventListener("click", startAlert);
 //if display function had (), it would run immediately
// display(); //prints a


// let currentQuestion={};
// let correctAnswers=true;
// let score=0;
// let avaiableQuestions = []; 


                    //youtube video
                    // let questions = [
                    //     {
                    //         question: 'what is 2+2?',
                    //         answer1: '2',
                    //         choice2: '3',
                    //         choice3: '4',
                    //         choice4: '5',
                    //         answer: 2,
                    //     }
                    //     {
                    //         question: 'what is 2+2?',
                    //         answer1: '2',
                    //         choice2: '3',
                    //         choice3: '4',
                    //         choice4: '5',
                    //         answer: 2,
                    //     }
                    //     {
                    //         question: 'what is 2+2?',
                    //         answer1: '2',
                    //         choice2: '3',
                    //         choice3: '4',
                    //         choice4: '5',
                    //         answer: 2,
                    //     }
                    //     {
                    //         question: 'what is 2+2?',
                    //         answer1: '2',
                    //         choice2: '3',
                    //         choice3: '4',
                    //         choice4: '5',
                    //         answer: 2, 
                    //     } 
                    // ]
                    