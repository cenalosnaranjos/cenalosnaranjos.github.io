const verbs = [
    { spanish: "ser/estar", base: "be", past: "was/were", participle: "been" },
    { spanish: "comenzar", base: "begin", past: "began", participle: "begun" },
    { spanish: "romper", base: "break", past: "broke", participle: "broken" },
    { spanish: "traer", base: "bring", past: "brought", participle: "brought" },
    { spanish: "construir", base: "build", past: "built", participle: "built" },
    { spanish: "comprar", base: "buy", past: "bought", participle: "bought" },
    { spanish: "atrapar", base: "catch", past: "caught", participle: "caught" },
    { spanish: "elegir", base: "choose", past: "chose", participle: "chosen" },
    { spanish: "venir", base: "come", past: "came", participle: "come" },
    { spanish: "hacer", base: "do", past: "did", participle: "done" },
    { spanish: "dibujar", base: "draw", past: "drew", participle: "drawn" },
    { spanish: "soñar", base: "dream", past: "dreamt", participle: "dreamt" },
    { spanish: "beber", base: "drink", past: "drank", participle: "drunk" },
    { spanish: "conducir", base: "drive", past: "drove", participle: "driven" },
    { spanish: "comer", base: "eat", past: "ate", participle: "eaten" },
    { spanish: "caer", base: "fall", past: "fell", participle: "fallen" },
    { spanish: "sentir", base: "feel", past: "felt", participle: "felt" },
    { spanish: "pelear", base: "fight", past: "fought", participle: "fought" },
    { spanish: "encontrar", base: "find", past: "found", participle: "found" },
    { spanish: "volar", base: "fly", past: "flew", participle: "flown" },
    { spanish: "olvidar", base: "forget", past: "forgot", participle: "forgotten" },
    { spanish: "obtener", base: "get", past: "got", participle: "gotten" },
    { spanish: "dar", base: "give", past: "gave", participle: "given" },
    { spanish: "ir", base: "go", past: "went", participle: "gone" },
    { spanish: "crecer", base: "grow", past: "grew", participle: "grown" },
    { spanish: "tener", base: "have", past: "had", participle: "had" },
    { spanish: "oir", base: "hear", past: "heard", participle: "heard" },
    { spanish: "esconder", base: "hide", past: "hid", participle: "hidden" },
    { spanish: "golpear", base: "hit", past: "hit", participle: "hit" },
    { spanish: "sostener", base: "hold", past: "held", participle: "held" },
    { spanish: "herir", base: "hurt", past: "hurt", participle: "hurt" },
    { spanish: "guardar", base: "keep", past: "kept", participle: "kept" },
    { spanish: "saber", base: "know", past: "knew", participle: "known" },
    { spanish: "aprender", base: "learn", past: "learnt", participle: "learnt" },
    { spanish: "dejar", base: "leave", past: "left", participle: "left" },
    { spanish: "prestar", base: "lend", past: "lent", participle: "lent" },
    { spanish: "permitir", base: "let", past: "let", participle: "let" },
    { spanish: "perder", base: "lose", past: "lost", participle: "lost" },
    { spanish: "hacer", base: "make", past: "made", participle: "made" },
    { spanish: "significar", base: "mean", past: "meant", participle: "meant" },
    { spanish: "conocer", base: "meet", past: "met", participle: "met" },
    { spanish: "pagar", base: "pay", past: "paid", participle: "paid" },
    { spanish: "poner", base: "put", past: "put", participle: "put" },
    { spanish: "leer", base: "read", past: "read", participle: "read" },
    { spanish: "montar", base: "ride", past: "rode", participle: "ridden" },
    { spanish: "sonar", base: "ring", past: "rang", participle: "rung" },
    { spanish: "correr", base: "run", past: "ran", participle: "run" },
    { spanish: "decir", base: "say", past: "said", participle: "said" },
    { spanish: "ver", base: "see", past: "saw", participle: "seen" },
    { spanish: "vender", base: "sell", past: "sold", participle: "sold" },
    { spanish: "enviar", base: "send", past: "sent", participle: "sent" },
    { spanish: "sacudir", base: "shake", past: "shook", participle: "shaken" },
    { spanish: "brillar", base: "shine", past: "shone", participle: "shone" },
    { spanish: "disparar", base: "shoot", past: "shot", participle: "shot" },
    { spanish: "mostrar", base: "show", past: "showed", participle: "shown" },
    { spanish: "cerrar", base: "shut", past: "shut", participle: "shut" },
    { spanish: "cantar", base: "sing", past: "sang", participle: "sung" },
    { spanish: "sentar", base: "sit", past: "sat", participle: "sat" },
    { spanish: "dormir", base: "sleep", past: "slept", participle: "slept" },
    { spanish: "hablar", base: "speak", past: "spoke", participle: "spoken" },
    { spanish: "gastar", base: "spend", past: "spent", participle: "spent" },
    { spanish: "estar de pie", base: "stand", past: "stood", participle: "stood" },
    { spanish: "robar", base: "steal", past: "stole", participle: "stolen" },
    { spanish: "nadar", base: "swim", past: "swam", participle: "swum" },
    { spanish: "tomar", base: "take", past: "took", participle: "taken" },
    { spanish: "enseñar", base: "teach", past: "taught", participle: "taught" },
    { spanish: "romper", base: "tear", past: "tore", participle: "torn" },
    { spanish: "decir", base: "tell", past: "told", participle: "told" },
    { spanish: "pensar", base: "think", past: "thought", participle: "thought" },
    { spanish: "lanzar", base: "throw", past: "threw", participle: "thrown" },
    { spanish: "entender", base: "understand", past: "understood", participle: "understood" },
    { spanish: "despertar", base: "wake", past: "woke", participle: "woken" },
    { spanish: "vestir", base: "wear", past: "wore", participle: "worn" },
    { spanish: "ganar", base: "win", past: "won", participle: "won" },
    { spanish: "escribir", base: "write", past: "wrote", participle: "written" },
];

