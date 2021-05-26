let countEl = document.getElementById("contador")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count++
    countEl.innerText = count
}

/*Outra forma, seria usar uma variável para guardar o document.getElementById
let contar = document.getElementById("contador")

function increment() {
    count++
    contar.innerText = count
}
*/

function save() {
    saveEl.innerText += " " + count + " - "
    //no lugar do .innerText, também pode ser usado o .textContent
    count = 0
    countEl.innerText = count

}

