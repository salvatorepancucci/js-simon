// Funzione per generare un numero casuale tra min e max (inclusi)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare un array di numeri casuali
function generateRandomNumbers(count, min, max) {
    let numbers = [];
    while (numbers.length < count) {
        let num = getRandomNumber(min, max);
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

// Funzione per avviare il gioco
function startGame() {
    // Genera 5 numeri casuali tra 1 e 100
    let randomNumbers = generateRandomNumbers(5, 1, 100);

    // Mostra i numeri nella pagina
    let numbersDiv = document.getElementById('numbers');
    numbersDiv.textContent = randomNumbers.join(' ');

    // Inizializza il timer
    let timerDiv = document.getElementById('timer');
    let timeLeft = 30;
    timerDiv.textContent = `Tempo rimasto: ${timeLeft} secondi`;

    // Aggiorna il timer ogni secondo
    let timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Tempo rimasto: ${timeLeft} secondi`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            numbersDiv.classList.add('white-text');  // Cambia il colore dei numeri
            timerDiv.textContent = '';  // Nascondi il timer
            let userNumbers = [];

        // Chiedi all'utente di inserire i numeri visti, uno alla volta
        for (let i = 0; i < 5; i++) {
            let userNumber = parseInt(prompt('Inserisci uno dei numeri che hai visto:'));
            userNumbers.push(userNumber);
        }

        // Confronta i numeri inseriti dall'utente con quelli generati
        let correctNumbers = randomNumbers.filter(num => userNumbers.includes(num));

        // Mostra il risultato nella pagina
        let resultDiv = document.getElementById('result');
        if (correctNumbers.length > 0) {
            resultDiv.innerHTML = `Hai indovinato ${correctNumbers.length} numeri corretti: ${correctNumbers.join(' ')}`;
        } else {
            resultDiv.innerHTML = 'Non hai indovinato nessun numero corretto';
        }
        }
    }, 500);  // 0.5 secondi
}

// Avvia il gioco quando la pagina è caricata
window.onload = startGame;