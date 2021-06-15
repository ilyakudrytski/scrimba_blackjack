let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
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
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame()

}

function renderGame() {

    cardEl.textContent = "Card: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";

    }
    sumEl.textContent = "Sum: " + sum;
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
    if (!hasBlackJack && isAlive) {
        let card = getRandomCard()
        sum += card;
        cards.push(card)
        renderGame()

    } else {
        console.log("GAME OVER")
    }

}