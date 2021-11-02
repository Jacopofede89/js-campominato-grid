// Viene chiesto all'utente di scegliere una difficoltà che va dall'1 al 3
// a seconda della difficolà che l'utente sceglie la tabella si divide in 3 grandezze:
// difficoltà 1 => tra 1 e 100
// difficoltà 2 => tra 1 e 81
// difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


let cointainerEl = document.getElementById('container');

let difficoltaUser;
// Chiedre a quale difficoltà si vuole giocare
difficoltaUser = prompt ('Scegli la difficoltà da 1 a 3');


//a seconda della scelta dell'utente assegniamo una grandezza numerica alla griglia
// let box 

//generiamo la  griglia di 100 caselle con un ciclo

if (cointainerEl === "1"){
    for (let i = 0; i < 100; i++){ 
        let box = document.getElementById("container")
    creazione.innerHTML += `
        <div class="casella"></div>
    `
    
    }
//generiamo la  griglia di 81 caselle con un ciclo
}else if(cointainerEl === "2"){
    for (let i = 0; i < 81; i++){
        let box = document.getElementById("container");
        box.className = "container2";
        box.innerHTML += `
            <div class="casella_2"></div>
        `
    }
//generiamo la  griglia di 49 caselle con un ciclo
}else {
    for (let i = 0; i < 49; i++){
        let box = document.getElementById("container");
        box.className = "container3 ";
        box.innerHTML += `
            <div class="casella_3"></div>
        `
    }
};

box.addEventListener('click', 
function () {
        this.style.backgroundColor = 'red'
})
