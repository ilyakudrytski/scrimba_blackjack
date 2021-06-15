let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let startBtn = document.getElementById('start-btn');
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let drawCard = document.getElementById("new-card");

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
    return randomCard;
}

startBtn.addEventListener('click', startGame, false);

drawCard.addEventListener('click', newCard, false);

function startGame() {
    renderGame()
}

function renderGame() {

    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Card: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        hasBlackJack = true
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard()
    sum += card;
    cards.push(card)
    startGame()
}