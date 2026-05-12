let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
    animateDisplay();
}

function clearDisplay() {
    display.value = '';
    animateClear();
}

function backspace() {
    display.value = display.value.slice(0, -1);
    animateDisplay();
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        animateResult();
    } catch (error) {
        display.value = 'Error';
        animateError();
    }
}

function calculateSqrt() {
    try {
        let result = Math.sqrt(eval(display.value));
        display.value = result;
        animateResult();
    } catch (error) {
        display.value = 'Error';
        animateError();
    }
}

function calculateSquare() {
    try {
        let result = Math.pow(eval(display.value), 2);
        display.value = result;
        animateResult();
    } catch (error) {
        display.value = 'Error';
        animateError();
    }
}

function animateDisplay() {
    display.style.transform = 'scale(1.05)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 100);
}

function animateClear() {
    display.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    setTimeout(() => {
        display.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    }, 300);
}

function animateResult() {
    display.style.color = '#00ff00';
    setTimeout(() => {
        display.style.color = 'white';
    }, 500);
}
window.addEventListener('load', () => {
    const curtain = document.querySelector('.curtain');
    if (curtain) {
        setTimeout(() => {
            curtain.style.display = 'none';
        }, 1500);
    }
});
function animateError() {
    display.style.color = '#ff0000';
    setTimeout(() => {
        display.style.color = 'white';
    }, 500);
}