var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado){
	resultado.send("este es mi curso")
}
 function cursos(peticion, resultodo){
 	resultodo.send("esto es los consola")
 }

 aplicacion.listen(3000)