document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home');
    const quizPage = document.getElementById('quiz');
    const endPage = document.getElementById('end');
    const playButton = document.getElementById('playButton');
    const homeButton = document.getElementById('homeButton');
    const restartButton = document.getElementById('restartButton');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('options');
    const questionNumber = document.getElementById('questionNumber');
    const scoreDisplay = document.getElementById('score');
    const finalScoreDisplay = document.getElementById('finalScore');

    const questions = [
        {
            question: 'Which HTML tag is used to define an inline style?',
            choice1: '<script>',
            choice2: '<css>',
            choice3: '<style>',
            choice4: '<span>',
            answer: 3,
        },
        {
            question: 'Which property is used to change the text color in CSS?',
            choice1: 'text-color',
            choice2: 'font-color',
            choice3: 'text-style',
            choice4: 'color',
            answer: 4,
        },
        {
            question: 'Which of the following is the correct way to comment in HTML?',
            choice1: '// Comment',
            choice2: '<!-- Comment -->',
            choice3: '/* Comment */',
            choice4: '<! Comment>',
            answer: 2,
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    playButton.addEventListener('click', startGame);
    homeButton.addEventListener('click', goHome);
    restartButton.addEventListener('click', startGame);

    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        homePage.style.display = 'none';
        endPage.style.display = 'none';
        quizPage.style.display = 'block';
        loadQuestion();
    }

    function goHome() {
        homePage.style.display = 'block';
        quizPage.style.display = 'none';
        endPage.style.display = 'none';
    }

    function loadQuestion() {
        questionNumber.textContent = currentQuestionIndex + 1;
        questionText.textContent = questions[currentQuestionIndex].question;
        optionsContainer.innerHTML = '';
        const choices = [
            questions[currentQuestionIndex].choice1,
            questions[currentQuestionIndex].choice2,
            questions[currentQuestionIndex].choice3,
            questions[currentQuestionIndex].choice4
        ];
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => checkAnswer(index + 1));
            optionsContainer.appendChild(button);
        });
        scoreDisplay.textContent = score;
    }

    function checkAnswer(selectedIndex) {
        const correctIndex = questions[currentQuestionIndex].answer;
        if (selectedIndex === correctIndex) {
            score++;
            optionsContainer.children[selectedIndex - 1].classList.add('correct');
        } else {
            optionsContainer.children[selectedIndex - 1].classList.add('wrong');
            optionsContainer.children[correctIndex - 1].classList.add('correct');
        }
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        quizPage.style.display = 'none';
        endPage.style.display = 'block';
        finalScoreDisplay.textContent = score;
    }
});
