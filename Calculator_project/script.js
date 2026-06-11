const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function percentage() {
    try {
        display.value = Number(display.value) / 100;
    } catch {
        display.value = "Error";
    }
}

function square() {
    try {
        display.value = Math.pow(Number(display.value), 2);
    } catch {
        display.value = "Error";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}