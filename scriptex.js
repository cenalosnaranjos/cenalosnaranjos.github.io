const questions = [
    // Adición y sustracción de fracciones
    { pregunta: "¿Cuánto es 2/3 + 1/6?", opciones: ["5/6", "1/2", "2/3"], correcta: "5/6" },
    { pregunta: "¿Cuánto es 3/4 - 2/5?", opciones: ["7/20", "11/20", "1/2"], correcta: "7/20" },
    { pregunta: "¿Cuánto es 5/8 + 3/16?", opciones: ["11/16", "13/16", "10/16"], correcta: "13/16" },

    // Multiplicación de fracciones
    { pregunta: "(-1/4) * (-2/3) es igual a:", opciones: ["1/6", "-1/6", "1/3"], correcta: "1/6" },
    { pregunta: "¿Cuánto es (3/5) * (4/7)?", opciones: ["12/35", "12/25", "7/20"], correcta: "12/35" },
    { pregunta: "¿Cuál es el resultado de (-2/9) * (3/4)?", opciones: ["-1/6", "2/6", "-5/12"], correcta: "-1/6" },

    // División de fracciones
    { pregunta: "(-3/4) ÷ (1/2) da:", opciones: ["-3/2", "-2/3", "3/2"], correcta: "-3/2" },
    { pregunta: "(5/6) ÷ (2/3) es igual a:", opciones: ["5/4", "4/5", "2/9"], correcta: "5/4" },
    { pregunta: "¿Cuánto es (3/8) ÷ (9/4)?", opciones: ["1/6", "1/12", "2/5"], correcta: "1/6" },

    // Potenciación con fracciones
    { pregunta: "El cuadrado de 2/3 es:", opciones: ["4/9", "2/3", "8/27"], correcta: "4/9" },
    { pregunta: "(-3/5)^2 es igual a:", opciones: ["9/25", "-9/25", "3/25"], correcta: "9/25" },
    { pregunta: "(-2/3)^3 da como resultado:", opciones: ["-8/27", "8/27", "-2/9"], correcta: "-8/27" },

    // Radicación con fracciones
    { pregunta: "¿La raíz cuadrada de 1/4 es?", opciones: ["1/2", "1/4", "2"], correcta: "1/2" },
    { pregunta: "¿Cuál es la raíz cúbica de 8/27?", opciones: ["2/3", "1/3", "2/9"], correcta: "2/3" },
    { pregunta: "¿Qué es √(16/25)?", opciones: ["4/5", "5/4", "1/25"], correcta: "4/5" },

    // Operaciones combinadas
    { pregunta: "Resuelve: (2/3 + 1/2) * 3/4:", opciones: ["7/12", "3/4", "5/12"], correcta: "7/12" },
    { pregunta: "(3/4 - 1/3) ÷ 2/5 es igual a:", opciones: ["25/24", "5/12", "15/24"], correcta: "25/24" },
    { pregunta: "((1/2) * (3/4)) + (2/3) es igual a:", opciones: ["17/12", "13/12", "7/6"], correcta: "17/12" }
];

let timer = 7200; // 2 horas en segundos
let score = 0;

// Temporizador
function startTimer() {
    const timerElement = document.getElementById("timer");
    const interval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(interval);
            finishExam();
        } else {
            timer--;
            const hours = Math.floor(timer / 3600);
            const minutes = Math.floor((timer % 3600) / 60);
            const seconds = timer % 60;
            timerElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}

// Generar preguntas
function generateQuestions() {
    const container = document.getElementById("questions-container");
    questions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.className = "question";

        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.pregunta}`;
        questionBlock.appendChild(questionText);

        q.opciones.forEach(option => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question-${index}`;
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionBlock.appendChild(label);
        });

        container.appendChild(questionBlock);
    });
}

// Finalizar examen
function finishExam() {
    const studentName = document.getElementById("student-name").value || "Estudiante Desconocido";
    const answers = document.querySelectorAll("input[type=radio]:checked");
    answers.forEach((answer, index) => {
        if (answer.value === questions[index].correcta) {
            score++;
        }
    });

    const grade = (score / questions.length) * 10;
    const resultText = `Estudiante: ${studentName}\nCalificación: ${grade.toFixed(2)}/10\nErrores: ${questions.length - score}`;
    const resultElement = document.getElementById("student-result");
    resultElement.textContent = resultText;

    document.getElementById("results").style.display = "block";
}

// Inicialización
document.getElementById("submit-btn").addEventListener("click", finishExam);
startTimer();
generateQuestions();
