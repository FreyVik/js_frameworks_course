"use strict";

function calculadora(operacion, num1, num2) {
    switch (operacion.toUpperCase()) {
        default:
        case "SUMA":
            return num1 + num2;
            break;
        case "RESTA":
            return num1 - num2;
            break;
    }
}
