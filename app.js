// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});


//=====================================================================================
// body parser
//=====================================================================================
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var hospitalRoutes = require('./routes/hospital');
var medicosRoutes = require('./routes/medico');
var loginRoutes = require('./routes/login');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');


var loteRoutes = require('./routes/lote');
var guardarHistorial = require('./routes/guardarHistorial');
var mostrarHistorial = require('./routes/mostrarHistorial');

var mostrarAnomalia = require('./routes/mostrarAnomalia');
var guardarAnomalia = require('./routes/guardarAnomalia');




// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {
    //mongoose.connection.openUri('mongodb://localhost:27017/nsmartagrodb', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'on line');
})


// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicosRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);

app.use('/lote', loteRoutes);
app.use('/guardarHistorial', guardarHistorial);
app.use('/mostrarHistorial', mostrarHistorial);


app.use('/mostrarAnomalia', mostrarAnomalia);
app.use('/guardarAnomalia', guardarAnomalia);

app.use('/', appRoutes);

// Escuchar peticiones
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'on line');
});