var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var turno = new Schema ({
    nombre: String,
    fecha: String,
    hora: String,
    especialista: String
});

module.exports = mongoose.model("turnos" , turno)


