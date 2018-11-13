var express = require('express');
var app = express();

var Anomalia = require('../models/anomalia');

// Ruta Principal
app.get('/', (req, res, next) => {

    Anomalia.find({})
        .exec((err, anomalias) => {
            res.status(200).json({
                anomalias
            });
        });

});

module.exports = app;