'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProjectSchema = schema({
    name: String,
    descripcion: String,
    category: String,
    year: Number,
    langs: String,
    image: String,
});

module.exports = mongoose.model('Project', ProjectSchema);
