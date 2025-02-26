let currentRound = 1;
let currentQuestionIndex = 0;
let score = 0;
let timer;

const rounds = [
    { title: "Round 1: General Science", questions: [
        { q: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], answer: "H2O" },
        { q: "What planet is known as the Red Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"], answer: "Mars" },
        { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], answer: "Mitochondria" },
        { q: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
        { q: "Which element has the atomic number 1?", options: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"], answer: "Hydrogen" },
        { q: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Brain", "Skin"], answer: "Skin" },
        { q: "What is the chemical formula for table salt?", options: ["NaCl", "H2O", "CO2", "O2"], answer: "NaCl" },
        { q: "How many bones are there in an adult human body?", options: ["206", "205", "210", "199"], answer: "206" },
        { q: "What is the boiling point of water at sea level?", options: ["100°C", "90°C", "110°C", "120°C"], answer: "100°C" },
        { q: "What part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" }
    ], time: 900 },

    { title: "Round 2: General Knowledge", questions: [
        { q: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"], answer: "Harper Lee" },
        { q: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
        { q: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
        { q: "Who was the first man to walk on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
        { q: "What year did India gain independence?", options: ["1945", "1947", "1950", "1937"], answer: "1947" }
    ], time: 900 },

    { title: "Round 3: Logo Identification", questions: [
        { q: "Which company has an apple as its logo?", options: ["Apple", "Microsoft", "Google", "Amazon"], answer: "Apple", image: "apple.png" },
        { q: "Which brand has a swoosh as its logo?", options: ["Adidas", "Nike", "Puma", "Reebok"], answer: "Nike", image: "nike.png" },
        { q: "Which company has a blue bird as its logo?", options: ["Facebook", "Twitter", "Instagram", "LinkedIn"], answer: "Twitter", image: "twitter.png" },
        { q: "Which company is inspired by Nikola Tesla?", options: ["Tesla", "Amazon", "Meta", "Microsoft"], answer: "Tesla", image: "tesla.png" },
        { q: "Which brand is known for the golden arches?", options: ["Burger King", "KFC", "McDonald's", "Subway"], answer: "McDonald's", image: "mcdonalds.png" }
    ], time: 480 }
];

function validateEmail() {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    if (!emailInput) {
        console.error("Email input field not found!");
        return;
    }

    const email = emailInput.value.trim();

    if (email.endsWith("@vit.ac.in") || email.endsWith("@vitstudent.ac.in")) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("quiz-screen").style.display = "block";
        startRound();
    } else {
        errorMessage.textContent = "Please enter a valid VIT email.";
        errorMessage.style.color = "red";
    }
}

function startRound() {
    document.getElementById("round-title").textContent = rounds[currentRound - 1].title;
    currentQuestionIndex = 0;
    startTimer(rounds[currentRound - 1].time);
    showQuestion();
}

function startTimer(duration) {
    let timeRemaining = duration;
    timer = setInterval(() => {
        document.getElementById("timer").textContent = `Time Left: ${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`;
        timeRemaining--;
        if (timeRemaining < 0) {
            clearInterval(timer);
            nextRound();
        }
    }, 1000);
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";
    const questionObj = rounds[currentRound - 1].questions[currentQuestionIndex];

    const questionElement = document.createElement("p");
    questionElement.textContent = questionObj.q;
    questionContainer.appendChild(questionElement);

    if (questionObj.image) {
        const imgElement = document.createElement("img");
        imgElement.src = `${questionObj.image}`;
        imgElement.alt = "Logo";
        questionContainer.appendChild(imgElement);
    }

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        questionContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const questionObj = rounds[currentRound - 1].questions[currentQuestionIndex];
    if (selectedAnswer === questionObj.answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < rounds[currentRound - 1].questions.length) {
        showQuestion();
    } else {
        nextRound();
    }
}

function nextRound() {
    clearInterval(timer);
    if (currentRound < rounds.length) {
        currentRound++;
        startRound();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("final-score").textContent = `Final Score: ${score}`;
}
