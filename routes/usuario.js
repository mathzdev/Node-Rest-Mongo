var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = require('../models/Usuario.js');

/* GET /usuario Listagem de passagens. */
router.get('/', function (req, res, next) {
    Usuario.find(function (err, usuario) {
        if (err) return next(err);
        res.json(usuario);
    });
});

/* POST /usuario Cadastro de usuario */
router.post('/', function (req, res, next) {
    Usuario.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /usuario/id  Lista filtrada por um usuario */
router.get('/:id', function (req, res, next) {
    Usuario.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /usuario/:id Salva a edição de usuario */
router.put('/:id', function (req, res, next) {
    Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /usuario/:id Deletando o usuario a partir do id */
router.delete('/:id', function (req, res, next) {
    Usuario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;