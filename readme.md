
Claro! Aqui está o README completo em código Markdown com as novas funcionalidades:

```markdown
# Digital Clock

Um projeto simples de relógio digital usando HTML, CSS e JavaScript, com opções adicionais de seleção de fuso horário, cronômetro e timer.

## Descrição

Este é um projeto de relógio digital que exibe a hora atual, permite a seleção de diferentes fusos horários, inclui um cronômetro e um timer. O relógio é estilizado usando variáveis de cores personalizadas e está centralizado na página.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do Projeto

```
digital-clock/
├── index.html
├── styles.css
└── script.js
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/digital-clock.git
```

2. Navegue até o diretório do projeto:

```bash
cd digital-clock
```

3. Abra o arquivo `index.html` em seu navegador preferido para ver o relógio digital em ação.

## Código HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relógio Digital</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="clock-container">
            <select id="timezone-selector">
                <option value="local">Local</option>
                <option value="UTC">UTC</option>
                <option value="America/Sao_Paulo">São Paulo</option>
                <option value="Europe/London">London</option>
                <option value="Asia/Tokyo">Tokyo</option>
            </select>
            <div id="clock"></div>
        </div>
        
        <div class="timer-container">
            <h2>Timer</h2>
            <input type="number" id="timer-input" placeholder="Segundos">
            <button id="start-timer">Iniciar Timer</button>
            <div id="timer-display"></div>
        </div>
        
        <div class="stopwatch-container">
            <h2>Cronômetro</h2>
            <div id="stopwatch-display">00:00:00</div>
            <button id="start-stopwatch">Iniciar</button>
            <button id="stop-stopwatch">Parar</button>
            <button id="reset-stopwatch">Resetar</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## Código CSS

```css
:root {
    --primary-100: #0D6E6E;
    --primary-200: #4a9d9c;
    --primary-300: #afffff;
    --accent-100: #FF3D3D;
    --accent-200: #ffe0c8;
    --text-100: #FFFFFF;
    --text-200: #e0e0e0;
    --bg-100: #0D1F2D;
    --bg-200: #1d2e3d;
    --bg-300: #354656;
}

body {
    background-color: var(--bg-100);
    color: var(--text-100);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
}

.clock-container, .timer-container, .stopwatch-container {
    background-color: var(--bg-200);
    padding: 20px;
    min-height: 300px;
    min-width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
}

#clock, #timer-display, #stopwatch-display {
    font-size: 48px;
    color: var(--primary-300);
    margin-top: 10px;
}

select, input, button {
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary-200);
    color: var(--text-100);
    cursor: pointer;
}

button:hover {
    background-color: var(--primary-300);
}


```

## Código JavaScript

```javascript
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
    if (stopwatchInterval) clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(function () {
        stopwatchTime++;
        const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
        const seconds = String(stopwatchTime % 60).padStart(2, '0');
        document.getElementById('stopwatch-display').textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
});

document.getElementById('stop-stopwatch').addEventListener('click', function () {
    if (stopwatchInterval) clearInterval(stopwatchInterval);
});

document.getElementById('reset-stopwatch').addEventListener('click', function () {
    if (stopwatchInterval) clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').textContent = '00:00:00';
});
```

## Contribuição

Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Todas as contribuições são bem-vindas!

## Contato

Para mais informações, entre em contato com [bfrpaulondev@gmail.com](mailto:bfrpaulondev@gmail.com).
