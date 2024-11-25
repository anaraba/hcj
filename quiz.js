var questions = [
    {
        question: "Кој е главниот град на Македонија?",
        choices: ["Скопје", "Битола", "Охрид", "Тетово"],
        correctAnswer: 0
    },
    {
        question: "Кој е најголемиот планина во Македонија?",
        choices: ["Шар Планина", "Кораб", "Галичица", "Бистра"],
        correctAnswer: 1
    }
];

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    var question = document.getElementById('question');
    var choices = document.getElementById('choices');
    var q = questions[currentQuestion];
    
    question.textContent = q.question;
    choices.innerHTML = '';
    
    for (var i = 0; i < q.choices.length; i++) {
        var choice = document.createElement('input');
        choice.type = 'radio';
        choice.name = 'choice';
        choice.value = i;
        choices.appendChild(choice);
        choices.innerHTML += q.choices[i] + '<br>';
    }
}

function checkAnswer() {
    var selected = document.querySelector('input[name="choice"]:checked');
    if (selected) {
        var answer = parseInt(selected.value);
        if (answer === questions[currentQuestion].correctAnswer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert('Изберете одговор!');
    }
}

function showResult() {
    var result = document.getElementById('result');
    result.textContent = 'Вашиот резултат е: ' + score + ' од ' + questions.length;
}

window.onload = loadQuestion;
