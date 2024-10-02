import { questions } from "./questions.js";
const startBtn = document.querySelector("#btnStart button");
const containerDiv = document.querySelector("#container");
const questionDiv = document.querySelector("#ques");
const optionsDiv = document.querySelector("#options");
const timerDiv = document.querySelector("#timer");
const questionsAlreadyDisplayed = [];
const userAnswers = [];
const CorrectAnswers=[];
let questionNumber = 0;
let interval;
let timer = 5;
let flag = 0;
let count=0;
let selectedOption;
let selectedAnswer;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  containerDiv.style.display = "block";

  displayQuestion();
  timerDiv.innerHTML = timer;

  interval = setInterval(() => {
    if (timer === 1) {
      if (questionNumber === questions.length) {
        //questions over, compare user answers

        clearInterval(interval);
        questionDiv.innerHTML=""
        optionsDiv.innerHTML=""
        timerDiv.style.display="none"
        questionDiv.innerHTML=calculateScore(); // Problem 
      } else {
        //change question
        displayQuestion();
        //reset timer
        timer = 5;
        timerDiv.innerHTML = timer;

        //check if user has answered
        if (flag === 0) userAnswers.push("null");
        else flag = 0;
      }

    } 
    else {
      timerDiv.innerHTML = --timer;
    }
  }, 1000);
}


// Problem is coming here 
function calculateScore(){
    for(let i=0;i<questions.length;i++){
        if(userAnswers[i]===CorrectAnswers[i]){
          count++;
            console.log(userAnswers[i],CorrectAnswers[i])
        }
      }
      return `You answered ${count} out of ${questions.length} questions Correctly`;

}

function displayQuestion() {
  const randomIndex = getRandomIndex();
  questionDiv.innerHTML = questions[randomIndex].q;
  CorrectAnswers.push(questions[randomIndex].a);
  displayOptions(questions[randomIndex].opt);
  questionNumber++;
//   console.log(CorrectAnswers);
}

function displayOptions(arr) {
  optionsDiv.innerHTML = "";
  arr.forEach((option) => {
    const para = document.createElement("p");
    para.innerHTML = option;
    para.addEventListener("click", storeUserAnswer);
    optionsDiv.append(para);
  });
}

function storeUserAnswer(e) {
   selectedOption=e.target;
  selectedAnswer=selectedOption.innerHTML;
  userAnswers.push(selectedAnswer);
  optionColorUpdate()
  // console.log(userAnswers);
  flag = 1;
  // timer=1;
}

function getRandomIndex() {
  const randomValue = Math.floor(Math.random() * questions.length);
  if (questionsAlreadyDisplayed.includes(randomValue)) return getRandomIndex();
  else {
    questionsAlreadyDisplayed.push(randomValue);
    return randomValue;
  }
}

function optionColorUpdate(){
  if(selectedAnswer===CorrectAnswers[CorrectAnswers.length-1]){
    selectedOption.style.backgroundColor='green'
    selectedOption.style.color='white'

  }
  else{
    selectedOption.style.backgroundColor='red'
    selectedOption.style.color='white'

  }
}