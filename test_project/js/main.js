$(document).ready(function () {
    console.log('cargado');
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: false,
    });
});
