"use strict";

var nombres = ["Gonzalo", "Ismael", "Victor"];

console.log(nombres[1]);
console.log(nombres);

document.write("<h1>Arrays</h1>");
nombres.forEach((it, indice) => {
    document.write(`<h3>${indice + 1} - ${it}</h3>`);
});

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Matrix", "Origenes", "Dune"];

var cine = [categorias, peliculas];

peliculas.push("Iron man");

peliculas.push("Detective pikachu");
// peliculas.pop();

var indice = peliculas.indexOf("Detective pikachu");

if (indice > -1) {
    peliculas.splice(indice, 1);
}

var peliculasString = peliculas.join();

console.log("Normal: " + peliculas);

console.log("Reverse: " + peliculas.reverse());
console.log(peliculas);

console.log("Sort: " + peliculas.sort());
console.log(peliculas);
