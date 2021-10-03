'use strict';

console.log(typeof Storage);

localStorage.setItem('titulo', 'Curso JS');

console.log(localStorage.getItem('titulo'));

var user = {
    username: 'gonzalo',
    pass: 'secreto',
};

localStorage.setItem('usuario', JSON.stringify(user));

var userCookie = JSON.parse(localStorage.getItem('usuario'));
console.log(userCookie);

localStorage.removeItem('usuario');
localStorage.clear();
