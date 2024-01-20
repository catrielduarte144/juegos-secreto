let numeroSecreto = 0;
let intentos = 0;
let listaNumerosorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no aserto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;        
    
    console.log(numeroGenerado);
    console.log(listaNumerosorteados)
    //si ya sortemos todos los números
    if (listaNumerosorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Yase sortearon todos los números posibles');
    } else {

    }
    //Si el número generado está incluido en la lista
    if (listaNumerosorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de número.
    //Generar el número aleatorio.
    //Inicializar el número de intentos.
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('dzsabled', 'true');
}


condicionesIniciales();


