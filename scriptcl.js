let display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function operation(op) {
    display.value += ` ${op} `;
}

function calculate() {
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function scientificFunction(func) {
    try {
        let val = parseFloat(display.value);
        switch (func) {
            case 'sqrt':
                display.value = Math.sqrt(val);
                break;
            case 'pow':
                display.value = Math.pow(val, 2);
                break;
            case 'sin':
                display.value = Math.sin(val * Math.PI / 180);
                break;
            case 'cos':
                display.value = Math.cos(val * Math.PI / 180);
                break;
        }
    } catch {
        display.value = 'Error';
    }
}
