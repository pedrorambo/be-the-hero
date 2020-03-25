const express = require('express');
const routes = express.Router();
const OngsController = require('./controllers/OngsController');

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

module.exports = routes;