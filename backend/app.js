'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// rutes files
var projectRoutes = require('./rutes/project');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutes
/*
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
*/

app.use('/api', projectRoutes);

module.exports = app;
