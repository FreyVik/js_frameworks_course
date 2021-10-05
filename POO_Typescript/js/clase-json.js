'use strict';

var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'disco',
    velMax: '60',
    cambiarColor: function (newColor) {
        this.color = newColor;
    },
};

console.log(bicicleta);
