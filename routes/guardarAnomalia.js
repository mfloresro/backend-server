var express = require('express');
var app = express();
var Anomalia = require('../models/anomalia');

app.get('/', (req, res) => {
    // var valor = req.params.valor;

    var anomalia = new Anomalia({
        //     anomalia: req.params.valor
    });
    anomalia.save((err, guardarAnomalia) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al guardar anomalia',
                errors: err
            });
        }

        res.status(200).json({
            guardarAnomalia
        });
    });
});


app.get('/:id/:valor', (req, res) => {
    var id = req.params.id;
    var valor = req.params.valor;
    Anomalia.findById({ '_id': id })
        .exec((err, anomalias) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar índice: ' + id,
                    errors: err
                });
            }
            if (!anomalias) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El anomalia con el id ' + id + ' no existe',
                    errors: { message: 'No existe un analia con ese ID' }
                });
            }

            var arr = [];
            arr = anomalias.anomalia;
            arr.push(valor);
            anomalias.anomalia = arr;
            // var obj = {};
            // // console.log('anomalias ' + anomalias.anomalia);
            // arr = anomalias.anomalia
            // obj = anomalias.anomalia;
            // // console.log(Object.keys(obj).length);
            // var tam = Object.keys(obj).length;

            // // console.log('anomalias ' + arr);
            // valor = Json.parse(valor);
            // obj[tam] = valor;
            // // console.log('valor=', obj[tam]);
            // arr.push(obj[tam]);
            // // console.log('obj  =', obj[tam]);
            // console.log('anomalias ' + arr);
            // anomalias.anomalia = arr;


            //arr = anomalias.anomalia;
            // arr.push(valor);
            //myobj = JSON.parse(valor);
            // console.log('my', myobj);
            // arr.push(myobj);
            // anomalias.anomalia = arr;
            // console.log('anomalias ' + arr);

            anomalias.save((err, AnomaliaGuardado) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Error al actualizar lote',
                        errors: err
                    });
                }

                res.status(200).json({
                    anomalias: 'Guardado'
                });
            });




            //
            // console.log(valor);
            //arr.anomalia.push(valor);
            // console.log(arr);
            // anomalias.anomalia = arr;

            // res.status(200).json({
            //     anomalias: 'Guardado'
            // });

            // anomalias.save((err, AnomaliaGuardado) => {
            //     if (err) {
            //         return res.status(400).json({
            //             ok: false,
            //             mensaje: 'Error al actualizar lote',
            //             errors: err
            //         });
            //     }

            //     res.status(200).json({
            //         anomalias: 'Guardado'
            //     });
            // });




        });
});



module.exports = app;