const express = require('express');
const routes = express.Router();
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.remove);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;
