'use strict';

const { restart } = require('nodemon');
const Project = require('../models/project');
const fs = require('fs');
const { exists } = require('../models/project');
const path = require('path');

const controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home',
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo test',
        });
    },

    saveProject: function (req, res) {
        const project = new Project();

        const params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;

        project.save((err, projectStored) => {
            if (err)
                return res.status(500).send({
                    message: 'Error al guardar en BBDD',
                });

            if (!projectStored)
                return res.status(404).send({
                    message: 'No se ha podido guardar el project',
                });

            return res.status(200).send({
                project: projectStored,
            });
        });
    },

    getProject: function (req, res) {
        const projectId = req.params.id;

        if (projectId == null)
            return res.status(404).send({
                message: 'No existe el ID indicado',
            });

        Project.findById(projectId, (err, project) => {
            if (err)
                return res.status(500).send({
                    message: 'Error al devolver los datos',
                });

            if (!project)
                return res.status(404).send({
                    message: 'El projecto no existe',
                });

            return res.status(200).send({
                project,
            });
        });
    },

    getProjects: function (req, res) {
        Project.find({})
            .sort('-year')
            .exec((err, projects) => {
                if (err)
                    return res.status(500).send({
                        message: 'Error al devolver los projectos',
                    });

                if (!projects)
                    return res.status(404).send({
                        message: 'No existen projectos que mostrar',
                    });

                return res.status(200).send({
                    projects,
                });
            });
    },

    updateProject: function (req, res) {
        const projectId = req.params.id;
        const update = req.body;

        Project.findByIdAndUpdate(
            projectId,
            update,
            { new: true },
            (err, projectUpdated) => {
                if (err)
                    return res.status(500).send({
                        message: 'Error al actualizar',
                    });

                if (!projectUpdated)
                    return res.status(404).send({
                        message: 'No existe el projecto',
                    });

                return res.status(200).send({
                    project: projectUpdated,
                });
            }
        );
    },

    deleteProject: function (req, res) {
        const projectId = req.params.id;

        Project.findByIdAndDelete(projectId, (err, projectDeleted) => {
            if (err)
                return res.status(500).send({
                    message: 'No se ha podido borrar el proyecto',
                });

            if (!projectDeleted)
                return res.status(404).send({
                    message: 'No se puede eliminar el proyecto',
                });

            return res.status(200).send({
                project: projectDeleted,
            });
        });
    },

    uploadImage: function (req, res) {
        const projectId = req.params.id;
        let fileName = 'Imagen no subida...';

        if (req.files) {
            const filePath = req.files.image.path;
            const fileSplit = filePath.split('/');
            fileName = fileSplit[1];

            const extSplit = fileName.split('.');
            const fileExt = extSplit[1];

            if (
                fileExt == 'png' ||
                fileExt == 'jpg' ||
                fileExt == 'jpeg' ||
                fileExt == 'gif'
            ) {
                Project.findByIdAndUpdate(
                    projectId,
                    { image: fileName },
                    { new: true },
                    (err, projectUpdated) => {
                        if (err)
                            return res.status(200).send({
                                message: 'La imagen no se ha podido subir',
                            });

                        if (!projectUpdated)
                            return res.status(404).send({
                                message: 'El proyecto no existe',
                            });

                        return res.status(200).send({
                            project: projectUpdated,
                        });
                    }
                );
            } else {
                fs.unlink(filePath, err => {
                    return res.status(200).send({
                        message: 'La extension no es valida',
                    });
                });
            }
        } else {
            return res.status(500).send({
                message: fileName,
            });
        }
    },

    getImageFile: function (req, res) {
        var file = req.params.image;
        var path_file = './uploads/' + file;

        fs.exists(path_file, exists => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(200).send({
                    message: 'No existe la imagen...',
                });
            }
        });
    },
};

module.exports = controller;
