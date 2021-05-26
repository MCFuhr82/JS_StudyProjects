let count = 0;

function increment() {
    count++
    document.getElementById("contador").innerText = count
}

/*Outra forma, seria usar uma variável para guardar o document.getElementById
let contar = document.getElementById("contador")

function increment() {
    count++
    contar.innerText = count
}
*/

let saveEl = document.getElementById("save-el")

function save() {
    saveEl.innerText += " " + count + " - "
    //no lugar do .innerText, também pode ser usado o .textContent

}

