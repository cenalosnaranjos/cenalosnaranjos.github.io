document.getElementById('iniciar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const tabla = parseInt(document.getElementById('tabla').value);
    
    if (nombre && tabla) {
        document.getElementById('preguntas').classList.remove('hidden');
        generarPreguntas(tabla);
    } else {
        alert('Por favor, ingresa tu nombre y selecciona una tabla.');
    }
});

document.getElementById('calificar').addEventListener('click', function() {
    const respuestas = document.querySelectorAll('.respuesta');
    let correctas = 0;
    let incorrectas = 0;
    
    respuestas.forEach(respuesta => {
        const pregunta = respuesta.dataset.pregunta;
        const resultadoCorrecto = parseInt(respuesta.dataset.resultado);
        const respuestaUsuario = parseInt(respuesta.value);
        
        if (respuestaUsuario === resultadoCorrecto) {
            correctas++;
        } else {
            incorrectas++;
        }
    });
    
    const nombre = document.getElementById('nombre').value;
    const mensaje = `${nombre}, has respondido ${correctas} correctamente y te has equivocado en ${incorrectas}.`;
    
    document.getElementById('mensaje-resultado').textContent = mensaje;
    document.getElementById('resultado').classList.remove('hidden');
    
    // Guardar resultado para descarga
    window.resultadoDescarga = {
        nombre: nombre,
        correctas: correctas,
        incorrectas: incorrectas
    };
});

document.getElementById('descargar').addEventListener('click', function() {
    const resultado = window.resultadoDescarga;
    const contenido = `Nombre: ${resultado.nombre}\nCorrectas: ${resultado.correctas}\nIncorrectas: ${resultado.incorrectas}`;
    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultado.txt';
    a.click();
    URL.revokeObjectURL(url);
});

function generarPreguntas(tabla) {
    const listaPreguntas = document.getElementById('lista-preguntas');
    listaPreguntas.innerHTML = '';
    
    for (let i = 1; i <= 12; i++) {
        const pregunta = document.createElement('div');
        pregunta.innerHTML = `
            <label>${tabla} x ${i} = </label>
            <input type="number" class="respuesta" data-pregunta="${i}" data-resultado="${tabla * i}">
        `;
        listaPreguntas.appendChild(pregunta);
    }
}
document.getElementById('iniciar').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const tabla = parseInt(document.getElementById('tabla').value);

    if (nombre && tabla) {
        document.getElementById('preguntas').classList.remove('hidden');
        generarPreguntas(tabla);
    } else {
        alert('Por favor, ingresa tu nombre y selecciona una tabla.');
    }
});

document.getElementById('calificar').addEventListener('click', function () {
    const respuestas = document.querySelectorAll('.respuesta');
    let correctas = 0;
    let incorrectas = 0;
    const errores = [];

    respuestas.forEach(respuesta => {
        const pregunta = parseInt(respuesta.dataset.pregunta);
        const resultadoCorrecto = parseInt(respuesta.dataset.resultado);
        const respuestaUsuario = parseInt(respuesta.value);

        if (respuestaUsuario === resultadoCorrecto) {
            correctas++;
        } else {
            incorrectas++;
            errores.push(`En ${respuesta.dataset.tabla} x ${pregunta}, respondiste ${respuestaUsuario} (Correcto: ${resultadoCorrecto})`);
        }
    });

    const nombre = document.getElementById('nombre').value;
    const mensaje = `${nombre}, has respondido ${correctas} correctamente y te has equivocado en ${incorrectas}.`;

    document.getElementById('mensaje-resultado').textContent = mensaje;
    document.getElementById('resultado').classList.remove('hidden');

    // Guardar resultado para descarga
    window.resultadoDescarga = {
        nombre: nombre,
        correctas: correctas,
        incorrectas: incorrectas,
        errores: errores
    };
});

document.getElementById('descargar').addEventListener('click', function () {
    const resultado = window.resultadoDescarga;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título del PDF
    doc.setFontSize(18);
    doc.text("Resultado de la Evaluación", 10, 10);

    // Nombre del estudiante
    doc.setFontSize(12);
    doc.text(`Nombre: ${resultado.nombre}`, 10, 20);

    // Resultados
    doc.text(`Respuestas correctas: ${resultado.correctas}`, 10, 30);
    doc.text(`Respuestas incorrectas: ${resultado.incorrectas}`, 10, 40);

    // Errores
    doc.text("Errores:", 10, 50);
    let y = 60;
    resultado.errores.forEach((error, index) => {
        doc.text(`${index + 1}. ${error}`, 10, y);
        y += 10;
    });

    // Guardar el PDF
    doc.save(`resultado_${resultado.nombre}.pdf`);
});

