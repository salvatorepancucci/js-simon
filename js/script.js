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

    // Funzione per aggiornare il timer
    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timerDiv.textContent = `Tempo rimasto: ${timeLeft} secondi`;
            setTimeout(updateTimer, 50); // Aggiorna velocemente
        } else {
            // Nasconde i numeri e il timer
            numbersDiv.textContent = '';  
            timerDiv.textContent = '';  
            
            // Usa setTimeout per assicurarsi che i numeri e il timer siano nascosti prima di mostrare il prompt
            setTimeout(() => {
                let userNumbers = [];
                let i = 0;

                // Funzione per chiedere i numeri all'utente
                function askForNumber() {
                    if (i < 5) {
                        let userNumber = parseInt(prompt(`Inserisci uno dei numeri che hai visto (${i+1}/5):`));
                        userNumbers.push(userNumber);
                        i++;
                        askForNumber();
                    } else {
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
                }

                // Inizia a chiedere i numeri all'utente
                askForNumber();
            }, 100); // Ritardo per assicurarsi che il DOM sia aggiornato
        }
    }

    // Inizia il timer
    setTimeout(updateTimer, 1000); // Prima chiamata dopo 1 secondo
}

// Avvia il gioco quando la pagina è caricata
window.onload = startGame;
