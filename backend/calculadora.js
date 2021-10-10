'use strict';

const params = process.argv.slice(2);

const num1 = parseFloat(params[0]);
const num2 = parseFloat(params[1]);

var plantilla = `
La suma es: ${num1 + num2}
La resta es: ${num1 - num2}
La multiplicacion es: ${num1 * num2}
La division es: ${num1 - num2}
`;

console.log(plantilla);
