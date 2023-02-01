//click button to start
    //event listener
    //a timer will start
//user is presented with a question

//user selects one multiple choice question
    //IF answer is wrong, decrement the timer
        //Display that the user choice was incorrect, then move to next question
    //IF answer is correct
        //Display that the user choice was correct(textContent)
        //Increment the score++
    //FOR loop to loop through the questions array
//When timer hits 0 OR no more questions in array
    //THEN clear interval
    //THEN allow user to input initials
    //THEN link to highscores page(two separate HTML pages, index.html and hiscores.html)
    //Save data to local storage(setItem, getItem)

//startQuiz() function changes content
    //hide the start screen
    //unhide the questions section
    //start the timer
    //show the starting time
    //call getQuestion()
//getQuestion() function get current question object from questions array
    //change content of the page
    //getElementbyId, change textContent
    //loop over choices create a button for each choice
    //after creating all the elements we appendChild
//questionClick() function that checks choice user clicked
    //first we check that the event.target matches an answer choice
    //check event.target.value matches the questions[currentIndex].answer


let startButton=document.getElementById("start-btn"); //allows us to refer to button later w/o typing all syntax (doc.getEl, etc)
let timerText=document.querySelector(".timer-message");

let index=0;  //dictates which question we're on

let secondsLeft = 5; //how many seconds until timer goes off

let userScore=0;

var answerButtons = document.querySelector(".answer-buttons")

// let choiceButtons=document.querySelector('.')


var questionArray = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper text Martian language","Hyper text markup language"],
        answer: "Hyper text markup language",
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cats stay sleeping", "Cascading style sheets"],
        answer: "Cascading style sheets",
    }
]


function startQuiz() {
  
    // document.querySelector(".question").textContent=questionArray[questionIndex].question;
    // console.log(questions[0].question);
        
    let timerInterval=setInterval(function() {
        if (secondsLeft>0) {
        secondsLeft--;   //decreases the secondsLeft variable each time timerInterval passes
        
        timerText.textContent = secondsLeft + " seconds left!";
        
        if(secondsLeft===0) {
            clearInterval(timerInterval); 
            
            // askQuestion();
            
        }  
        //   askQuestion();
    } }, 1000); 
    askQuestion();
} 

function hidePage() {
    var button = document.querySelector(".p1-box");
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

// let answerButtons=document.querySelector(".answer-button");

// answerButtons.addEventListener("click", function(event) {
//     let userChoice=event.target;
// });

// answerButtons.addEventListener("click" {
// //     console.log(e);
// });

let questions=document.querySelector('.question');

function askQuestion(){
    questions.textContent=questionArray[index].question;
    // console.log(questionArray[questionIndex].choices.length);
   
    answerButtons.innerHTML="";

    for (let i = 0; i < questionArray[index].choices.length; i++) {
       
        let optionButton = document.createElement("button");
        //<button>

        optionButton.setAttribute("class", "ansChoice")
        // <button class=ansChoice> </button>
        
        optionButton.textContent=questionArray[index].choices[i];
        //adding text in button
          // <button>answer1</button>

        optionButton.addEventListener("click", checkAnswer);

        answerButtons.appendChild(optionButton);
        //puts element in html
        /*<div>
            <button></button>
         </div>
        */

    }
    
}

function checkAnswer(event){

//e is an object containin g info about event that just occured
// if(e.target.matches('button')){
//     console.log(e.target);
//    }
    let correctAnswer=questionArray[index].answer;
    // console.log(correctAnswer);
    let userChoice=event.target.textContent;
   
    // console.log(userChoice);
    let correctEl=document.getElementById("correct");

    if (correctAnswer===userChoice) {
        correctEl.textContent="correct"

    }
    else {
        correctEl.textContent="incorrect"
        }

    setTimeout(function () {
        correctEl.textContent="";
    } ,1000 )

   index++; // i=i+1  
   if(index<questionArray.length) {
    askQuestion(); //check for loop
   }
   else {
    // alert("game over");
   }
  


 
}

startButton.addEventListener("click", startQuiz);
// buttons.addEventListener('click', askQuestion)







