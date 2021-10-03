"use strict";

var nombre = prompt("Nombre:");
var apellido = prompt("Apellido");

var texto = `
    <h2>Hola ${nombre}</h2>
    <h3>Tu apellido es: ${apellido}</h3>
`;

document.write(texto);
