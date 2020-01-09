var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio)
function inicio(peticion, resultado)
{
  resultado.send( "este es el<strong>home</strong>") 
}  
aplicacion.listen(3000);
