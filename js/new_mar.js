document.addEventListener("DOMContentLoaded", function () {
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
            info: "De huidige bondscoach van het Marokkaanse nationale voetbalteam is Walid Regragui. " +
                "Hij nam het stokje over van Vahid Halilhodžić. " +
                "Regragui heeft een indrukwekkende carrière als speler en is nu verantwoordelijk voor het leiden van het Marokkaanse elftal. " +
                "Hij wordt geprezen als een van de beste trainers van het seizoen 2022-2023. " +
                "Regragui heeft de kans om zijn team te herbouwen en te presteren op de Olympische Spelen van Parijs 2024 en het WK 2026."
        },
        {
            question: "In welk jaar kwalificeerde Marokko zich voor het eerst voor het FIFA Wereldkampioenschap voetbal?",
            type: "multiple_choice",
            answers: [
                {text: "1970", correct: false},
                {text: "1986", correct: true},
                {text: "1998", correct: false},
                {text: "2014", correct: false},
            ],
            info: "Marokko kwalificeerde zich voor het eerst voor het FIFA Wereldkampioenschap voetbal in 1986. " +
                "Dit historische moment maakte Marokko het eerste Afrikaanse land dat op een WK-toernooi groepswinnaar werd. " +
                "Franse nationale team onder leiding van spelers zoals Zinedine Zidane, Didier Deschamps " +
                "Sindsdien heeft Marokko zich nog vijf keer gekwalificeerd voor het WK, met als meest recente prestatie de halve finale op het WK van 2022, waar ze als eerste Afrikaanse land zo ver kwamen"
        },
        {
            question: "Welke Marokkaanse club won de CAF Champions League in 1985?",
            type: "multiple_choice",
            answers: [
                {text: "Wydad Casablanca", correct: true},
                {text: "Raja Casablanca", correct: false},
                {text: "Hassania Agadir", correct: false},
                {text: "FAR Rabat", correct: false},
            ],
            info: "In 1985 won de Marokkaanse club Wydad Casablanca de CAF Champions League. " +
                "Ze behaalden deze prestigieuze titel en toonden hun voetbaltalent op het Afrikaanse continent. " +
                "Met vastberadenheid en teamwork veroverden ze de harten van fans en schreven ze geschiedenis in het Marokkaanse voetbal."
        },
        {
            question: "Wie is de topscorer aller tijden van het Marokkaanse nationale team?",
            type: "multiple_choice",
            answers: [
                {text: "Hassan Akesbi", correct: false},
                {text: "Abdeljalil Hadda", correct: false},
                {text: "Salaheddine Bassir", correct: false},
                {text: "Mustapha Hadji", correct: true},
            ],
            info: "In 1985 veroverde de Marokkaanse club Wydad Casablanca de CAF Champions League, een van de meest prestigieuze voetbaltoernooien op het Afrikaanse continent. " +
                "Met vastberadenheid, teamwork en voetbaltalent stonden ze bovenaan en toonden ze hun kracht " +
                "De overwinning in deze competitie was niet alleen een triomf voor Wydad Casablanca, maar ook voor het Marokkaanse voetbal als geheel."         
        },
        {
            question: "Welke Marokkaanse club won de meeste Botola Pro-titels?",
            type: "multiple_choice",
            answers: [
                {text: "Wydad Casablanca", correct: true},
                {text: "Raja Casablanca", correct: false},
                {text: "Hassania Agadir", correct: false},
                {text: "FAR Rabat", correct: false},
            ],
            info: "De Marokkaanse club met de meeste Botola Pro-titels is Wydad Casablanca. " +
                "Ze hebben maar liefst 22 keer de titel gewonnen in deze professionele voetbalcompetitie in Marokko. " +
                "Wydad Casablanca heeft een rijke geschiedenis en blijft een krachtig team in het Marokkaanse voetbal. "
        },
        {
            question: "Welke Marokkaanse speler staat bekend als 'De Marokkaanse Messi'?",
            type: "multiple_choice",
            answers: [
                {text: "Hakim Ziyech", correct: false},
                {text: "Sofyan Amrabat", correct: false},
                {text: "Youssef En-Nesyri", correct: true},
                {text: "Amine Harit", correct: false},
            ],
            info: "De Marokkaanse speler die bekendstaat als de ‘Marokkaanse Messi’ is Youssef En-Nesyri! " +
                "Zijn vaardigheden op het veld hebben hem deze bijnaam opgeleverd, en hij wordt beschouwd als een van de meest getalenteerde voetballers uit Marokko. " 
        },
        {
            question: "Welke Marokkaanse voetballer wordt beschouwd als een van de grootste Marokkaanse spelers aller tijden en speelde voor Real Madrid en Ajax?",
            type: "multiple_choice",
            answers: [
                {text: "Hassan Akesbi", correct: false},
                {text: "Mustapha Hadji", correct: false},
                {text: "Noureddine Naybet", correct: false},
                {text: "Mohammed Timoumi", correct: true},
            ],
            info: "De Marokkaanse voetballer die wordt beschouwd als een van de grootste Marokkaanse spelers aller tijden en die zowel voor Real Madrid als Ajax heeft gespeeld, is Mohammed Timoumi! " +
                "Zijn indrukwekkende carrière heeft hem een speciale plaats gegeven in de geschiedenis van het Marokkaanse voetbal. " 
        },
        {
            question: "In welk jaar won Marokko de Africa Cup of Nations voor het eerst?",
            type: "multiple_choice",
            answers: [
                {text: "1982", correct: false},
                {text: "1976", correct: true},
                {text: "1998", correct: false},
                {text: "2004", correct: false},
            ],
            info: "Marokko won voor het eerst de Africa Cup of Nations in 1976! " +
                "Dit historische moment markeerde een triomf voor het Marokkaanse voetbal en vulde de harten van fans met trots. " 
        },
        {
            question: "Welke Marokkaanse club won de CAF Champions League in 1985?",
        type: "multiple_choice",
        answers: [
            {text: "Wydad Casablanca", correct: true},
            {text: "Raja Casablanca", correct: false},
            {text: "Hassania Agadir", correct: false},
            {text: "FAR Rabat", correct: false},
        ],
        info: "In 1985 won de Marokkaanse club Wydad Casablanca de CAF Champions League. " +
            "Ze behaalden deze prestigieuze titel en toonden hun voetbaltalent op het Afrikaanse continent. " +
            "Met vastberadenheid en teamwork veroverden ze de harten van fans en schreven ze geschiedenis in het Marokkaanse voetbal."
        },
        {
            question: "Hoeveel keer heeft Marokko deelgenomen aan het FIFA Wereldkampioenschap voetbal?",
            type: "multiple_choice",
            answers: [
                {text: "4 keer", correct: false},
                {text: "5 keer", correct: false},
                {text: "3 keer", correct: true},
                {text: "6 keer", correct: false},
            ],
            info: "Marokko heeft zich tot nu toe drie keer gekwalificeerd voor het FIFA Wereldkampioenschap voetbal. Dit omvat de toernooien van 1970, 1986 en 1998."
        },
        {
            question: "Welke Marokkaanse voetballer staat bekend als 'De Marokkaanse Zidane' ",
            type: "open",
            correctAnswers: [{text: "Youssef En-Nesyri", correct: true}],
            info: "Youssef En-Nesyri wordt vaak beschouwd als 'De Marokkaanse Zidane' vanwege zijn vergelijkbare speelstijl met de Franse voetballegende Zinedine Zidane. En-Nesyri is een talentvolle aanvaller die indruk heeft gemaakt met zijn technische vaardigheden, balcontrole en vermogen om doelpunten te scoren, waardoor hij wordt vergeleken met Zidane. " 
        },
        {
            question: "Welke Marokkaanse club staat bekend als 'De Leeuwen van de Atlas' ?",
            type: "open",
            correctAnswers: [{text: "Raja Casablanca", correct: true}],
            info: "De Marokkaanse club die bekend staat als 'De Leeuwen van de Atlas' is Raja Casablanca. Deze bijnaam weerspiegelt de trots en de kracht van de club, en het symboliseert ook de sterke band met de Marokkaanse nationale ploeg, die ook bekend staat als de Leeuwen van de Atlas. Raja Casablanca heeft een rijke geschiedenis in het Marokkaanse voetbal en heeft vele successen behaald, zowel nationaal als internationaal." 

        },
        {
            question: "Welke Marokkaanse voetballer staat bekend om zijn technische vaardigheden en creatieve spelstijl, en speelt momenteel voor AS Roma in de Serie A?",
            type: "open",
            correctAnswers: [{text: "Achraf Hakimi", correct: true}],
            info: "Achraf Hakimi is een Marokkaanse voetballer die bekend staat om zijn technische vaardigheden en creatieve spelstijl. Hij speelt momenteel voor AS Roma in de Serie A. Hakimi heeft indruk gemaakt met zijn snelheid, dribbelvaardigheden en vermogen om zowel verdedigend als aanvallend bij te dragen aan het spel. " 

        },
        {
            question: "In welk jaar maakte de Marokkaanse voetballegende Mohamed Timoumi deel uit van het Marokkaanse nationale team dat deelnam aan de FIFA Wereldbeker? " +
                "1986",
            type: "open",
            correctAnswers: [{text: "Coupe de France", correct: true}],
            info: "Mohamed Timoumi, een Marokkaanse voetballegende, maakte deel uit van het Marokkaanse nationale team dat deelnam aan de FIFA Wereldbeker in het jaar 1986. Timoumi was een essentieel onderdeel van het team dat geschiedenis schreef door deel te nemen aan het prestigieuze toernooi. " 

        },
        {
            question: "Wie is de recordhouder voor het meeste aantal doelpunten gescoord voor het Marokkaanse nationale voetbalteam?",
            type: "open",
            correctAnswers: [{text: "Ahmed Faras", correct: true}],
            info: "Ahmed Faras is de recordhouder voor het meeste aantal doelpunten gescoord voor het Marokkaanse nationale voetbalteam. Hij wordt beschouwd als een van de grootste Marokkaanse voetballers aller tijden en heeft een indrukwekkende carrière gehad. " 

        },
    ];

    function shuffleQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    questions = shuffleQuestions(questions);

    let questionElement = document.getElementById("question");
    let infoElement = document.getElementById("info");
    let answersButton = document.getElementById("answer-buttons");
    let nextButton = document.getElementById("next-btn");
    let quizInfoDiv = document.querySelector(".quizInfo");

    let currentQuestionIndex = 0;
    let score = 0;

    function displayQuestion(question) {
        // Verberg de quizInfo div en de next-button
        quizInfoDiv.style.display = "none";
        nextButton.style.display = "none";

        questionElement.innerHTML = question.question;
        infoElement.textContent = ""; // Leeg maken van de informatie-div
        while (answersButton.firstChild) {
            answersButton.removeChild(answersButton.firstChild);
        }

        if (question.type === "multiple_choice") {
            question.answers.forEach(answer => {
                let button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answersButton.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = "true";
                }
                button.addEventListener("click", () => selectAnswer(answer.correct, question.info));
            });
        } else if (question.type === "open") {
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Voer een antwoord in";
            input.classList.add("open-question-input");
            answersButton.appendChild(input);

            let submitButton = document.createElement("button");
            submitButton.innerHTML = "Bevestig";
            submitButton.classList.add("btn");
            submitButton.addEventListener("click", () => handleOpenQuestion(question.correctAnswers, question.info));
            answersButton.appendChild(submitButton);
        }
    }


    function selectAnswer(isCorrect, info) {
        if (isCorrect) {
            score++;
            infoElement.textContent = info;
            infoElement.classList.add("correct-info");
            // Laat thumbs-up.gif zien
            quizInfoDiv.innerHTML = `
            <img src="gifs/thumbs-up.gif" alt="Thumbs Up" id="thumbsUp">
            <p id="info">${info}</p>
        `;
        } else {
            infoElement.textContent = info;
            infoElement.classList.add("incorrect-info");
            // Laat thumbs-down.gif zien
            quizInfoDiv.innerHTML = `
            <img src="gifs/thumbs-down.gif" alt="Thumbs Down" id="thumbsDown">
            <p id="info">${info}</p>
        `;
        }
        Array.from(answersButton.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.disabled = true;
        });
        // Laat de quizInfo div en de next-button zien
        quizInfoDiv.style.display = "block";
        nextButton.style.display = "block";
    }

    function handleOpenQuestion(correctAnswers, info) {
        let input = answersButton.querySelector("input");
        let userAnswer = input.value.trim().toLowerCase();
        let isCorrect = correctAnswers.some(correctAnswer => correctAnswer.text.toLowerCase() === userAnswer);
        if (isCorrect) {
            input.classList.add("correct-answer");
            score++;
            infoElement.textContent = info;
            infoElement.classList.add("correct-info");
            // Laat thumbs-up.gif zien
            quizInfoDiv.innerHTML = `
            <img src="gifs/thumbs-up.gif" alt="Thumbs Up" id="thumbsUp">
            <p id="info">${info}</p>
        `;
        } else {
            input.classList.add("incorrect-answer");
            infoElement.textContent = info;
            infoElement.classList.add("incorrect-info");
            // Laat thumbs-down.gif zien
            quizInfoDiv.innerHTML = `
            <img src="gifs/thumbs-down.gif" alt="Thumbs Down" id="thumbsDown">
            <p id="info">${info}</p>
        `;
        }
        input.disabled = true;
        // Laat de quizInfo div en de next-button zien
        quizInfoDiv.style.display = "block";
        nextButton.style.display = "block";
    }

    function resetState() {
        // Reset alle toegevoegde klassen en stijlen van de knoppen
        let buttons = document.querySelectorAll(".btn");
        buttons.forEach(button => {
            button.classList.remove("correct", "incorrect");
            button.disabled = false;
        });

        // Verberg de nextButton
        nextButton.style.display = "none";
    }

    function showScore() {
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
        incorrectAnswersRow.innerHTML = `<td>Foute Antwoorden:</td><td class="incorrect-answer">${questions.length - score}</td>`; // Voeg een klasse toe voor de foute antwoorden
        scoreTable.appendChild(incorrectAnswersRow);

        // Voeg de tabel toe aan het HTML-element
        questionElement.appendChild(scoreTable);

        let playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Speel Opnieuw";
        playAgainButton.classList.add("play-again-button"); // Voeg een klasse toe aan de knop voor styling
        playAgainButton.addEventListener("click", function () {
            window.location.href = "frankrijk_quiz_voorpagina.html"; // Navigeer naar de volgende pagina
        });
        questionElement.appendChild(playAgainButton);

        while (answersButton.firstChild) {
            answersButton.removeChild(answersButton.firstChild);
        }

        nextButton.innerHTML = "Speel Opnieuw"
        nextButton.style.display = "none"
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            displayQuestion(questions[currentQuestionIndex]);
        } else {
            showScore();
            quizInfoDiv.style.display = "none";
        }
    }

    nextButton.addEventListener("click", handleNextButton);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Volgende";
        displayQuestion(questions[currentQuestionIndex]);
    }

    startQuiz();
});