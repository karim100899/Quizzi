document.addEventListener("DOMContentLoaded", function() {
let questions = [
    {
        question: "Wie is de huidige coach van het Franse nationale voetbalteam?",
        type: "multiple_choice",
        answers: [
            {text: "Didier Deschamps", correct: true},
            {text: "Zinedine Zidane", correct: false},
            {text: "Thierry Henry", correct: false},
            {text: "Laurent Blanc", correct: false},
        ]
    },
    {
        question: "In welk jaar won Frankrijk voor het eerst de FIFA Wereldbeker voetbal?",
        type: "multiple_choice",
        answers: [
            {text: "1994", correct: false},
            {text: "1998", correct: true},
            {text: "2002", correct: false},
            {text: "2006", correct: false},
        ]
    },
    {
        question: "Welke Franse club won de meeste Ligue 1-titels?",
        type: "multiple_choice",
        answers: [
            {text: "Paris Saint-Germain", correct: true},
            {text: "Olympique de Marseille", correct: false},
            {text: "AS Monaco", correct: false},
            {text: "Saint-Étienne", correct: false},
        ]
    },
    {
        question: "Wie is de topscorer aller tijden van het Franse nationale team?",
        type: "multiple_choice",
        answers: [
            {text: "Michel Platini", correct: false},
            {text: "Thierry Henry", correct: false},
            {text: "Kylian Mbappé", correct: false},
            {text: "Olivier Giroud", correct: true},
        ]
    },
    {
        question: "Welke Franse club won de UEFA Champions League in 1993?",
        type: "multiple_choice",
        answers: [
            {text: "Paris Saint-Germain", correct: false},
            {text: "Olympique Lyonnais", correct: true},
            {text: "Olympique de Marseille", correct: false},
            {text: "AS Monaco", correct: false},
        ]
    },
    {
        question: "Welke Franse voetballer won de Ballon d'Or in 2018?",
        type: "multiple_choice",
        answers: [
            {text: "Antoine Griezmann", correct: false},
            {text: "Kylian Mbappé", correct: false},
            {text: "N'Golo Kanté", correct: false},
            {text: "geen", correct: true},
        ]
    },
    {
        question: "In welk jaar organiseerde Frankrijk voor het eerst het Europees kampioenschap voetbal?",
        type: "multiple_choice",
        answers: [
            {text: "1968", correct: false},
            {text: "1984", correct: false},
            {text: "2000", correct: true},
            {text: "2016", correct: false},
        ]
    },
    {
        question: "Welke Franse speler staat bekend als 'de Witte Pelé'?",
        type: "multiple_choice",
        answers: [
            {text: "Zinedine Zidane", correct: false},
            {text: "Michel Platini", correct: true},
            {text: "Raymond Kopa", correct: false},
            {text: "Lilian Thuram", correct: false},
        ]
    },
    {
        question: "Hoeveel keer heeft Frankrijk de UEFA European Championship gewonnen?",
        type: "multiple_choice",
        answers: [
            {text: "Een keer", correct: false},
            {text: "twee keer", correct: true},
            {text: "die keer", correct: false},
            {text: "Nog nooit", correct: false},
        ]
    },
    {
        question: "Welke Franse club staat bekend als 'Les Gones'?",
        type: "multiple_choice",
        answers: [
            {text: "Paris Saint-Germain", correct: false},
            {text: "AS Monaco", correct: false},
            {text: "Olympique Lyonnais", correct: true},
            {text: "Olympique de Marseille", correct: false},
        ]
    },
    {
        question: "Noem drie spelers die deel uitmaken van het huidige Franse nationale basis elftal.",
        type: "open",
        correctAnswers: ["Kolo Muani, Kylian Mbappé, Antoine Griezmann, Kingsley Coman, Adrien Rabiot, Aurélien Tchouaméni, Theo Hernández, Dayot Upamecano, Ibrahima Konaté, Jules Koundé, Mike Maignan"]
    },
    {
        question: "Geef twee Franse clubs die hebben deelgenomen aan de UEFA Champions League-finale.",
        type: "open",
        correctAnswers: ["Paris Saint-Germain (PSG), Olympique de Marseille"]
    },
    {
        question: "Wat is de bijnaam van het Franse nationale voetbalteam?",
        type: "open",
        correctAnswers: ["Les Bleus"]
    },
    {
        question: "Noem twee stadions in Frankrijk die hebben gediend als locaties voor de FIFA Wereldbeker.",
        type: "open",
        correctAnswers: ["Stade de France, Stade Vélodrome"]
    },
    {
        question: "Wie was de topscorer van het Franse nationale team tijdens het FIFA Wereldkampioenschap van 2018?",
        type: "open",
        correctAnswers: ["Antoine Griezmann"]
    },
];

let questionElement = document.getElementById("question");
let answersButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Volgende";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }   

    if (currentQuestion.type === "multiple_choice") {
        // Weergeven van multiple-choice vragen
        currentQuestion.answers.forEach(answer => {
            let button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answersButton.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click", selectAnswer);
        });
    } else if (currentQuestion.type === "open") {
        // Weergeven van open vragen
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Voer een antwoord in";
        input.classList.add("open-question-input");
        answersButton.appendChild(input);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Bevestig";
        submitButton.classList.add("btn");
        submitButton.addEventListener("click", function() {
            let userAnswer = input.value.trim().toLowerCase();
            let correct = currentQuestion.correctAnswers.some(correctAnswer => correctAnswer.toLowerCase() === userAnswer);
            selectAnswer(correct);
        });
        answersButton.appendChild(submitButton);
    }
}

function selectAnswer(e){
    let selecedtButton = e.target;
    let isCorrect = selecedtButton.dataset.correct === "true";
    if(isCorrect){
        selecedtButton.classList.add("correct");
        score++;
    }
    else{
        selecedtButton.classList.add("incorrect")
    }
    Array.from(answersButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
        nextButton.style.display = "block";
    })
}

