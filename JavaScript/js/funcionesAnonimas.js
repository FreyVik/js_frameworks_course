"use strict";

function sumame(num1, num2, sumaMuestra, sumaPorDos) {
    var suma = num1 + num2;

    sumaMuestra(suma);
    sumaPorDos(suma);

    return suma;
}

/*
sumame(
    2,
    5,
    function (dato) {
        console.log("La suma es:", dato);
    },
    function (dato) {
        console.log("La suma por dos es: ", dato * 2);
    }
);
*/

//  Funcion flecha

sumame(
    2,
    5,
    dato => {
        console.log("La suma es:", dato);
    },
    dato => {
        console.log("La suma por dos es: ", dato * 2);
    }
);
