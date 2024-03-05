let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asingarTextoElemente(elmento, texto) {
    let elementoHTML = document.querySelector(elmento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asingarTextoElemente('p', `Acertaste el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asingarTextoElemente('p', 'El numero secreto es menor' );
        } else {
            asingarTextoElemente('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

        console.log(numeroGenerado);
        console.log(listasNumerosSorteados);
        //Si ya sorteamos todos los numeros
        if(listasNumerosSorteados.length == numeroMaximo) {
            asingarTextoElemente('p', 'Ya se sortearon todos los numeros posibles');
        } else {

            //Si el numero generado esta incluido en la lista
            if (listasNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                listasNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
}

function condicionesIniciales() {
    asingarTextoElemente('h1', 'Juego del numero secreto!');
    asingarTextoElemente('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mesaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevos juegos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

condicionesIniciales();
