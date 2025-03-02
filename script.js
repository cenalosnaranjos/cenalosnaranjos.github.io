// Elementos del DOM
const video = document.getElementById("qr-video");
const canvas = document.getElementById("qr-canvas");
const qrResult = document.getElementById("qr-result");

// Iniciar el lector QR
function iniciarLectorQR() {
    navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
            requestAnimationFrame(escanearQR);
        })
        .catch(function (error) {
            qrResult.textContent = "Error al acceder a la cámara. Asegúrate de permitir el acceso.";
            console.error(error);
        });
}

// Escanear el código QR
function escanearQR() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
        });

        if (code) {
            qrResult.textContent = "Código QR detectado. Redirigiendo...";
            window.location.href = code.data; // Redirige al enlace escaneado
        } else {
            qrResult.textContent = "Escaneando...";
        }
    }
    requestAnimationFrame(escanearQR);
}

// Iniciar el lector al cargar la página
iniciarLectorQR();