document.addEventListener("DOMContentLoaded", function () {
    let questions = [
        {
            question: "Wie wordt door mening van voetballiefhebbers in Nederland gezien als 1 van de beste voetballers die het voetbal ooit heeft voortgebracht? ",
            type: "multiple_choice",
            answers: [
                { text: "Johan Cruyff", correct: true },
                { text: "Frank de Boer", correct: false },
                { text: "Ronald Koeman", correct: false },
                { text: "Edwin van der sar", correct: false },
            ],
            info: "Johan Cruyff wordt door velen beschouwd als een van de beste voetballers aller tijden vanwege zijn buitengewone talent en zijn revolutionaire bijdrage aan het moderne voetbal."
        },
        {
            question: "Wie maakte 1 van de meest bizarre goals in 1998 op het WK zodat Nederland naar de halvefinale ging? ",
            type: "multiple_choice",
            answers: [
                { text: "Jaap Stam", correct: false },
                { text: "Edgar Davids", correct: false },
                { text: "Patrick Kluivert", correct: false },
                { text: "Dennis Bergkamp", correct: true },
            ],
            info: "Dennis bergamp maakte in de laatste minuten van het WK 1998 een pracht goal met een geweldige assist van Frank de Boer, waardoor we op 2-1 kwamen te staan, waardoor Nederland naar de halve finale ging!"
        },
        {
            question: "Wie maakte de winnende goal op het EK in de finale in 1988? ",
            type: "multiple_choice",
            answers: [
                { text: "Ruud Gullit", correct: false },
                { text: "Marco van Basten", correct: true },
                { text: "Ronald Koeman", correct: false },
                { text: "Frank Rijkaard", correct: false },
            ],
            info: "Marco van Basten maakte dw winnende goal tegen Sovjet-Unie op het EK 1988 waardoor Nederland het EK won!"
        },
        {
            question: "Hoeveel goals maakte Nederland in totaal op het WK in 2022? ",
            type: "multiple_choice",
            answers: [
                { text: "13 Goals", correct: false },
                { text: "11 Goals", correct: false },
                { text: "14 Goals", correct: false },
                { text: "10 Goals", correct: true },
            ],
            info: "Op het WK 2022 werden er totaal 10 goals gescoord."
        },
        {
            question: "hoeveel Nederlanders hebben een Ballon d'Or gewonnen? ",
            type: "multiple_choice",
            answers: [
                { text: "3 Nederlanders", correct: true },
                { text: "2 Nederlanders", correct: false },
                { text: "5 Nederlanders", correct: false },
                { text: "4 Nederlanders", correct: false },
            ],
            info: "Johan Cruyff heegt 3 Ballon d'ors gewonnen, Marco van Basten heeft er ook 3 en Ruud Gullit heeft er ook nog 1 toen hij uitkwam voor PSV."
        },
        {
            question: "Net als in 2014 staat Oranje met Louis van Gaal op het WK 2022. Hoeveel verschillende (interim-)bondscoaches zijn er in de tussentijd geweest?",
            type: "multiple_choice",
            answers: [
                { text: "5", correct: false },
                { text: "7", correct: true },
                { text: "3", correct: false },
                { text: "9", correct: false },
            ],
            info: "in de tijd dat Louis van Gaal weg was bij oranje zijn er in de tussentijd 7 bondscoaches geweest. Guus Hiddink (10 wedstrijden), Danny Blind (7 wedstrijden), Fred Grim (3 wedstrijden), Dick Advocaat (7 wedstrijden), Ronald Koeman (20 wedstrijden), Dwight Lodeweges (2 wedstrijden) en Frank de Boer (15 wedstrijden)."
        },
        {
            question: "Hoevaak won Johan Cruyff de Ballon d'Or?",
            type: "multiple_choice",
            answers: [
                { text: "1 keer", correct: false },
                { text: "4 keer", correct: false },
                { text: "3 keer", correct: true },
                { text: "2 keer", correct: false },
            ],
            info: "Johan cruyff won in totaal 3 keer de Ballon D'or. Dat is een uitrijking voor de beste voetballer van het jaar."
        },
        {
            question: "Wanneer won Nederland voor het eerst het Europees kampioenschap voetbal?",
            type: "multiple_choice",
            answers: [
                { text: "1988", correct: true },
                { text: "1980", correct: false },
                { text: "2000", correct: false },
                { text: "1972", correct: false },
            ],
            info: "Het Europees kampioenschap voetbal van 1988 was een gedenkwaardig toernooi voor het Nederlands elftal. Onder leiding van bondscoach Rinus Michels behaalde Nederland de eerste en tot nu toe enige Europese titel in zijn geschiedenis. Het team, geleid door aanvoerder Ruud Gullit en met spelers zoals Marco van Basten, Frank Rijkaard en Ronald Koeman, speelde verbluffend voetbal tijdens het toernooi. Nederland won al zijn groepswedstrijden en versloeg in de halve finale West-Duitsland. In de finale tegen de Sovjet-Unie zorgde Van Basten voor een van de meest memorabele momenten in de voetbalgeschiedenis met zijn spectaculaire volley. Nederland won de finale met 2-0, waarmee het de Europese titel veroverde en zijn plaats in de voetbalgeschiedenis bevestigde."
        },
        {
            question: "Wie was de coach van het Nederlands elftal tijdens het WK 2010 in Zuid-Afrika?",
            type: "multiple_choice",
            answers: [
                { text: "Louis van Gaal", correct: false },
                { text: "Ronald Koeman", correct: false },
                { text: "Dick Advocaat", correct: false },
                { text: "Bert van Marwijk", correct: true },
            ],
            info: "Tijdens het WK 2010 in Zuid-Afrika leidde bondscoach Bert van Marwijk het Nederlands elftal naar een indrukwekkende prestatie. Het team, bestaande uit sterren zoals Wesley Sneijder, Arjen Robben en Robin van Persie, behaalde de finale van het toernooi. Nederland won al zijn groepswedstrijden en versloeg teams zoals Brazilië en Uruguay in de knock-outfase. In de finale stond Nederland tegenover Spanje, maar verloor uiteindelijk met 1-0 in de verlenging door een doelpunt van Andrés Iniesta. Ondanks het verlies bereikte Nederland een historische prestatie door voor het eerst sinds 1978 de finale van een WK te bereiken. Bert van Marwijk wordt geprezen om zijn tactische inzicht en zijn vermogen om het beste uit zijn spelers te halen tijdens het toernooi."
        },
        {
            question: "In welk jaar bereikte het Nederlands elftal voor het eerst de finale van een Wereldkampioenschap voetbal? ",
            type: "multiple_choice",
            answers: [
                { text: "1978", correct: false },
                { text: "1990", correct: false },
                { text: "1974", correct: true },
                { text: "2010", correct: false },
            ],
            info: "Het Nederlands elftal bereikte voor het eerst de finale van een Wereldkampioenschap voetbal in 1974. Onder leiding van bondscoach Rinus Michels stond Nederland in de finale van het WK 1974, gehouden in West-Duitsland. Het team, bekend als 'Oranje' vanwege hun iconische oranje shirts, bestond uit legendarische spelers zoals Johan Cruijff, Johan Neeskens en Ruud Krol. In de finale stond Nederland tegenover West-Duitsland in het Olympisch Stadion in München. Ondanks een vroege voorsprong door een penalty van Johan Neeskens, verloor Nederland uiteindelijk met 2-1 van West-Duitsland. Desondanks was het bereiken van de finale een historische prestatie voor het Nederlandse voetbalteam."
        },
        {
            question: "Wie is de topscorer aller tijden van het Nederlands elftal?",
            type: "open",
            correctAnswers: [{ tekst: "Robin van Persie", correct: true }],
            info: "De inmiddels gestopte Robin van Persie is sinds 2013 topscorer aller tijden van oranje. Hij stootte destijds Patrick Kluivert van de troon, die sinds 2003 bovenaan stond met 40 goals. Interessant feitje is dat Patrick Kluivert assistent-bondscoach was, toen Robin van Persie zijn record verbrak."
        },
        {
            question: " Hoeveel keer heeft het Nederlands elftal de finale van het WK voetbal bereikt? ",
            type: "open",
            correctAnswers: [{ tekst: "3 keer", correct: true }],
            info: "Het Nederlands elftal speelt zijn thuiswedstrijden doorgaans in Amsterdam, Rotterdam of Eindhoven. Nederland won het EK van 1988 en bereikte in 1974, 1978 en 2010 de finale van het WK."
        },
        {
            question: "Wie was de bondscoach van het Nederlands elftal tijdens het WK 2014 in Brazilië?",
            type: "open",
            correctAnswers: [{ tekst: "Louis van Gaal", correct: true }],
            info: "De bondscoach van het Nederlands elftal tijdens het WK 2014 in Brazilië was Louis van Gaal. Onder zijn leiding behaalde Nederland een derde plaats op het toernooi, na een indrukwekkende prestatie en een spannende halve finale tegen Argentinië."
        },
        {
            question: "Welke Nederlandse speler werd uitgeroepen tot de beste speler van het toernooi tijdens het EK 1988?",
            type: "open",
            correctAnswers: [{ tekst: "Marco van Basten", correct: true }],
            info: "Marco van Basten werd uitgeroepen tot de beste speler van het Europees kampioenschap voetbal (EK) in 1988. Van Basten speelde een cruciale rol in het succes van het Nederlands elftal tijdens het toernooi, waar ze de titel wonnen. Zijn indrukwekkende prestaties en doelpunten, waaronder de legendarische volley in de finale tegen de Sovjet-Unie, leverden hem de onderscheiding op als beste speler van het toernooi."
        },
        {
            question: "Hoeveel keer heeft het Nederlands elftal de Europese kampioenschappen gewonnen? ",
            type: "open",
            correctAnswers: [{ tekst: "1 keer", correct: true }],
            info: "Het Nederlands elftal heeft één keer het Europees kampioenschap voetbal (EK) gewonnen. Dit historische moment vond plaats in 1988 tijdens het EK in West-Duitsland. Onder leiding van bondscoach Rinus Michels behaalde Nederland de titel door in de finale de Sovjet-Unie te verslaan met 2-0. Het team, met spelers zoals Ruud Gullit, Marco van Basten en Frank Rijkaard, speelde uitstekend voetbal tijdens het toernooi en veroverde zo de eerste en enige Europese titel in de geschiedenis van het Nederlandse voetbalteam."
        },
    ];

    function shuffleQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
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
        quizInfoDiv.style.display = "none";
        nextButton.style.display = "none";
        questionElement.innerHTML = question.question;
        infoElement.textContent = question.info || "";
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
        } else {
            infoElement.textContent = info;
            infoElement.classList.add("incorrect-info");
        }
        Array.from(answersButton.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.disabled = true;
        });
        quizInfoDiv.style.display = "block";
        nextButton.style.display = "block";
    }

    function handleOpenQuestion(correctAnswers, info) {
        let input = answersButton.querySelector("input");
        let userAnswer = input.value.trim().toLowerCase();
        let isCorrect = correctAnswers.some(correctAnswer => correctAnswer.tekst.toLowerCase() === userAnswer);
        if (isCorrect) {
            input.classList.add("correct-answer");
            score++;
            infoElement.textContent = info;
            infoElement.classList.add("correct-info");
        } else {
            input.classList.add("incorrect-answer");
            infoElement.textContent = info;
            infoElement.classList.add("incorrect-info");
        }
        input.disabled = true;
        quizInfoDiv.style.display = "block";
        nextButton.style.display = "block";
    }

    function resetState() {
        let buttons = document.querySelectorAll(".btn");
        buttons.forEach(button => {
            button.classList.remove("correct", "incorrect");
            button.disabled = false;
        });
        nextButton.style.display = "none";
    }

    function showScore() {
        resetState();
        questionElement.innerHTML = `Je hebt ${score} van de ${questions.length} gescoord!`;
        let scoreTable = document.createElement("table");
        scoreTable.classList.add("score-table");
        let totalScoreRow = document.createElement("tr");
        totalScoreRow.innerHTML = `<td>Totale Score:</td><td>${score}/${questions.length}</td>`;
        scoreTable.appendChild(totalScoreRow);
        let correctAnswersRow = document.createElement("tr");
        correctAnswersRow.innerHTML = `<td>Juiste Antwoorden:</td><td class="correct-answer">${score}</td>`;
        scoreTable.appendChild(correctAnswersRow);
        let incorrectAnswersRow = document.createElement("tr");
        incorrectAnswersRow.innerHTML = `<td>Foute Antwoorden:</td><td class="incorrect-answer">${questions.length - score}</td>`;
        scoreTable.appendChild(incorrectAnswersRow);
        questionElement.appendChild(scoreTable);
        let playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Speel Opnieuw";
        playAgainButton.classList.add("play-again-button");
        playAgainButton.addEventListener("click", function () {
            window.location.href = "frankrijk_quiz_voorpagina.html";
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
        if (currentQuestionIndex < questions.length) {
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