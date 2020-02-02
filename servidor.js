const express = require("express");
const app = express();


//const routes = require("./routes");


//settings 

app.set('appName', 'primer server');
app.set('views', __dirname + '/views');
app.set('views angine', 'ejs')

//middlewares

//router

app.get('/', (req, res) => {
	res.render('index.ejs', { title: 'Primera Pagina'});
    next();
});



app.get('./navigation', (req, res) => {
	res.render('contact.ejs', { title: 'Primera Pagina' });

});


app.get('./contact', (req, res) => {
	res.render('contact.ejs', { title: 'Primera Pagina' });

});


app.listen(8080, function () {
	console.log('FUNCIONA');
	console.log('Nombre de la app: ', app.get('appName'))
});
