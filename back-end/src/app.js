const path = require('path');
express = require('express');
const api_restaurent=require("./restaurant/Restaurant.js")
const api_user=require("./user/input.js")
const api_place=require("./place/place.js")
const app = express()




//const api = require('./api.js');

// Détermine le répertoire de base

const basedir = path.normalize(path.dirname(__dirname));

console.debug(`Base directory: ${basedir}`);

//app.use('/api', api.default());
app.use('/restaurant',api_restaurent.default());
app.use('/User',api_user.default());
app.use('/place',api_place.default())


// Démarre le serveur
app.on('close', () => {

});
exports.default = app;

