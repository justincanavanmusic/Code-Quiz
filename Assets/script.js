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

let questionIndex=0;

let secondsLeft = 5 //how many seconds until timer goes off 

// let choiceButtons=document.querySelector('.')

var questions = [
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
  
    document.querySelector(".question").textContent=questions[0].question;
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



// var myFunction = function() {
//     var attribute = this.getAttribute("");
//     alert(attribute);
// };


let buttons=document.querySelectorAll(".answer-button")

function askQuestion(){

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].textContent=questions[questionIndex].choices[index];
         
    }

    // question.textContent=questionList[i];  
    // question.onclick=checkAnswer;
}

function checkAnswer(){     //if statement true if b, else false, etc
console.log("checkAnswer");
   questionIndex++; // i=i+1  
   askQuestion(); //check for loop
}

startButton.addEventListener("click", startQuiz);
// buttons.addEventListener('click', askQuestion)

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', checkAnswer);
     
}








// let radioBtns=document.querySelectorAll("input[name='answers']")
// let result=document.getElementById("result");

// let findSelected = () => {
//     let selected=document.querySelector("input[name='answers']:checked").value;
//     result.textContent=`Value of selected radio button: ${selected}`;
// }

// radioBtns.forEach(radioBtn=> {
//         radioBtn.addEventListener("change", findSelected)
    
// });

// findSelected();