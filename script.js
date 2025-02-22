let estudiantes = [];

function registrarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        const estudiante = {
            id: estudiantes.length + 1,
            nombre: nombre
        };
        estudiantes.push(estudiante);
        generarQR(estudiante);
        document.getElementById('nombre').value = ''; // Limpiar el campo de texto
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

function generarQR(estudiante) {
    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = ''; // Limpiar el contenedor de QR
    const qr = new QRCode(qrCodeDiv, {
        text: JSON.stringify(estudiante),
        width: 128,
        height: 128
    });
}

document.getElementById('qr-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    const estudiante = JSON.parse(code.data);
                    registrarAsistencia(estudiante);
                } else {
                    alert('No se pudo leer el código QR.');
                }
            };
        };
        reader.readAsDataURL(file);
    }
});

function registrarAsistencia(estudiante) {
    const fechaHora = new Date();
    const fecha = fechaHora.toLocaleDateString();
    const hora = fechaHora.toLocaleTimeString();

    const tabla = document.getElementById('tabla-asistencia').getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = estudiante.nombre;
    fila.insertCell(1).textContent = fecha;
    fila.insertCell(2).textContent = hora;
}


let stream = null;
let scanning = false;

// Registrar estudiante y generar QR
function registrarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        const estudiante = {
            id: estudiantes.length + 1,
            nombre: nombre
        };
        estudiantes.push(estudiante);
        generarQR(estudiante);
        document.getElementById('nombre').value = ''; // Limpiar el campo de texto
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

// Generar código QR
function generarQR(estudiante) {
    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = ''; // Limpiar el contenedor de QR
    const qr = new QRCode(qrCodeDiv, {
        text: JSON.stringify(estudiante),
        width: 128,
        height: 128
    });
}

// Escanear QR desde la cámara
document.getElementById('btn-camara').addEventListener('click', () => {
    if (!scanning) {
        iniciarCamara();
    } else {
        detenerCamara();
    }
});

// Iniciar la cámara
function iniciarCamara() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then((s) => {
            stream = s;
            const video = document.getElementById('video');
            video.srcObject = stream;
            video.play();
            video.style.display = 'block';
            scanning = true;
            document.getElementById('btn-camara').textContent = 'Detener Cámara';
            escanearQR();
        })
        .catch((err) => {
            alert('No se pudo acceder a la cámara: ' + err);
        });
}

// Detener la cámara
function detenerCamara() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        document.getElementById('video').style.display = 'none';
        scanning = false;
        document.getElementById('btn-camara').textContent = 'Iniciar Cámara';
    }
}

// Escanear QR en tiempo real
function escanearQR() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    function tick() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
                const estudiante = JSON.parse(code.data);
                registrarAsistencia(estudiante);
                detenerCamara(); // Detener la cámara después de leer el QR
            }
        }
        if (scanning) {
            requestAnimationFrame(tick);
        }
    }
    tick();
}

// Registrar asistencia
function registrarAsistencia(estudiante) {
    const fechaHora = new Date();
    const fecha = fechaHora.toLocaleDateString();
    const hora = fechaHora.toLocaleTimeString();

    const tabla = document.getElementById('tabla-asistencia').getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = estudiante.nombre;
    fila.insertCell(1).textContent = fecha;
    fila.insertCell(2).textContent = hora;
}
const { jsPDF } = window.jspdf; // Inicializar jsPDF


// Registrar estudiante y generar QR
function registrarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        const estudiante = {
            id: estudiantes.length + 1,
            nombre: nombre
        };
        estudiantes.push(estudiante);
        generarQR(estudiante);
        document.getElementById('nombre').value = ''; // Limpiar el campo de texto
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

// Generar código QR
function generarQR(estudiante) {
    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = ''; // Limpiar el contenedor de QR
    const qr = new QRCode(qrCodeDiv, {
        text: JSON.stringify(estudiante),
        width: 128,
        height: 128
    });
}

// Escanear QR desde la cámara
document.getElementById('btn-camara').addEventListener('click', () => {
    if (!scanning) {
        iniciarCamara();
    } else {
        detenerCamara();
    }
});

// Iniciar la cámara
function iniciarCamara() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then((s) => {
            stream = s;
            const video = document.getElementById('video');
            video.srcObject = stream;
            video.play();
            video.style.display = 'block';
            scanning = true;
            document.getElementById('btn-camara').textContent = 'Detener Cámara';
            escanearQR();
        })
        .catch((err) => {
            alert('No se pudo acceder a la cámara: ' + err);
        });
}

// Detener la cámara
function detenerCamara() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        document.getElementById('video').style.display = 'none';
        scanning = false;
        document.getElementById('btn-camara').textContent = 'Iniciar Cámara';
    }
}

// Escanear QR en tiempo real
function escanearQR() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    function tick() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
                const estudiante = JSON.parse(code.data);
                registrarAsistencia(estudiante);
                detenerCamara(); // Detener la cámara después de leer el QR
            }
        }
        if (scanning) {
            requestAnimationFrame(tick);
        }
    }
    tick();
}

// Registrar asistencia
function registrarAsistencia(estudiante) {
    const fechaHora = new Date();
    const fecha = fechaHora.toLocaleDateString();
    const hora = fechaHora.toLocaleTimeString();

    const tabla = document.getElementById('tabla-asistencia').getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = estudiante.nombre;
    fila.insertCell(1).textContent = fecha;
    fila.insertCell(2).textContent = hora;
}

// Generar y descargar PDF
document.getElementById('btn-generar-pdf').addEventListener('click', () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Registro de Asistencia', 10, 10);

    const tabla = document.getElementById('tabla-asistencia');
    const rows = tabla.querySelectorAll('tbody tr');
    let y = 20;

    rows.forEach((row, index) => {
        const nombre = row.cells[0].textContent;
        const fecha = row.cells[1].textContent;
        const hora = row.cells[2].textContent;
        doc.setFontSize(12);
        doc.text(`${index + 1}. ${nombre} - ${fecha} ${hora}`, 10, y);
        y += 10;
    });

    doc.save('asistencias.pdf');
});