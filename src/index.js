const express = require('express');
const app = express();

//setings
app.set('port', 3000);


//misslewares las funciones que se ejecutan antes que laruta digan algo

//


//rutas rutes


//static file  archivos estaticos



app.get('/', (req, res) => {
	res.send("hola mundo")
	
	});
	
	
	
	//escuchando el servidor



app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'))

})