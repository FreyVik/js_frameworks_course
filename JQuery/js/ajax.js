'use strict';

$(document).ready(function () {
    const dataDiv = $('#data');

    // dataDiv.load('https://reqres.in/');

    $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
        response.data.forEach(user => {
            dataDiv.append('<p>' + user.first_name + '</p>');
        });
    });

    const usuario = {
        name: 'Gonzalo Fuente',
        web: 'inventada.es',
    };

    /*
    $.post('https://reqres.in/api/users', usuarios, function (response) {
        console.log(response);
    });
    */

    $.ajax({
        type: 'POST',
        // dataType: 'json',
        // contentType: 'application/json',
        url: 'https://reqres.in/api/users',
        data: usuario,
        beforeSend: () => {
            console.log('Enviando usuario...');
        },
        success: response => {
            console.log(response);
        },
        error: () => {
            console.log('Ocurrio un error');
        },
        timeout: 1000,
    });
});
