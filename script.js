document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "COMPLETE THE LYRICS 🎶: KIKIII AND ASHERRRR ______",
            options: ["BOUND BY UNITY", "BOUND BY DESTINY", "BOUND BY ETERNITY", "BOUND BY ANXIETY"],
            correctAnswer: "BOUND BY DESTINY",
            type: 'mcq'
        },
        {
            question: "COMPLETE THE LYRICS 🎶: INTERLOCKING HANDS _____",
            options: ["WE STAY INTERTWINED", "WE DANCE THROUGH THE NIGEAEAEAEAEAEAEA", "WE DANCE THROUGH THE NIGHT", "WE SWING THROUGH THE NIGHT"],
            correctAnswer: "WE DANCE THROUGH THE NIGHT",
            type: 'mcq'
        },
        {
            question: "WHY DO WE LOVE NIGGABABY 👶🏿?",
            options: ["BECAUSE HE IS OUR NIGGACHILD 👶🏿", "CUS HIS CHEEKS LOWK LOOK LIKE BURNT BROWNIES 🤤", "CUS HE IS GOATED 🐐", "IDK 🖕🏿👶🏿🖕🏿"],
            correctAnswer: "CUS HIS CHEEKS LOWK LOOK LIKE BURNT BROWNIES 🤤",
            type: 'mcq'
        },
        {
            question: "WHEN DID BROS MEET 📆?",
            options: ["27/9/24", "25/9/24", "26/9/24", "21/9/24"],
            correctAnswer: "25/9/24",
            type: 'mcq'
        },
        {
            question: "WHERE DID WE FIRST GET MARRIED 💍💍?",
            options: ["TEXTONG", "CALLONG", "ROBLOX", "MINECRAFT"],
            correctAnswer: "MINECRAFT",
            type: 'mcq'
        },
        {
            question: "WHEN IS ASHERINA KHANS BIRTHDAY?",
            options: ["19TH NOVEMBER", "21ST NOVEMBER", "19TH OCTOBER", "22ND NOVEMBER"],
            correctAnswer: "19TH NOVEMBER",
            type: 'mcq'
        },
        {
            question: "IF YOU HAD TO SAVE ME KAKA OR ASHER WHO WOULD YOU SAVE 😨?",
            options: ["KAKA", "HASAN", "ASHER", "ALL OF US CUSS YOURE THE GOOATT 🐐🐐"],
            correctAnswer: "ALL OF US CUSS YOURE THE GOOATT 🐐🐐",
            type: 'mcq'
        },
        {
            question: "WHICH ONE OF THESE IS OUR FAV MEOWJI??",
            options: ["👶🏿", "😈", "💏", "😼"],
            correctAnswer: "😼",
            type: 'mcq'
        },
        {
            question: "WHEN WAS THE FIRST MARRIAGE CERTIFICATE MADE?",
            options: ["OCTOBER", "SEPTEMBER", "NOVEMBER", "DECEMBER"],
            correctAnswer: "NOVEMBER",
            type: 'mcq'
        },
        {
            question: "WHAT IS MY FAVOURITE FODO?",
            options: ["PASTA", "BIRYANI", "NAAN & CHICKEN", "ALIYAH"],
            correctAnswer: "ALIYAH",
            type: 'mcq'
        },
        {
            question: "WHAT SEPERATED US 💔?",
            options: ["THE CAR CRASH", "WE WERE TELEPORTED", "WE BOTH WENT TO RETRIEVE KAKA AND ASHER", "WE DO NAURT WANNA MEET"],
            correctAnswer: "THE CAR CRASH",
            type: 'mcq'
        },
        {
            question: "WHAT ARE OUR ZA CHILDRENS NAMES?",
            options: ["KAKA & ASHER", "KATSU & YUKI", "OPEN & CLOSE", "ALL OF THE ABOVE"],
            correctAnswer: "ALL OF THE ABOVE",
            type: 'mcq'
        },
        {
            question: "WHAT IS MA FAV MARRIAGE CERITIFICATE?",
            options: ["PUFFSARN & ALIPUFF", "GAYSARN & GAYLIYAH", "MINIONSARN & MINIONLIYAH", "THE OG ONE"],
            correctAnswer: "MINIONSARN & MINIONLIYAH",
            type: 'mcq'
        },
        {
            question: "WHO SAID I LOVE YOU FIRST?",
            options: ["HASAN", "ALIYAH"],
            correctAnswer: "ALIYAH",
            type: 'mcq'
        },
        {
            question: "WHAT IS MY FAVORITE INSIDE JOKE OF OURS?",
            options: ["MOISTEST JUGGABABIES", "Stair.", "SHLORPENGORPEN", "I CANT TRINK 😢"],
            correctAnswer: "MOISTEST JUGGABABIES",
            type: 'mcq'
        },
        {
            question: "HOW LONG HAS BRO BEEN COMING FOR?",
            options: ["3 × 10⁸ BILLION YEARS", "∫₀¹1yrdx YEARS", "10¹⁰x10¹⁰ YEARS", "BRO IS RIGGGHTT HERE"],
            correctAnswer: "BRO IS RIGGGHTT HERE",
            type: 'mcq'
        },
        {
            question: "WHEN ARE BROS MEETONG?",
            options: ["2030", "2030", "2030", "2030"],
            correctAnswer: "2030",
            type: 'mcq'
        },
        {
            question: "WHAT IS THE NAME OF THE HIT ROCK ARTIST WE ALL LOVE?",
            options: ["CRISTALSTAR FIRE", "STARLIGHT FIRE", "STARNIGHT FIRE", "STARRY FIRE"],
            correctAnswer: "STARLIGHT FIRE",
            type: 'mcq'
        },
        {
            question: "WHAT DID I FIRST CALL BRO?",
            options: ["TINY BLUD", "OLD BLUD", "YUNG BLUD", "HUGE BLUD"],
            correctAnswer: "YUNG BLUD",
            type: 'mcq'
        },
        {
            question: "WHAT IS MY FAV FLOWER?",
            options: ["CHRYSANTHEMUM", "CHRYSOBALANUS", "CHRYSOJASMINUM", "CHRYSOCEPHALUM"],
            correctAnswer: "CHRYSANTHEMUM",
            type: 'mcq'
        },
        {
            question: "WHAT IS OUR FAV COPIGN MECHANISM WHEN WE MISSU EACHOTHER?",
            options: ["ZENNING", "CRASHING OUT", "WAAAAAAA-ING", "ONE DAY ☝🏿☀️-ING"],
            correctAnswer: "ONE DAY ☝🏿☀️-ING",
            type: 'mcq'
        }
    ];

    const backgroundAnimation = document.getElementById('background-animation');
    const quizContainer = document.getElementById('quiz-container');
    const tulipTrigger = document.getElementById('tulip-trigger');
    const questionNumberDisplay = document.getElementById('question-number-display');
    const questionBox = document.getElementById('question-box');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
    const currentQDisplay = document.getElementById('current-q');
    const confettiContainer = document.getElementById('confetti-container');

    let currentQuestionIndex = 0;
    let heartsInterval;

    const correctAudio = new Audio('win.mp3');
    const incorrectAudio = new Audio('lose.mp3');

    function hideElement(el) {
        if (el) {
             el.classList.add('hidden');
             el.style.pointerEvents = 'none';
        }
    }

    function showElement(el) {
         if (el) {
            el.classList.remove('hidden');
            el.style.pointerEvents = 'auto';
         }
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${100 + Math.random() * 20}vh`;
        heart.style.fontSize = `${10 + Math.random() * 15}px`;
        heart.style.animationDuration = `${10 + Math.random() * 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        backgroundAnimation.appendChild(heart);
        heart.addEventListener('animationend', () => heart.remove());
    }

    function startBackgroundAnimation() {
        if (heartsInterval) clearInterval(heartsInterval);
        backgroundAnimation.innerHTML = '';
        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, Math.random() * 5000);
        }
        heartsInterval = setInterval(createHeart, 1000);
    }

    function stopBackgroundAnimation() {
        if (heartsInterval) clearInterval(heartsInterval);
    }

    function handleOptionClick(event) {
        const selectedButton = event.target;
        const selectedAnswer = selectedButton.textContent;
        const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

        const allOptions = optionsContainer.querySelectorAll('.option');
        allOptions.forEach(btn => btn.disabled = true);

        if (selectedAnswer === correctAnswer) {
            correctAudio.currentTime = 0;
            correctAudio.volume = 1.0;
            correctAudio.play().catch(error => {
                console.error("Error playing correct sound:", error.name, error.message);
            });

            selectedButton.classList.add('correct');
            feedback.textContent = 'RIGHTO! 😘';
            feedback.style.color = 'var(--correct-color)';

            if (currentQuestionIndex === quizData.length - 1) {
                setTimeout(() => {
                     startConfetti();
                }, 1500);
            } else {
                setTimeout(() => {
                    currentQuestionIndex++;
                    showTulipTrigger();
                }, 1500);
            }

        } else {
            incorrectAudio.currentTime = 0;
            incorrectAudio.volume = 1.0;
            incorrectAudio.play().catch(error => {
                 console.error("Error playing incorrect sound:", error.name, error.message);
            });

            selectedButton.classList.add('incorrect');
            feedback.textContent = `😨VRO PROLLY MISCLICKED😨 THE RIGHT OPTION WAS: ${correctAnswer}`;
            feedback.style.color = 'var(--incorrect-color)';
            allOptions.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });

            if (currentQuestionIndex === quizData.length - 1) {
                 setTimeout(() => {
                       if(quizContainer) {
                            quizContainer.innerHTML = `
                                <div class="final-message">
                                    <h2 style="font-family: 'Dancing Script', cursive; font-size: 3em; color: #fff;">Almost There!</h2>
                                    <p style="font-size: 1.5em; color: var(--light-color);">You finished the Anniversary Adventure, but missed the last one!</p>
                                    <p style="margin-top: 20px; font-size: 1.2em;">Still love you lots!</p>
                                </div>
                            `;
                            quizContainer.style.minHeight = 'auto';
                        }
                         const progressText = document.querySelector('.progress-text');
                         if (progressText) progressText.style.display = 'none';
                         stopBackgroundAnimation();
                 }, 3000);
            } else {
                setTimeout(() => {
                     currentQuestionIndex++;
                     showTulipTrigger();
                }, 3000);
            }
        }
    }

    function startConfetti() {
        const colors = ['#e91e63', '#9c27b0', '#f8bbd0', '#fff', '#fbc02d'];
        const numConfetti = 1200;

        stopBackgroundAnimation();

        for (let i = 0; i < numConfetti; i++) {
            createConfettiPiece(colors);
        }

        setTimeout(() => {
            if(quizContainer) {
                quizContainer.innerHTML = `
                    <div class="final-message">
                        <h2 style="font-family: 'Dancing Script', cursive; font-size: 3em; color: #fff;">LEZGOGOGOGOGOGOGAOO❤️‍🔥🗣️🗣️</h2>
                        <p style="font-size: 1.5em; color: var(--light-color);">ZAA QUESTIONS HAVE BENENEN COMPLETED</p>
                        <p style="margin-top: 20px; font-size: 1.2em;">I LOVE YOU MI ALIYAHBABYGIRL 💗</p>
                    </div>
                `;
                quizContainer.style.minHeight = 'auto';
            }
            const progressText = document.querySelector('.progress-text');
            if (progressText) progressText.style.display = 'none';
        }, 2500);
    }

    function createConfettiPiece(colors) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const xStart = Math.random() * 100;
        const duration = 3 + Math.random() * 3;
        const rotation = Math.random() * 720 - 360;
        const horizontalDrift = Math.random() * 40 - 20;

        confetti.style.left = `${xStart}vw`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${8 + Math.random() * 8}px`;
        confetti.style.height = `${5 + Math.random() * 5}px`;
        confetti.style.borderRadius = `${Math.random() > 0.5 ? '50%' : '2px'}`;

        confetti.animate([
            { transform: `translateY(-20vh) translateX(0vw) rotateZ(0deg)`, opacity: 1 },
            { transform: `translateY(120vh) translateX(${horizontalDrift}vw) rotateZ(${rotation}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'linear',
            fill: 'forwards'
        });

        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), duration * 1000);
    }

    function loadQuestion(index) {
        feedback.textContent = '';
        hideElement(tulipTrigger);

        if (currentQDisplay) {
            currentQDisplay.textContent = index + 1;
        } else {
            console.warn("currentQDisplay element not found for progress update.");
        }

        const questionData = quizData[index];

        showElement(questionBox);
        questionText.textContent = questionData.question;
        optionsContainer.innerHTML = '';
        questionData.options.forEach(optionText => {
            const button = document.createElement('button');
            button.classList.add('option');
            button.textContent = optionText;
            button.disabled = false;
            button.addEventListener('click', handleOptionClick);
            optionsContainer.appendChild(button);
        });

        const totalQuestions = quizData.length;
        const progressTextElement = document.querySelector('.progress-text');
        if (progressTextElement) {
            progressTextElement.textContent = `QUESTION ${index + 1} OF ${totalQuestions}`;
            const spanInsideProgress = progressTextElement.querySelector('span#current-q');
            if(spanInsideProgress) spanInsideProgress.textContent = index + 1;
        }
    }

    function showTulipTrigger() {
        hideElement(questionBox);
        showElement(tulipTrigger);
        if (questionNumberDisplay && currentQuestionIndex < quizData.length) {
             questionNumberDisplay.textContent = currentQuestionIndex + 1;
        }
         if (tulipTrigger) {
            tulipTrigger.style.pointerEvents = 'auto';
            tulipTrigger.style.opacity = 1;
         }
    }

    function init() {
        startBackgroundAnimation();
        hideElement(questionBox);
        showElement(tulipTrigger);

        if (questionNumberDisplay) questionNumberDisplay.textContent = '1';
        if (currentQDisplay) currentQDisplay.textContent = '1';

        const totalQuestions = quizData.length;
        const progressTextElement = document.querySelector('.progress-text');
        if (progressTextElement) {
            progressTextElement.textContent = `QUESTION 1 OF ${totalQuestions}`;
            const spanInsideProgress = progressTextElement.querySelector('span#current-q');
            if(spanInsideProgress) spanInsideProgress.textContent = '1';
            else console.warn("Span #current-q inside progress text not found");
        } else {
           console.warn("Progress text element not found.");
        }


        if(tulipTrigger) {
            tulipTrigger.addEventListener('click', () => {
                tulipTrigger.style.pointerEvents = 'none';
                tulipTrigger.style.opacity = 0.5;
                setTimeout(() => {
                    if (currentQuestionIndex < quizData.length) {
                        loadQuestion(currentQuestionIndex);
                    }
                }, 300);
            });
        } else {
            console.error("Tulip trigger element not found!");
        }
    }

    if (!quizContainer || !tulipTrigger || !questionBox || !confettiContainer || !backgroundAnimation) {
        console.error("Essential DOM elements are missing. Check HTML structure and IDs (quiz-container, tulip-trigger, question-box, confetti-container, background-animation).");
        document.body.innerHTML = "<p style='color:red; text-align:center; padding-top: 50px; font-size: 1.5em;'>Error: Could not load the Anniversary Adventure components. Please check the console (F12) for details.</p>";
    } else {
        init();
    }

    function createKissExplosion(x, y) {
        const kissCount = 10;

        for (let i = 0; i < kissCount; i++) {
            const kiss = document.createElement('span');
            kiss.classList.add('kiss-emoji');
            kiss.textContent = '💋👶🏿';

            kiss.style.position = 'fixed';
            kiss.style.left = `${x}px`;
            kiss.style.top = `${y}px`;
            kiss.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
            kiss.style.opacity = 1;
            kiss.style.userSelect = 'none';
            kiss.style.pointerEvents = 'none';
            kiss.style.zIndex = '9998';
            kiss.style.willChange = 'transform, opacity';

            document.body.appendChild(kiss);

            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const duration = 600 + Math.random() * 600;
            const rotation = Math.random() * 360 - 180;

            kiss.animate([
                 { transform: `translate(-50%, -50%) scale(1) rotate(0deg)`, opacity: 1 },
                 { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.5) rotate(${rotation}deg)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out',
                fill: 'forwards'
            });

            setTimeout(() => {
                kiss.remove();
            }, duration);
        }
    }

    document.addEventListener('click', (event) => {
        createKissExplosion(event.clientX, event.clientY);
    });

});


const anniversaryDate = new Date("September 25, 2025 09:00:58");
const countdownContainer = document.getElementById("countdown-container");
const countdownText = document.getElementById("countdown-text");
let countdownInterval;

function updateCountdown() {
    const now = new Date();
    const timeRemaining = anniversaryDate - now;

    if (!countdownContainer || !countdownText) {
        console.error("Countdown elements not found. Stopping timer.");
        if (countdownInterval) clearInterval(countdownInterval);
        return;
    }

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        countdownText.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownText.innerHTML = "Happy Anniversary!";
        if (countdownInterval) clearInterval(countdownInterval);
    }
}

if (countdownContainer && countdownText) {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
} else {
    console.error("Could not start countdown timer - elements missing.");
}