document.getElementById('volver-inicio').addEventListener('click', function () {
    // Ocultar resultados y preguntas
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('preguntas').classList.add('hidden');

    // Limpiar campos
    document.getElementById('nombre').value = '';
    document.getElementById('tabla').value = '1';
    document.getElementById('lista-preguntas').innerHTML = '';
});

function generarPreguntas(tabla) {
    const listaPreguntas = document.getElementById('lista-preguntas');
    listaPreguntas.innerHTML = '';

    for (let i = 1; i <= 12; i++) {
        const pregunta = document.createElement('div');
        pregunta.innerHTML = `
            <label>${tabla} x ${i} = </label>
            <input type="number" class="respuesta" data-pregunta="${i}" data-resultado="${tabla * i}" data-tabla="${tabla}">
        `;
        listaPreguntas.appendChild(pregunta);
    }
}
document.getElementById('iniciar').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const tabla = parseInt(document.getElementById('tabla').value);

    if (nombre && tabla) {
        document.getElementById('preguntas').classList.remove('hidden');
        generarPreguntas(tabla);
    } else {
        alert('Por favor, ingresa tu nombre y selecciona una tabla.');
    }
});

document.getElementById('calificar').addEventListener('click', function () {
    const respuestas = document.querySelectorAll('.respuesta');
    let correctas = 0;
    let incorrectas = 0;
    const errores = [];

    respuestas.forEach(respuesta => {
        const pregunta = parseInt(respuesta.dataset.pregunta);
        const resultadoCorrecto = parseInt(respuesta.dataset.resultado);
        const respuestaUsuario = parseInt(respuesta.value);

        if (respuestaUsuario === resultadoCorrecto) {
            correctas++;
        } else {
            incorrectas++;
            errores.push(`En ${respuesta.dataset.tabla} x ${pregunta}, respondiste ${respuestaUsuario} (Correcto: ${resultadoCorrecto})`);
        }
    });

    // Calcular la calificación sobre 10
    const calificacion = ((correctas / 12) * 10).toFixed(2); // 12 preguntas en total

    const nombre = document.getElementById('nombre').value;
    const mensaje = `${nombre}, has respondido ${correctas} correctamente y te has equivocado en ${incorrectas}. Tu calificación es ${calificacion}/10.`;

    document.getElementById('mensaje-resultado').textContent = mensaje;
    document.getElementById('resultado').classList.remove('hidden');

    // Guardar resultado para descarga
    window.resultadoDescarga = {
        nombre: nombre,
        correctas: correctas,
        incorrectas: incorrectas,
        calificacion: calificacion,
        errores: errores
    };
});

document.getElementById('descargar').addEventListener('click', function () {
    const resultado = window.resultadoDescarga;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título del PDF
    doc.setFontSize(18);
    doc.text("Resultado de la Evaluación", 10, 10);

    // Nombre del estudiante
    doc.setFontSize(12);
    doc.text(`Nombre: ${resultado.nombre}`, 10, 20);

    // Resultados
    doc.text(`Respuestas correctas: ${resultado.correctas}`, 10, 30);
    doc.text(`Respuestas incorrectas: ${resultado.incorrectas}`, 10, 40);
    doc.text(`Calificación: ${resultado.calificacion}/10`, 10, 50);

    // Errores
    doc.text("Errores:", 10, 60);
    let y = 70;
    resultado.errores.forEach((error, index) => {
        doc.text(`${index + 1}. ${error}`, 10, y);
        y += 10;
    });

    // Guardar el PDF
    doc.save(`resultado_${resultado.nombre}.pdf`);
});

document.getElementById('volver-inicio').addEventListener('click', function () {
    // Ocultar resultados y preguntas
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('preguntas').classList.add('hidden');

    // Limpiar campos
    document.getElementById('nombre').value = '';
    document.getElementById('tabla').value = '1';
    document.getElementById('lista-preguntas').innerHTML = '';
});

function generarPreguntas(tabla) {
    const listaPreguntas = document.getElementById('lista-preguntas');
    listaPreguntas.innerHTML = '';

    for (let i = 1; i <= 12; i++) {
        const pregunta = document.createElement('div');
        pregunta.innerHTML = `
            <label>${tabla} x ${i} = </label>
            <input type="number" class="respuesta" data-pregunta="${i}" data-resultado="${tabla * i}" data-tabla="${tabla}">
        `;
        listaPreguntas.appendChild(pregunta);
    }
}