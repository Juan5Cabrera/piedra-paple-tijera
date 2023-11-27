let puntosJugador = 0
let puntosRival = 0

let piedraImg = 'piedra'
let papelimg = 'papel'
let tijeraImg = 'tijera'


let instrucciones = document.getElementById('instrucciones')
let containerPointsJugador = document.getElementById('puntos-jugador')
let containerPointsRival = document.getElementById('puntos-rival')
let mensaje = document.getElementById('msj')
let winPoints = document.getElementById('ganaste-punto')
let opcion = document.getElementById('opcion')
let vs = document.getElementById('vs')


let userImg = document.getElementById('userImg')
let rivalImg = document.getElementById('rivalImg')


let containerEleccionJugador = document.getElementById('eleccion-jugador')
let containerEleccionRival = document.getElementById('eleccion-rival')

let btnArma = document.querySelectorAll(".arma")

btnArma.forEach(boton => {
    boton.addEventListener("click", iniciarTurno)
})


function iniciarTurno(e){

    let eleccionRival = calcularRival();
    rivalImg.src = "img/" + eleccionRival + ".png"
    
    console.log(eleccionRival)
    
    let eleccionJugador = e.currentTarget.id

    userImg.src = "img/"+eleccionJugador+".png"


    if (eleccionRival === 1){
        eleccionRival = 'piedra'
    }else if (eleccionRival === 2){
        eleccionRival = "papel"
    }else if (eleccionRival === 3){
        eleccionRival= "tijera"
    }

    containerPointsJugador.classList.remove("disabled")
    containerPointsRival.classList.remove("disabled")

    if ((eleccionJugador === "piedra" && eleccionRival === "tijera") ||
        (eleccionJugador === "tijera" && eleccionRival === "papel")  ||
        (eleccionJugador === "papel" && eleccionRival === "piedra")) 
        {
        ganaJugador()
    }else if(
        (eleccionRival === "piedra" && eleccionJugador === "tijera") ||
        (eleccionRival === "tijera" && eleccionJugador === "papel")  ||
        (eleccionRival === "papel" && eleccionJugador === "piedra")
    ) {
        ganaRival()
    }else {
        empate()
    }

    mensaje.classList.remove("disabled")
    containerEleccionJugador.innerText = eleccionJugador
    containerEleccionRival.innerText = eleccionRival

    if (puntosJugador === 5 || puntosRival === 5){
        
        if (puntosJugador === 5){
            instrucciones.classList.remove("disabled")
            instrucciones.innerText = "GANASTE"
            instrucciones.classList.add('ganador')
            vs.classList.add("disabled")
        }

        if (puntosRival === 5){
            instrucciones.classList.remove("disabled")
            instrucciones.innerText = "Perdiste"
            instrucciones.classList.add('ganador')
            vs.classList.add("disabled")
        }
        
        opcion.classList.add("disabled")
        resert.classList.remove("disabled")
        
        resert.addEventListener("click", resertGame)
    }
}

function calcularRival() {
    let number = Math.floor(Math.random() * 3 + 1);
    if(number === 1){
        return piedraImg
    }else if(number === 2){
        return papelimg
    }else if (number === 3){
        return tijeraImg
    }  
}

function ganaJugador(){
    puntosJugador++
    containerPointsJugador.innerText = puntosJugador + " Jugador"
}

function ganaRival(){
    puntosRival++
    containerPointsRival.innerText = "Rival " + puntosRival
}

function empate(){
    winPoints.innerText = "Empate"
}

function resertGame(){
    resert.classList.add("disabled")
    opcion.classList.remove("disabled")
    mensaje.classList.add("disabled")

    puntosJugador = 0
    puntosRival = 0

    containerPointsJugador.innerText = puntosJugador + " Jugador"
    containerPointsRival.innerText =  "Rival " + puntosRival

    instrucciones.classList.add("disabled")
    vs.classList.remove("disabled")
    containerPointsJugador.classList.add("disabled")
    containerPointsRival.classList.add("disabled")

}
