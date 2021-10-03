'use strict';

$(document).ready(() => {
    var caja = $('#caja');

    /*
    caja.mouseover(function () {
        $(this).css('background', 'red');
    });

    caja.mouseout(function () {
        $(this).css('background', 'yellow');
    });
    */

    function cambiaRojo() {
        $(this).css('background', 'red');
    }

    function cambiaAmarillo() {
        $(this).css('background', 'yellow').css('color', 'black');
    }

    caja.hover(cambiaRojo, cambiaAmarillo);

    caja.click(function () {
        $(this).css('color', 'white');
    });

    caja.dblclick(function () {
        $(this).css('background', 'blue');
    });
});
