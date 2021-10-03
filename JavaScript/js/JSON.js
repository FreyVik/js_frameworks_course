'use strict';

var pelicula = {
    titulo: 'Batman',
    year: 2017,
    pais: 'USA',
};

var peliculas = [
    {
        titulo: 'La vida es bella',
        year: 1994,
        pais: 'Italia',
    },
    pelicula,
];

console.log(peliculas);

window.addEventListener('load', () => {
    var filmsDiv = document.querySelector('#peliculas');

    for (var film in peliculas) {
        var paraph = document.createElement('p');
        paraph.append(`${peliculas[film].titulo} - ${peliculas[film].year}`);
        filmsDiv.append(paraph);
    }
});
