const express = require("express");
const router = express.Router();



router.get('/', (req, res) => {
	res.render('index.ejs', {title 'First Mebsite'});

});



router.get('/contact', (req, res) => {
	res.render('contact.ejs', {title 'First Mebsite'});

});

module.exports = router;
//aqui van son las rutas