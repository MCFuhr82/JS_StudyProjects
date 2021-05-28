let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //array para ir adicionando cada vez que pede uma nova carta
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = '' //declarando e assign para mudar conforme os else if na function renderGame
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard() {
    return Math.floor(Math.random() * 10) + 2
}

function startGame() { //por questão de semântica, foi criado uma renderGame para aplicar no JS. A function startGame é apenas para dar o início do jogo.
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cartas: " //ira adicionar as cartas no html
    for(let i = 0; i < cards.length; i++) { //function para adicionar as cartas no elemento Cartas do HTML
        cardsEl.textContent += cards[i] + " "
    } 
    sumEl.textContent = "Total: " + sum
    if (sum <= 20) {
        message = ("Você gostaria de mais uma carta?") //apenas dando valores para a mensagem. Será mostrada no html logo abaixo, no messageEl.textContent
    } else if (sum === 21) {
        message = ("BlackJack!!!!")
        hasBlackJack = true
    } else {
        message = ("Você está fora do jogo!!")
        isAlive = false
    }
    messageEl.textContent = message
    
}

function newCard() {
    let anotherCard = getRandomCard()
    sum += anotherCard //mudando o valor da variável sum, adicionando a nova carta
    cards.push(anotherCard) // adicionando a nova carta na array cards
    renderGame() //chamando a função novamente

}
