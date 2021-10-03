'use strict';

const usuariosDiv = document.querySelector('#usuarios');
const userDiv = document.querySelector('#usuario');

getUsersList()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users);

        return getUser(1);
    })
    .then(data => data.json())
    .then(user => {
        showUser(user);
    })
    .catch(error => {
        console.log(error);
    });

const listadoUsuarios = usuarios => {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + ' - ' + user.name;
        usuariosDiv.appendChild(nombre);

        document.querySelector('#usuarios .loading').style.display = 'none';
    });
};

function getUsersList() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

function showUser(user) {
    console.log(user);
    const nombre = document.createElement('h2');
    nombre.innerHTML = user.name;
    userDiv.appendChild(nombre);

    const data = document.createElement('div');
    const mail = document.createElement('p');
    const phone = document.createElement('p');

    mail.innerHTML = `Email: ${user.email}`;
    phone.innerHTML = `Telephone: ${user.phone}`;

    data.appendChild(mail);
    data.appendChild(phone);

    userDiv.appendChild(data);

    document.querySelector('#usuario .loading').style.display = 'none';
}
