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

//start button
let startButton=document.getElementById("start-btn"); 
//text that pops up with timer info
let timerText=document.querySelector(".timer-message");


let questionIndex=0;  //dictates which question we're on

let userScore=0; //dictates correct answers for user

let secondsLeft = 60; //how many seconds until timer goes off

//multiple choice option buttons
var answerButtons = document.querySelector(".answer-buttons")

//an array with objects for each question. includes questions, choices, answers
var questionArray = [
    {
        question: "What does HTML stand for?",
        choices: ["1. Hyper text Martian language","2. Hyper text markup language", "3. HTTP", "4. High Tech Music Language"],
        answer: "2. Hyper text markup language",
    },
    {
        question: "What does CSS stand for?",
        choices: ["1. Cats stay sleeping", "2. Candy Store Shop", "3. Cascading style sheets", "4. Cascading Style Store"],
        answer: "3. Cascading style sheets",
    },

    {
        question: "What are the values of a boolean?",
        choices: ["1. True/False", "2. If/And/But", "3. 20/40", "4. 100/200"],
        answer: "1. True/False",
    }
]

//function that starts the quiz
function startQuiz() {
        
    //if there is greater than one second left, keep decrementing until 0
    let timerInterval=setInterval(function() {
        if (secondsLeft>0) {
        secondsLeft--;   //decreases the secondsLeft variable each time timerInterval passes
        
        //this is the text along with the timer
        timerText.textContent = secondsLeft + " seconds left!";
        
        //if secondsleft is equal to 0 display none
        if(secondsLeft===0) {
            if (quizDiv.style.display === "none") {
                quizDiv.style.display = "block";
            } else {
                quizDiv.style.display = "none";
            }
            clearInterval(timerInterval); 
            //clears interval so we don't go past 0    
        }  
        
    } }, 1000); 
    askQuestion();
} 
//allowing me to hide/display the previous/following page. put all elements within the div that i wanted to disappear
function hidePage() {
    var button = document.querySelector(".p1-box");
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  //selecting question class from HTML
let questions=document.querySelector('.question');

function askQuestion(){
    //makes the text content of the question div whatever number question we're at in the array
    questions.textContent=questionArray[questionIndex].question;
    // console.log(questionArray[questionIndex].choices.length);
   
    //makes the everything in the answerButtons class disappear
    answerButtons.innerHTML="";

    //for loop that loops thorugh all "choices" options from the question array. dependant on where we are in the question index
    for (let i = 0; i < questionArray[questionIndex].choices.length; i++) {
       
        let optionButton = document.createElement("button");
        //<button>

        optionButton.setAttribute("class", "ansChoice")
        // <button class=ansChoice> </button>
        
        optionButton.textContent=questionArray[questionIndex].choices[i];
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

//e is an object containing info about event that just occured

//correct answer = the answer from wherever we're at in the questionIndex
    let correctAnswer=questionArray[questionIndex].answer;
    // console.log(correctAnswer);
    let userChoice=event.target.textContent;
   //user choice uses the event target to show what the user clicked. 
    
   //grabs correct id
    let correctEl=document.getElementById("correct");

    //writes correct if user answer is correct
    if (correctAnswer===userChoice) {
        correctEl.textContent="correct";
        userScore++;
        console.log(userScore);

    } //writes incorrect if user answer is incorrect
    else {
        correctEl.textContent="incorrect"
        }
    //if user answer is incorrect, subtract 10 seconds from timer
    if (correctAnswer!==userChoice) {
        secondsLeft=secondsLeft-10
    
        }
    //leaves the "correct" or "uncorrect" string up for 1 second then converts it to an empty string
    setTimeout(function () {
        correctEl.textContent="";
    } ,1000 )

    //raises question index by 1
   questionIndex++; // i=i+1  
   
   //if there are still questions left, call ask question function
   if(questionIndex<questionArray.length) {
    askQuestion(); 
   }
//    else {
  
//     //   highScore();
//    }
 
}
var quizDiv = document.getElementById("quiz-div");

function hideQuestionPage() {
    
    if(questionIndex===questionArray.length){
        if (quizDiv.style.display === "none") {
            quizDiv.style.display = "block";
        } else {
            quizDiv.style.display = "none";
        }
    }
  }

//   function lastPage() {
//     var userInitials = document.getElementById("user-initials");

//     if 

//     if (userInitials.style.display === "none") {
//       userInitials.style.display = "block";
//     } else {
//       userInitials.style.display = "none";
//     }
//   }



//adds event listener to start button
startButton.addEventListener("click", startQuiz);
//adds event listener to hide final page
quizDiv.addEventListener("click", hideQuestionPage);

//had to add eventlistener to initials submit but ran out of time.





