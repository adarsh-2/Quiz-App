const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my Lord",
        b: "HyperText Markup Language",
        c: "HyperText Makeup Language",
        d: "Human Text Machine Language",
        ans: "ans2"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Software",
        b: "Cascading Style Sheep",
        c: "Cartoon Super Smart",
        d: "Cascading Style Sheet",
        ans: "ans4"
    },
    {
        question: "Q3: What is the full form of JS?",
        a: "JavaScript",
        b: "Jerry Superstar",
        c: "Junior Student",
        d: "Jumping Shoes",
        ans: "ans1"
    },
    {
        question: "Q4: What is the full form of HTTP?",
        a: "HyperText Tutorial Protocol",
        b: "HyperText Transfer Product",
        c: "HyperText Transfer Protocol",
        d: "HyperText Test Protocol",
        ans: "ans3"
    },
    {
        question: "Q5: Which country won 2011 Cricket World Cup?",
        a: "Australia",
        b: "India",
        c: "South Africa",
        d: "New Zealand",
        ans: "ans2"
    },
    {
        question: "Q6: Which of the following is a linear data structure?",
        a: "Array",
        b: "Tree",
        c: "Graph",
        d: "Binary Search Tree",
        ans: "ans1"
    },
    {
        question: "Q7: Which is the 2nd largest country(area wise) in the world?",
        a: "USA",
        b: "China",
        c: "Canada",
        d: "Brazil",
        ans: "ans3"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const innerDiv = document.querySelector('.inner-div');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    question.innerHTML = quizDB[questionCount].question;
    option1.innerHTML = quizDB[questionCount].a;
    option2.innerHTML = quizDB[questionCount].b;
    option3.innerHTML = quizDB[questionCount].c;
    option4.innerHTML = quizDB[questionCount].d;
} 

loadQuestion();

const getCheckedAnswer = () =>{
    let answer;

    answers.forEach((curAnsElement) => {
        if(curAnsElement.checked){
            answer = curAnsElement.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElement) => curAnsElement.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans)
    score++;

    questionCount++;

    if(questionCount==quizDB.length-1)
    submit.innerHTML = "Submit";

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length}</h3>
            <button class = "btn" onclick = "location.reload()">Play Again</button> 
        `;

        showScore.classList.remove('scoreArea');
        if(showScore.classList.contains('scoreArea')==false)
        innerDiv.classList.add('scoreArea')
    }
});