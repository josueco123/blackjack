
(() => {

    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    //let puntosJugardor = 0, puntosPc = 0;

    let puntosJugadores = [];

    const btnPedirCarta = document.querySelector('#btnPedirCarta');
    const btnDetener = document.querySelector('#btnDeterner');
    const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
    const puntosSmall = document.querySelectorAll('small');

    const divCartas = document.querySelectorAll('.divCartas');

    

    //funcion de iniicializacion del arreglo de cartas
    const iniciarJuego =(numJugadores = 2) =>{
       deck = crearDeck();

       puntosJugadores = [];

       for(let i = 0; i< numJugadores; i++){
           puntosJugadores.push(0);
       }

       puntosSmall.forEach( elem => elem.innerText = 0 );
       divCartas.forEach( elem => elem.innerHTML = '' );

       btnPedirCarta.disabled   = false;
        btnDetener.disabled = false;
    }


    //funcion que crea una baraja
    const crearDeck = () => {

        deck = [];

        for (let i = 2; i <= 10; i++) {

            for (let tipo of tipos)
                deck.push(i + tipo);

        }

        for (let tipo of tipos) {
            for (let esp of especiales)
                deck.push(esp + tipo);

        }

        return _.shuffle(deck);

    }
    

    //funcion que permite cojer una carta del arreglo
    const perdirCarta = () => {

        if (deck.length === 0)
            throw 'No hay Cartas'       

        return deck.pop();
    }

    //funcion que sirve para obtener el valor de la carta
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : valor * 1
    }


    //funcion que acumula puntos del juadodr
    const acumularPuntos = (carta,turno)=>{

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);

        puntosSmall[turno].innerHTML = puntosJugadores[turno] ;

        return puntosJugadores[turno];
    }

    //funcion que dibuja las cartas
    const crearCarta = (carta,turno) =>{

        const imgenCarta = document.createElement('img');

        imgenCarta.src = 'assets/cartas/' + carta + '.png';

        imgenCarta.classList.add('carta');

        divCartas[turno].append(imgenCarta)
       
    }
    

    //funcion del turno la computadora
    const turnoCommputadora = (puntosMinimos) => {

        let puntosPc = 0;
        do {

            const carta = perdirCarta();

            puntosPc = acumularPuntos(carta, puntosJugadores.length-1);
            crearCarta(carta,puntosJugadores.length-1);
                       


        } while ((puntosMinimos > puntosPc) && puntosMinimos <= 21);
        
        if( puntosPc === puntosMinimos ) {
            alert('No hay ganador');
        } else if ( puntosMinimos > 21 ) {
            alert('Perdiste')
        } else if( puntosPc > 21 ) {
            alert('Ganaste');
        } else {
            alert('Perdiste')
        }
    }

    //evento del boton que pide cartas
    btnPedirCarta.addEventListener('click', () => {

        const carta = perdirCarta();

        let  puntosJugardor= acumularPuntos(carta, 0);
        
        crearCarta(carta,0);

        if (puntosJugardor > 21) {

            btnPedirCarta.disabled = true;
            btnDetener.disabled = true;
            turnoCommputadora(puntosJugardor);
            //alert("Perdiste");

        } else if (puntosJugardor === 21) {

            btnPedirCarta.disabled = true;
            btnDetener.disabled = true;
            turnoCommputadora(puntosJugardor);
            //alert("Ganaste");
        }

    })

    //evento que detiene las cartas
    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoCommputadora( puntosJugadores[0]);               
    })

    //evento para reiniciar el juego
    btnNuevoJuego.addEventListener('click', () => {
       
        iniciarJuego();
       
    })

})();


