
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignaTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignaTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignaTextoElemento('p', 'Numero secreto es mayor')
        } else {
        asignaTextoElemento('p', 'Numero secreto es menor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {

        asignaTextoElemento('p', 'Ya se sortearon todos los numeros');

    } else {
    
            // si el num generado esta incluido hacemos una operacion si no no
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }    
}

function condicionesIniciales() {

    asignaTextoElemento('h1', 'Juego del numero secreto');
    asignaTextoElemento('p', `Indica el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // mensajes iniciales
    // generar numero aleatorio
    // inicializar el numero de intetos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();




