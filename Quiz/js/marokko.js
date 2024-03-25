document.addEventListener("DOMContentLoaded", function() {
    let questions = [
        {
            question: "Wie is de huidige coach van het Marokkaanse nationale voetbalteam?",
            type: "multiple_choice",
            answers: [
                {text: "Vahid Halilhodžić", correct: true},
                {text: "Hervé Renard", correct: false},
                {text: "Eric Gerets", correct: false},
                {text: "Jamal Sellami", correct: false},
            ],
            info: "Dit is informatie over de eerste vraag." // Voeg hier de informatie toe voor de eerste vraag
        },
        {
            question: "In welk jaar kwalificeerde Marokko zich voor het eerst voor het FIFA Wereldkampioenschap voetbal?",
            type: "multiple_choice",
            answers: [
                {text: "1970", correct: false},
                {text: "1986", correct: true},
                {text: "1998", correct: false},
                {text: "2014", correct: false},
            ]
        },
        {
            question: "Welke Marokkaanse club won de CAF Champions League in 1985?",
            type: "multiple_choice",
            answers: [
                {text: "Wydad Casablanca", correct: true},
                {text: "Raja Casablanca", correct: false},
                {text: "Hassania Agadir", correct: false},
                {text: "FAR Rabat", correct: false},
            ]
        },
        {
            question: "Wie is de topscorer aller tijden van het Marokkaanse nationale team?",
            type: "multiple_choice",
            answers: [
                {text: "Hassan Akesbi", correct: false},
                {text: "Abdeljalil Hadda", correct: false},
                {text: "Salaheddine Bassir", correct: false},
                {text: "Mustapha Hadji", correct: true},
            ]
        },
        {
            question: "Welke Marokkaanse club won de meeste Botola Pro-titels?",
            type: "multiple_choice",
            answers: [
                {text: "Wydad Casablanca", correct: true},
                {text: "Raja Casablanca", correct: false},
                {text: "Hassania Agadir", correct: false},
                {text: "FAR Rabat", correct: false},
            ]
        },
        {
            question: "Welke Marokkaanse speler staat bekend als 'De Marokkaanse Messi'?",
            type: "multiple_choice",
            answers: [
                {text: "Hakim Ziyech", correct: false},
                {text: "Sofyan Amrabat", correct: false},
                {text: "Youssef En-Nesyri", correct: true},
                {text: "Amine Harit", correct: false},
            ]
        },
        {
            question: "Welke Marokkaanse voetballer wordt beschouwd als een van de grootste Marokkaanse spelers aller tijden en speelde voor Real Madrid en Ajax?",
            type: "multiple_choice",
            answers: [
                {text: "Hassan Akesbi", correct: false},
                {text: "Mustapha Hadji", correct: false},
                {text: "Noureddine Naybet", correct: false},
                {text: "Mohammed Timoumi", correct: true},
            ]
        },
        {
            question: "In welk jaar won Marokko de Africa Cup of Nations voor het eerst?",
            type: "multiple_choice",
            answers: [
                {text: "1982", correct: false},
                {text: "1976", correct: true},
                {text: "1998", correct: false},
                {text: "2004", correct: false},
            ]
        },
        {
            question: "Welke Marokkaanse club won de CAF Champions League in 1997?",
            type: "multiple_choice",
            answers: [
                {text: "Raja Casablanca", correct: true},
                {text: "Wydad Casablanca", correct: false},
                {text: "FAR Rabat", correct: false},
                {text: "Hassania Agadir", correct: false},
            ]
        },
        {
            question: "Hoeveel keer heeft Marokko deelgenomen aan het FIFA Wereldkampioenschap voetbal?",
            type: "multiple_choice",
            answers: [
                {text: "4 keer", correct: false},
                {text: "5 keer", correct: false},
                {text: "3 keer", correct: true},
                {text: "6 keer", correct: false},
            ]
        },
        {
            question: "Noem twee Marokkaanse voetballers die momenteel actief zijn in de Premier League.",
            type: "open",
            correctAnswers: ["Hakim Ziyech, Romain Saïss"]
        },
        {
            question: "Welke Marokkaanse speler staat bekend als 'De Marokkaanse Messi'?",
            type: "open",
            correctAnswers: ["Youssef En-Nesyri"]
        },
        {
            question: "In welk jaar won Marokko voor het eerst de Africa Cup of Nations?",
            type: "open",
            correctAnswers: ["1976"]
        },
        {
            question: "Noem twee Marokkaanse keepers die uitkwamen voor Europese topclubs.",
            type: "open",
            correctAnswers: ["Badou Zaki, Khalid Askri"]
        },
        {
            question: "Welke Marokkaanse club staat bekend als 'De Leeuwen van de Atlas'?",
            type: "open",
            correctAnswers: ["Raja Casablanca"]
        }
    ];
    
    function shuffleQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffel de vragen
    shuffleQuestions(questions);

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
    
    function showQuestion() {
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        // Hieronder voeg je de aanpassingen toe om de vraaginformatie weer te geven
        let questionInfoText = document.getElementById("question-info-text");
        questionInfoText.textContent = currentQuestion.info; // Voeg de informatie toe aan het tekstblok
    
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
})