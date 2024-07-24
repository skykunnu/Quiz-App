const start_button=document.querySelector('.start_btn button')
const quiz_box=document.querySelector('.quiz_box')
// if start Quiz button clicked

start_button.onclick=()=>{
quiz_box.classList.add('activeQuiz');
showQues(0)
queCounter(1)
}



let que_count=0;
let bottomQueCounter=1;
let next_btn=document.querySelector('.next_btn')

// if next btn is clicked
next_btn.onclick=()=>{
  if(que_count<questions.length-1){
      que_count++
      bottomQueCounter++
      showQues(que_count)
      queCounter(bottomQueCounter)
  }
  else{
    console.log('Questions completed')
  }
}



// getting questions and its options.
function showQues(index){
    const que_text=document.querySelector('.que_text');
    const option_list=document.querySelector('.option_list');
    let que_tag=`<span>`+ questions[index].Numb +". "+questions[index].Question+`</span>`;
    let option_tag=`<div class="option">`+questions[index].options[0]+`<span></span></div>`
                    +`<div class="option">`+questions[index].options[1]+`<span></span></div>`
                    +`<div class="option">`+questions[index].options[2]+`<span></span></div>`
                    +`<div class="option">`+questions[index].options[3]+`<span></span></div>`;
    que_text.innerHTML=que_tag
    option_list.innerHTML=option_tag

    const option=option_list.querySelectorAll(".option");

    for (let i = 0; i < option.length; i++) {
     option[i].setAttribute("onclick","optionSelected(this)");
    
    }
}

function optionSelected(answer){
    let userAns=answer.textContent
    let correctAns=questions[que_count].Answer
    if(userAns===correctAns){
        answer.classList.add('correct')
        console.log("Answer is correct")
    }
    else{
        answer.classList.add('incorrect')
        console.log("Answer is not correct")
    }
}

// once a user selected disable all the options



function queCounter(index){
    const ques_counter=quiz_box.querySelector('.total_que') // quiz_box instead of document ensures that total_que class is scoped with quiz_box. 
let totalQuesCountTag=`<span><p>`+index+`</p>Of<p>`+questions.length+`</p>Questions</span>`;

ques_counter.innerHTML=totalQuesCountTag

}





















// creating an array and passing the number,questions, options, and answers

let questions=[
    {   
        Numb: 1,
        Question: "What does HTML stand for ?",
        Answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ]
         
    },
    {   
        Numb: 2,
        Question: "What does CSS stand for ?",
        Answer: "Cascading style sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ]
         
    },
    {   
        Numb: 3,
        Question: "What does PHP stand for ?",
        Answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ]
         
    },
    {   
        Numb: 4,
        Question: "What does SQL stand for ?",
        Answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ]
         
    },
    {   
        Numb: 5,
        Question: "What does XML stand for ?",
        Answer: "eXtensible Markup Langauge",
        options: [
            "eXtensible Markup Language",
            "eXtensible Multiple Langauge",
            "eXtra Multi-program Language",
            "eXamine Multiple Language",
        ]
         
    }
    
]
