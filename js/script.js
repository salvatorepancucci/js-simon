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