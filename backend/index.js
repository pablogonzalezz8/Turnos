var express = require("express");
var app =express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

mongoose.connect("mongodb+srv://pablogonzalezz8:hannaescorpion123@cluster0.tiz4m.mongodb.net/turnos?retryWrites=true&w=majority")
 .then( function(db){
   console.log("Conectado a la base de datos")}
 )
   .catch(
     function(err){
       console.log(err)
     }
   )

var turnos_model = require("./models/turnos")

app.get("/turnos" , async function(req , res){
  var busqueda = await turnos_model.find()
  res.send(busqueda);

});


app.post("/turno" , async function(req ,res){
  
  var datos= req.body;
  var doc_insertado = new turnos_model(datos);
  await doc_insertado.save();
  res.send({respuesta: "Turno Reservado"})
});

app.delete("/turno/:id", async function (req ,res){
 var turno_id = req.params.id;
 await turnos_model.findByIdAndRemove(turno_id)
 res.send({respuesta: "Turno Eliminado"})
})

app.listen(3000);