document.addEventListener("DOMContentLoaded", function () {
    let questions = [
        {
            question: "Wie is de huidige coach van het Franse nationale voetbalteam?",
            type: "multiple_choice",
            answers: [
                {text: "Didier Deschamps", correct: true},
                {text: "Zinedine Zidane", correct: false},
                {text: "Thierry Henry", correct: false},
                {text: "Laurent Blanc", correct: false},
            ],
            info: "Didier Deschamps is sinds 2012 de coach van het Franse nationale voetbalteam " +
                "Onder zijn leiding won Frankrijk het FIFA Wereldkampioenschap in 2018. Hij staat " +
                "bekend om zijn strategische aanpak en vermogen om eenheid en cohesie binnen het " +
                "team te bevorderen, waardoor Les Bleus een geduchte tegenstander zijn geworden op " +
                "het wereldtoneel van het voetbal."
        },
        {
            question: "In welk jaar won Frankrijk voor het eerst de FIFA Wereldbeker voetbal?",
            type: "multiple_choice",
            answers: [
                {text: "1994", correct: false},
                {text: "1998", correct: true},
                {text: "2002", correct: false},
                {text: "2006", correct: false},
            ],
            info: "Frankrijk behaalde zijn eerste FIFA Wereldbeker in 1998, toen het toernooi werd " +
                "gehouden in Frankrijk. Het toernooi werd gekenmerkt door de dominantie van het " +
                "Franse nationale team onder leiding van spelers zoals Zinedine Zidane, Didier Deschamps " +
                "en Thierry Henry. De overwinning bracht een golf van nationale trots en enthousiasme " +
                "teweeg in Frankrijk en wordt nog steeds beschouwd als een mijlpaal in de geschiedenis " +
                "van het Franse voetbal."
        },
        {
            question: "Welke Franse club won de meeste Ligue 1-titels?",
            type: "multiple_choice",
            answers: [
                {text: "Paris Saint-Germain", correct: true},
                {text: "Olympique de Marseille", correct: false},
                {text: "AS Monaco", correct: false},
                {text: "Saint-Étienne", correct: false},
            ],
            info: "Paris Saint-Germain (PSG) is de meest succesvolle club in de Franse Ligue 1, met " +
                "talloze titels en een dominante aanwezigheid in de Franse voetbalwereld. Opgericht " +
                "in 1970, heeft PSG een rijke geschiedenis van succes en heeft het enkele van 's werelds " +
                "beste spelers aangetrokken, waaronder Zlatan Ibrahimović, Neymar en Kylian Mbappé. " +
                "Hun continue dominantie in de Franse competitie heeft hen een van de meest gevierde " +
                "clubs in Frankrijk gemaakt."
        },
        {
            question: "Wie is de topscorer aller tijden van het Franse nationale team?",
            type: "multiple_choice",
            answers: [
                {text: "Michel Platini", correct: false},
                {text: "Thierry Henry", correct: false},
                {text: "Kylian Mbappé", correct: false},
                {text: "Olivier Giroud", correct: true},
            ],
            info: "Olivier Giroud is de topscorer aller tijden van het Franse nationale team, met " +
                "indrukwekkende prestaties en talloze doelpunten tijdens zijn internationale carrière. " +
                "Geboren in 1986, maakte Giroud zijn debuut voor Frankrijk in 2011 en heeft sindsdien " +
                "consistent gepresteerd op het hoogste niveau van het internationale voetbal. " +
                "Zijn kwaliteiten als doelpuntenmaker en zijn vermogen om cruciale doelpunten " +
                "te scoren hebben hem een prominente plaats gegeven in de geschiedenis van het " +
                "Franse voetbal."
        },
        {
            question: "Welke Franse club won de UEFA Champions League in 1993?",
            type: "multiple_choice",
            answers: [
                {text: "Paris Saint-Germain", correct: false},
                {text: "Olympique Lyonnais", correct: true},
                {text: "Olympique de Marseille", correct: false},
                {text: "AS Monaco", correct: false},
            ],
            info: "Olympique Lyonnais was de eerste Franse club die de UEFA Champions League won, met " +
                "hun triomf in 1993, waarmee ze geschiedenis schreven in het Franse voetbal. Het team, " +
                "onder leiding van coach Raymond Domenech en kapitein Jean-Michel Aulas, versloeg AC " +
                "Milan in een spannende finale om de prestigieuze Europese trofee te veroveren. De " +
                "overwinning betekende een keerpunt voor Lyon en versterkte hun positie als een van " +
                "de topclubs in Frankrijk en Europa."
        },
        {
            question: "Welke Franse voetballer won de Ballon d'Or in 2018?",
            type: "multiple_choice",
            answers: [
                {text: "Antoine Griezmann", correct: false},
                {text: "Kylian Mbappé", correct: false},
                {text: "N'Golo Kanté", correct: false},
                {text: "geen", correct: true},
            ],
            info: "In 2018 werd geen enkele Franse voetballer bekroond met de Ballon d'Or, een jaar " +
                "waarin de prijs naar Luka Modrić ging, een speler van Real Madrid en het Kroatische " +
                "nationale team. Deze uitreiking markeerde een uitzonderlijke prestatie voor Modrić, " +
                "die werd erkend voor zijn buitengewone vaardigheden en leiderschap op het veld gedurende " +
                "het jaar, inclusief zijn rol bij het bereiken van de finale van het FIFA " +
                "Wereldkampioenschap met Kroatië."
        },
        {
            question: "In welk jaar organiseerde Frankrijk voor het eerst het Europees kampioenschap voetbal?",
            type: "multiple_choice",
            answers: [
                {text: "1968", correct: false},
                {text: "1984", correct: false},
                {text: "2000", correct: true},
                {text: "2016", correct: false},
            ],
            info: "Frankrijk organiseerde voor het eerst het Europees kampioenschap voetbal in 1960, " +
                "waarmee het land zijn plaats vestigde als een van de voetbalhoofdsteden van Europa. " +
                "Het toernooi, dat oorspronkelijk bekend stond als het Europacupvoetbal voor landen, " +
                "bracht de beste Europese teams samen voor een spannende competitie om de prestigieuze " +
                "titel. Sindsdien heeft Frankrijk verschillende keren het Europees kampioenschap gehost, " +
                "waaronder het succesvolle toernooi in 1984 en het UEFA Europees kampioenschap in 2016."
        },
        {
            question: "Welke Franse speler staat bekend als 'de Witte Pelé'?",
            type: "multiple_choice",
            answers: [
                {text: "Zinedine Zidane", correct: false},
                {text: "Michel Platini", correct: true},
                {text: "Raymond Kopa", correct: false},
                {text: "Lilian Thuram", correct: false},
            ],
            info: "Michel Platini, een legendarische Franse voetballer, staat bekend als 'de Witte Pelé' " +
                "vanwege zijn ongeëvenaarde vaardigheden en prestaties op het veld. Geboren in 1955, " +
                "domineerde Platini het Europese voetbal tijdens de jaren 1980 en wordt beschouwd als " +
                "een van de grootste middenvelders aller tijden. Zijn indrukwekkende carrière omvatte " +
                "successen met clubs zoals AS Saint-Étienne, Juventus en het Franse nationale team, " +
                "waar hij schitterde als aanvoerder en leidende kracht. Platini's artistieke spel, " +
                "technische bekwaamheid en vermogen om wedstrijden te beslissen, verdienen hem een " +
                "ereplaats in de geschiedenis van het Franse voetbal."
        },
        {
            question: "Hoeveel keer heeft Frankrijk de UEFA European Championship gewonnen?",
            type: "multiple_choice",
            answers: [
                {text: "Een keer", correct: false},
                {text: "twee keer", correct: true},
                {text: "drie keer", correct: false},
                {text: "Nog nooit", correct: false},
            ],
            info: "Frankrijk heeft tweemaal de UEFA European Championship gewonnen, in 1984 en " +
                "2000, waarmee ze hun dominantie in het Europese voetbal bevestigen. De overwinningen " +
                "waren het hoogtepunt van jaren van hard werken en toewijding aan het spel, en " +
                "brachten een golf van nationale trots en vreugde teweeg in het hele land. Met een " +
                "sterke traditie van voetbal en een diepe pool van getalenteerde spelers, blijft " +
                "Frankrijk een kracht om rekening mee te houden in het internationale voetbal en " +
                "een favoriet voor toekomstige Europese kampioenschappen."
        },
        {
            question: "Welke Franse club staat bekend als 'Les Gones'?",
            type: "multiple_choice",
            answers: [
                {text: "Paris Saint-Germain", correct: false},
                {text: "AS Monaco", correct: false},
                {text: "Olympique Lyonnais", correct: true},
                {text: "Olympique de Marseille", correct: false},
            ],
            info: "Olympique Lyonnais staat bekend als 'Les Gones', een bijnaam die hun trotse Franse " +
                "erfgoed weerspiegelt en hun rol als een van de meest succesvolle clubs in Frankrijk. " +
                "Opgericht in 1950, heeft Lyon een rijke geschiedenis van succes in de Franse competitie " +
                "en heeft het meerdere Ligue 1-titels gewonnen. De club heeft ook internationaal succes " +
                "behaald, met diepe runs in toernooien zoals de UEFA Champions League. 'Les Gones' blijven " +
                "een bron van trots en passie voor hun fans en blijven streven naar glorie op het hoogste " +
                "niveau van het voetbal."
        },
        {
            question: "Wie was de topscoorder op het WK 2022 van het Franse elftal?",
            type: "open",
            correctAnswers: [{text: "Kylian Mbappe", correct: true}],
            info: "Kylian Mbappé was de topscorer van het Franse nationale team op het FIFA " +
                "Wereldkampioenschap van 2022. De jonge en talentvolle aanvaller leverde indrukwekkende " +
                "prestaties gedurende het toernooi, waarbij hij cruciale doelpunten scoorde en zijn " +
                "stempel drukte op de wedstrijden. Mbappé's snelheid, behendigheid en doelgerichtheid " +
                "hebben hem tot een van de meest gevreesde aanvallers in het moderne voetbal gemaakt, " +
                "en zijn bijdrage aan het succes van het Franse team op het WK 2022 was onmiskenbaar."
        },
        {
            question: "Hoeveel Ballon d'ors heeft Karim Benzema?",
            type: "open",
            correctAnswers: [{text: "1", correct: true}],
            info: "Karim Benzema heeft één Ballon d'Or ontvangen tijdens zijn voetbalcarrière. De " +
                "prestigieuze prijs, die wordt uitgereikt aan de beste speler ter wereld, erkende " +
                "Benzema's uitzonderlijke talent, prestaties en invloed op het spel. Als een van de " +
                "meest vooraanstaande aanvallers van zijn generatie, heeft Benzema een indrukwekkende " +
                "erelijst opgebouwd, waaronder talloze trofeeën met Real Madrid en zijn bijdrage aan " +
                "het Franse nationale team. Zijn Ballon d'Or-overwinning markeerde een hoogtepunt in " +
                "zijn loopbaan en bevestigde zijn plaats als een van de elitevoetballers ter wereld."
        },
        {
            question: "Wat is de bijnaam van het Franse nationale voetbalteam?",
            type: "open",
            correctAnswers: [{text: "Les Bleus", correct: true}],
            info: "De bijnaam van het Franse nationale voetbalteam is 'Les Bleus', die verwijst naar " +
                "de traditionele blauwe kleur van hun voetbalshirt en hun trots als Franse nationale " +
                "ploeg. De bijnaam is synoniem geworden met het team en wordt gebruikt door fans, media " +
                "en spelers zelf om het team aan te moedigen en te identificeren tijdens internationale " +
                "wedstrijden en toernooien. 'Les Bleus' hebben een rijke geschiedenis van succes en " +
                "glorie op het hoogste niveau van het voetbal en blijven een bron van nationale trots " +
                "en passie voor fans over de hele wereld."
        },
        {
            question: "Hoe heet het bekende Franse voetbaltoernooi dat jaarlijks wordt gehouden en waarbij " +
                "clubs uit verschillende divisies strijden om de titel?",
            type: "open",
            correctAnswers: [{text: "Coupe de France", correct: true}],
            info: "De 'Coupe de France' is een vooraanstaand Frans voetbaltoernooi dat jaarlijks " +
                "plaatsvindt, waarbij clubs uit diverse divisies samenkomen om te strijden om de titel. " +
                "Het werd opgericht in 1917 en staat bekend om zijn inclusiviteit, waardoor zowel amateur- " +
                "als professionele teams kunnen deelnemen. Het toernooi heeft een rijke geschiedenis van " +
                "verrassende resultaten en heroïsche momenten, waardoor het een geliefde traditie is onder " +
                "voetbalfans in Frankrijk. De 'Coupe de France' dient als een viering van het Franse voetbal, " +
                "waarbij clubs van alle niveaus de kans krijgen om te schitteren op het nationale podium."
        },
        {
            question: "Wanneer speelde Frankrijk zijn eerste interland?",
            type: "open",
            correctAnswers: [{text: "1908", correct: true}],
            info: "Frankrijk speelde zijn eerste officiële interland op 1 mei 1904 tegen België. Deze " +
                "historische wedstrijd markeerde het debuut van het Franse nationale voetbalteam op het " +
                "internationale toneel. Hoewel de uitslag van deze wedstrijd niet meer zo prominent in de " +
                "herinnering staat, symboliseert het de start van een rijke voetbalgeschiedenis voor " +
                "Frankrijk. Sinds die eerste interland heeft het Franse nationale team deelgenomen aan " +
                "talloze internationale toernooien en heeft het enkele van 's werelds meest memorabele " +
                "voetbalmomenten voortgebracht, waaronder het winnen van het FIFA Wereldkampioenschap in " +
                "1998 en 2018."
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