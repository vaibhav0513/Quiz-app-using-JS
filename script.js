const quizDB = [
  {
    question: "Q1: What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyper Text Language",
    ans: "ans1",
  },
  {
    question: "Q2: What does CSS stand for?",
    a: "Computer Style Sheet",
    b: "Creative Style Sheet",
    c: "Cascading Style Sheet",
    d: "Colorful Style Sheet",
    ans: "ans3",
  },
  {
    question: "Q3: Choose the correct HTML element for the largest heading:",
    a: "<html>",
    b: "<head>",
    c: "<h6>",
    d: "<h1>",
    ans: "ans3",
  },
  {
    question: "Q4: Choose the appropriate data type for this value 5.5",
    a: "int",
    b: "double",
    c: "char",
    d: "string",
    ans: "ans2",
  },
  {
    question: "Q5: What does SQL stand for?",
    a: "Strong Question Language",
    b: "Structured Query Language",
    c: "Structural Query Language",
    d: "System Question Language",
    ans: "ans2",
  },
  {
    question: "Q6: What does PHP stand for?",
    a: "Personal Home Page",
    b: "Personal Hypertext Processor",
    c: "Private Home Page",
    d: "PHP: Hypertext Processor",
    ans: "ans4",
  },
  {
    question:
      "Q7: Which data type is used to create a variable that should store text in Java?",
    a: "myString",
    b: "string",
    c: "txt",
    d: "String",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  // option code
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

//Checkans code
const getCheckAnswer = () => {
  let answer;

  answers.forEach((currAnsElem) => {
    if (currAnsElem.checked) {
      answer = currAnsElem.id;
    }
  });
  return answer;
};
//deselect code
const deselectAll = () => {
  answers.forEach((currAnsElem) => (currAnsElem.checked = false));
};

// option submit code
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++; //next question function
  deselectAll(); //deselect function

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3> Your Scored 😍 ${score} / ${quizDB.length} </h3>
      <button class="btn" onclick="location.reload()"> Play Again</button>
    `;
    showScore.classList.remove("scoreArea");
  }
});
