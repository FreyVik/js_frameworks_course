"use strict";

function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(restoFrutas);
}

var frutas = ["Naranja", "Mandarina"];
listadoFrutas(...frutas, "Manzana", "Sandia", "Melon");
