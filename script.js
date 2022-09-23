var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var startQuiz = document.getElementById("start-quiz");
var submit = document.getElementById("submit");
var Rules = document.getElementById("Rules");

var initials = document.getElementById("initials");
var score = document.getElementById("score");
var highscores = document.getElementById("highscores");

var timer = document.getElementById("countdown");
var count = 1;
var timeLeft = 55;
var games = [];

//Questions, answers, correct answer
const theQuestions = [
{
question: "Highest Lifetime Gross Movie 🎬:",
answers: {
1: "🕷 Avengers: Endgame 🕷",
2: "☯ Avatar ☯",
3: "🚢 Titantic 🚢",
4: "🛸 Any Star Wars 🛸",
},
correctAnswer: "☯ Avatar ☯",
},
  
{
question:
"Funniest Actor/Actress:",
answers: {
1: "Adam Sandler",
2: "Eddie Murphy",
3: "Robin Williams",
4: "Will Farrell",
},
correctAnswer: "Adam Sandler",
},
  
{
question: "When was discord released to the public:",
answers: {
1: "May 13, 2009",
2: "May 13, 2011",
3: "May 13, 2013",
4: "May 13, 2015",
},
correctAnswer: "May 13, 2015",
},
  
{
question:
"Who is 'You-Know-Who?' ",
answers: {
1: "🎅🏻 Santa-Clause 🎅🏻",
2: "🏈 Randy Moss 🏈",
3: "🧑🏿‍🎤 Kanye West 🎤🧑🏿",
4: "😤 Voldemort 👩‍🦲",
},
correctAnswer: "😤 Voldemort 👩‍🦲",
},
  
{
question:
"The best candy ever is: (and its not even close 😉)",
answers: {
1: "🍬 Skittles 🍬",
2: "🍪 Reese's Peanut Butter Cups 🍪",
3: "💊 Mike-n-Ikes 💊",
4: "🍫 Twix 🍫",
},
correctAnswer: "💊 Mike-n-Ikes 💊",
},
];
  
  //Event Listener for Rules Button(qol)
Rules.addEventListener("click", function (event) {
alert("Your score will be the remaining time after the 5th question is answered, or time runs out. for every WRONG guess, 8 SECONDS are deducted. Press the 'Start' button when you are ready for your test. Good luck Friend!")
})
  
  //Event listener to start timer and load questions
startQuiz.addEventListener("click", function() {
countdown();
loadQuestions(theQuestions[0]);
startQuiz.style.display = 'none';
});
  
function countdown() {
var timeInterval = setInterval(function () {
if (timeLeft > 1 && count !== 5) {
timer.textContent = timeLeft;
timeLeft--;
} else {
clearInterval(timeInterval);
}
}, 1000);
}
//question reply
questions.addEventListener("click", function (event) {
if (count === 5) {
answers.textContent = "Game Over 😢";
score.textContent = timeLeft + 1;
} else if (
event.target.textContent !== theQuestions[count - 1].correctAnswer
) {
answers.textContent = "INCORRECT❌, TRY AGAIN.";
timeLeft -= 7;
} else {
answers.textContent = "CORRECT✔️!";
count++;
loadQuestions(theQuestions[count - 1]);
}
});
  
  
function loadQuestions(currentQuestion) {
questions.innerHTML = "";
  
    
var questionTitle = document.createElement("p");
var answerList = document.createElement("ol");
var answerItem1 = document.createElement("li");
var answerItem2 = document.createElement("li");
var answerItem3 = document.createElement("li");
var answerItem4 = document.createElement("li");
  
questionTitle.textContent = currentQuestion.question;
answerItem1.textContent = currentQuestion.answers[1];
answerItem2.textContent = currentQuestion.answers[2];
answerItem3.textContent = currentQuestion.answers[3];
answerItem4.textContent = currentQuestion.answers[4];
  
answerList.append(answerItem1);
answerList.append(answerItem2);
answerList.append(answerItem3);
answerList.append(answerItem4);
questions.append(questionTitle);
questions.append(answerList);
}
  
submit.addEventListener("click", function (event) {
event.preventDefault();
var game = {
initials: initials.value.trim(),
score: timeLeft + 1,
};
games.push(game);
storeGames();
loadGames();
});
  
function loadGames() {
for (var i = 0; i < games.length; i++) {
var highScore = document.createElement("li");
highScore.textContent = games[i].initials + " " + games[i].score;
highscores.append(highScore);
}}
  
function storeGames() {
localStorage.setItem("games", JSON.stringify(games));
}

