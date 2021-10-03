'use strict';

window.addEventListener('load', () => {
    var intervalo = () => {
        let tiempo = setInterval(() => {
            var encabezado = document.querySelector('h1');
            if (encabezado.style.fontSize == '50px') {
                encabezado.style.fontSize = '20px';
            } else {
                encabezado.style.fontSize = '50px';
            }

            console.log('Ejecutado el set interval');
        }, 500);

        return tiempo;
    };

    var tiempo = intervalo();

    var stop = document.querySelector('#stop');
    stop.addEventListener('click', () => {
        window.clearInterval(tiempo);
        alert('QUE HACES?!');
    });

    var start = document.querySelector('#start');
    start.addEventListener('click', () => {
        intervalo();
    });
});