// Función para capitalizar la primera letra de un string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomVerbs(num) {
    const shuffled = verbs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function generateTable() {
    const tableBody = document.querySelector("#verbTable tbody");
    const randomVerbs = getRandomVerbs(25); // Cambia aquí el número de verbos

    randomVerbs.forEach(verb => {
        const row = document.createElement("tr");
        // Capitalizamos el verbo en español
        const spanishVerb = capitalizeFirstLetter(verb.spanish);
        row.innerHTML = `
            <td>${spanishVerb}</td>
            <td><input type="text" class="present"></td>
            <td><input type="text" class="past"></td>
            <td><input type="text" class="participle"></td>
        `;
        tableBody.appendChild(row);
    });
}

function evaluate() {
    const tableBody = document.querySelector("#verbTable tbody");
    const rows = tableBody.querySelectorAll("tr");
    let correct = 0;
    let incorrect = 0;

    rows.forEach((row, index) => {
        const verb = verbs[index];
        const present = row.querySelector(".present").value.toLowerCase();
        const past = row.querySelector(".past").value.toLowerCase();
        const participle = row.querySelector(".participle").value.toLowerCase();

        if (present === verb.base && past === verb.past && participle === verb.participle) {
            correct++;
        } else {
            incorrect++;
        }
    });

    const score = (correct / rows.length) * 10;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Correctas: ${correct}</p>
        <p>Incorrectas: ${incorrect}</p>
        <p>Calificación: ${score.toFixed(2)}/10</p>
    `;
}

function downloadPDF() {
    const studentName = document.getElementById("studentName").value;
    const resultDiv = document.getElementById("result").innerHTML;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text(`Resultado de ${studentName}`, 10, 10);
    doc.text(resultDiv, 10, 20);
    doc.save("resultado.pdf");
}

function reloadPage() {
    location.reload();
}

window.onload = generateTable;