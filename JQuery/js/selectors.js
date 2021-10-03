'use strict';

$(document).ready(() => {
    const azul = $('#azul');
    const amarillo = $('#amarillo');
    const verde = $('#verde');

    azul.css('background', 'lightblue')
        .css('color', 'white')
        .css('padding', '0.5rem');

    amarillo.css('background', 'yellow').css('padding', '0.5rem');

    verde
        .css('background', 'green')
        .css('color', 'white')
        .css('padding', '0.5rem');

    const zebras = $('.zebra');
    zebras.css('border', '5px dashed black');

    var paraphs = $('p');
    paraphs.click(function () {
        const p = $(this);
        p.removeClass('zebra');
        if (!p.hasClass('padded')) {
            p.addClass('padded');
        } else {
            p.removeClass('padded');
        }
    });

    $('[title="Google"').css('background', '#ccc');
    $('[title="Facebook"').css('background', 'lightblue');

    $('p, a').addClass('margin-top');
});
