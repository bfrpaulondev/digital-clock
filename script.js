// Função para atualizar o relógio com fuso horário selecionado
function updateClock() {
    const clockElement = document.getElementById('clock');
    const timezone = document.getElementById('timezone-selector').value;
    let now = new Date();
    if (timezone !== 'local') {
        now = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    }
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Chama a função imediatamente para não esperar o primeiro intervalo

// Funções para o Timer
let timerInterval;
document.getElementById('start-timer').addEventListener('click', function () {
    const timerInput = document.getElementById('timer-input').value;
    let timeLeft = parseInt(timerInput, 10);
    const timerDisplay = document.getElementById('timer-display');
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Tempo esgotado!';
        } else {
            timerDisplay.textContent = timeLeft + ' segundos';
            timeLeft--;
        }
    }, 1000);
});

// Funções para o Cronômetro
let stopwatchInterval;
let stopwatchTime = 0;
document.getElementById('start-stopwatch').addEventListener('click', function () {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(function () {
            stopwatchTime++;
            const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
            const seconds = String(stopwatchTime % 60).padStart(2, '0');
            document.getElementById('stopwatch-display').textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
});

document.getElementById('stop-stopwatch').addEventListener('click', function () {
    if (stopwatchInterval) clearInterval(stopwatchInterval);
});

document.getElementById('reset-stopwatch').addEventListener('click', function () {
    if (stopwatchInterval) clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').textContent = '00:00:00';
});
