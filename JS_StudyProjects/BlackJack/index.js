let player = {
    name: "Marcelo",
    chips: 150
}

let cards = [] //array para ir adicionando cada vez que pede uma nova carta
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = '' //declarando e assign para mudar conforme os else if na function renderGame
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": R$" + player.chips

function getRandomCard() {
    let newCard = Math.floor(Math.random() * 13) + 1
    if(newCard === 1) { //mudando o valor do A(valor 1), para 11
        return 11
    } else if (newCard == 11 || newCard == 12 || newCard == 13) { // poderia fazer "newCard > 10" para Valete, Dama e Reis
        return 10
    } else {
        return newCard
    }
    
}

function startGame() {      //por questão de semântica, foi criado uma renderGame para aplicar no JS. A function startGame é apenas para dar o início do jogo.
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    if (isAlive === true && sum < 21) {//poderia setar tb isAlive === true && hasBlackJack === false
        let anotherCard = getRandomCard()
        sum += anotherCard //mudando o valor da variável sum, adicionando a nova carta
        cards.push(anotherCard) // adicionando a nova carta na array cards
        renderGame() //chamando a função novamente
    }
}