function resetState() {
    // Verwijder alle toegevoegde klassen en stijlen van de knoppen
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });

    // Verberg de nextButton
    nextButton.style.display = "none";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Je hebt ${score} van de ${questions.length} gescoord!`;    

    let scoreTable = document.createElement("table");
    scoreTable.classList.add("score-table"); // Voeg een klasse toe aan de tabel voor styling

    // Voeg een rij toe voor de totale score
    let totalScoreRow = document.createElement("tr");
    totalScoreRow.innerHTML = `<td>Totale Score:</td><td>${score}/${questions.length}</td>`;
    scoreTable.appendChild(totalScoreRow);

    // Voeg een rij toe voor de juiste antwoorden
    let correctAnswersRow = document.createElement("tr");
    correctAnswersRow.innerHTML = `<td>Juiste Antwoorden:</td><td class="correct-answer">${score}</td>`; // Voeg een klasse toe voor de goede antwoorden
    scoreTable.appendChild(correctAnswersRow);

    // Voeg een rij toe voor de foutieve antwoorden
    let incorrectAnswersRow = document.createElement("tr");
    incorrectAnswersRow.innerHTML = `<td>Foutieve Antwoorden:</td><td class="incorrect-answer">${questions.length - score}</td>`; // Voeg een klasse toe voor de foute antwoorden
    scoreTable.appendChild(incorrectAnswersRow);

    // Voeg de tabel toe aan het HTML-element
    questionElement.appendChild(scoreTable);

    let playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Speel Opnieuw";
    playAgainButton.classList.add("play-again-button"); // Voeg een klasse toe aan de knop voor styling
    playAgainButton.addEventListener("click", function() {
        window.location.href = "frankrijk_quiz_voorpagina.html"; // Navigeer naar de volgende pagina
    }); 
    questionElement.appendChild(playAgainButton);

    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }

    nextButton.innerHTML = "Speel Opnieuw"
    nextButton.style.display = "none"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz()
});