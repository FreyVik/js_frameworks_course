'use strict';

$(document).ready(function () {
    const element = $('.element');
    const selectableList = $('.selectable-list');
    const movedDiv = $('#moved-element');
    const areaDiv = $('#area');
    const showButton = $('#effect');
    const effectsDiv = $('.effects-box');

    element.draggable();

    element.resizable();

    // selectableList.selectable();
    //  ||
    selectableList.sortable({
        update: function (event, ui) {
            console.log('Se cambio la lista');
        },
    });

    movedDiv.draggable();
    areaDiv.droppable({
        drop: function () {
            console.log('Se ha soltado algo dentro');
        },
    });

    showButton.click(function () {
        // effectsDiv.toggle('fade');
        // effectsDiv.effect('explode');
        effectsDiv.toggle('scale', 1000);
    });

    $(document).tooltip();
});
