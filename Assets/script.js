var btn=document.getElementById("start-btn"); //allows us to refer to button later w/o typing all syntax (doc.getEl, etc)

var array=["q1", "q2", "q3"];  //arrays can be any datatype
var i=0;
function display(){
var question=document.getElementById("question-btn");
question.textContent=array[i];  //square brackets help pick string from array
question.onclick=checkAnswer;
}

function checkAnswer(){     //if statement true if b, else false, etc
   i++; // i=i+1  
   display(); //check for loop
}
                                //this is a function
btn.addEventListener("click", display); //if display function had (), it would run immediately
// display(); //prints a