'use strict';

$(document).ready(function () {
    const showButton = $('#show');
    const hiddenButton = $('#hidden');

    const toggleButton = $('#toggle');

    const animationButton = $('#animation');

    const cajaDiv = $('#caja');

    // No toggle
    /*
    showButton.click(() => {
        // cajaDiv.show('fast');
        // cajaDiv.fadeIn('slow');
        cajaDiv.fadeTo('fast', 1);
    });

    hiddenButton.click(() => {
        // cajaDiv.hide('slow');
        // cajaDiv.fadeOut('fast');
        cajaDiv.fadeTo('slow', 0);
    });
    */

    // Toggle
    toggleButton.click(() => {
        // cajaDiv.toggle('fast');
        // cajaDiv.fadeToggle('fast');
        cajaDiv.slideToggle('fast');
    });

    animationButton.click(() => {
        cajaDiv
            .animate(
                {
                    marginLeft: '500px',
                    fontSize: '40px',
                },
                'slow'
            )
            .animate(
                {
                    borderRadius: '900px',
                    marginTop: '300px',
                },
                'slow'
            )
            .animate(
                {
                    borderRadius: '0px',
                    margin: '15px 0px',
                },
                'slow'
            );
    });
});
