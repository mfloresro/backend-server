var mongoose = require('mongoose');
var Shcema = mongoose.Schema;
const Mixed = mongoose.Schema.Types.Mixed;
var anomaliaShema = new Shcema({
    // anomalia: mongoose.Schema.Types.Mixed
    anomalia: [String]
});

module.exports = mongoose.model('Anomalia', anomaliaShema);