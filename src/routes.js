const express = require('express');
const routes = express.Router();
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

routes.get('/profile', ProfileController.index);

module.exports = routes;
