'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// rutes files

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// rutes
app.get('/', (req, res) => {
    res.status(200).send('<h1>Pagina de inicio</h1>');
});

app.post('/test/:id', (req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);

    res.status(200).send({
        message: 'Hola mundo desde API-REST en nodeJs',
    });
});

module.exports = app;
