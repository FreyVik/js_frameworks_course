'use strict';

var getSizes = () => {
    console.log('W-width: ' + window.innerWidth);
    console.log('W-height: ' + window.innerHeight);
    console.log('S-width: ' + screen.width);
    console.log('S-height: ' + screen.height);
};
getSizes();

console.log(window.location);

var redirect = url => {
    window.location.href = url;
};
// redirect('https://www.google.com');

var openWindow = url => {
    window.open(url);
};
// openWindow('https://www.google.com');
