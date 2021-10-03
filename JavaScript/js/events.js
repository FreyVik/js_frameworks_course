'use strict';

//  MOUSE
var boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    changeColor();
});

var changeColor = () => {
    console.log(boton.style.background);
    if (
        boton.style.background == 'rgb(97, 218, 251) none repeat scroll 0% 0%'
    ) {
        boton.style.background = '#41b883';
    } else {
        boton.style.background = '#61dafb';
    }
};

boton.addEventListener('mouseover', () => {
    boton.style.background = '#dd0031';
});

boton.addEventListener('mouseout', () => {
    boton.style.background = '#ccc';
});

//  KEYS
var input = document.querySelector('#input');

input.addEventListener('focus', () => {
    console.log('Estas dentro maquina!');
});

input.addEventListener('blur', () => {
    console.log('No te vayas :(');
});

input.addEventListener('keydown', event => {
    console.log(`Pulsando: ${String.fromCharCode(event.keyCode)}`);
});

input.addEventListener('keypress', event => {
    console.log(`Presionado: ${String.fromCharCode(event.keyCode)}`);
});

input.addEventListener('keyup', event => {
    console.log(`Has: ${String.fromCharCode(event.keyCode)}`);
});
