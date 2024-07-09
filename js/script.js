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

    // Dopo 30 secondi, nascondi i numeri e chiedi all'utente di inserirli
    setTimeout(() => {
        numbersDiv.textContent = '';  // Nascondi i numeri
        let userNumbers = [];
}