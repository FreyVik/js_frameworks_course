'use strict';

// var caja = document.getElementById('mi-caja');
/*
var caja = document.querySelector('#mi-caja');

function cambiaColor(color) {
    caja.style.background = color;
}
caja.innerHTML = 'Caja cambiada';
caja.style.padding = '20px 0';
cambiaColor('#61dafb');

caja.className = 'hola';
*/

var allDivs = document.getElementsByTagName('div');

var div2 = allDivs[1];
div2.innerHTML = 'No toques!';
div2.style.background = '#61dafb';

for (var valor in allDivs) {
    if (typeof allDivs[valor].textContent == 'string') {
        var newParagraph = document.createElement('p');
        var newTextNode = document.createTextNode(allDivs[valor].innerHTML);
        newParagraph.appendChild(newTextNode);
        document.querySelector('#mi-seccion').appendChild(newParagraph);
    }
}

var redDivs = document.getElementsByClassName('rojo');
for (var div in redDivs) {
    if (redDivs[div].className == 'rojo') redDivs[div].style.background = 'red';
}

var yellowDivs = document.getElementsByClassName('amarillo');
for (var div in yellowDivs) {
    if (yellowDivs[div].className == 'amarillo')
        yellowDivs[div].style.background = 'yellow';
}

var redClass = document.querySelectorAll('.rojo');
console.log(redClass);
