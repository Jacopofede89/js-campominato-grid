// Viene chiesto all'utente di scegliere una difficoltà che va dall'1 al 3
// a seconda della difficolà che l'utente sceglie la tabella si divide in 3 grandezze:
// difficoltà 1 => tra 1 e 100
// difficoltà 2 => tra 1 e 81
// difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di rosso.

const gridCont = document.getElementById("grid");
// Far scegliere all'utente la difficoltà 
const livello = prompt("Scegli la difficoltà tra: facile, medio, difficile")

let dimension;
if(livello == "facile") {
    dimension = 100
    choose = "facile"
} else if( livello == "medio"){
    dimension = 81
    choose = "medio"
} else if (livello== "difficile"){
    dimension = 49;
    choose ="difficile";
}


for(let i = 0; i < dimension; i++) {
    let newElement = elementGen("div", "square", choose);
    
    newElement.addEventListener("click",
    function(){
        this.classList.add("active")
        newElement.innerHTML += i+1
        }
    )

    gridCont.appendChild(newElement)
}


// funzioni utili

function elementGen(elementGen, classPlus, classP_2) {
    let node = document.createElement(elementGen);
    node.classList.add(classPlus)
    node.classList.add(classP_2)
    return node
}