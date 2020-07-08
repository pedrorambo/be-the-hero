const express = require('express');
const routes = express.Router();

// CONTROLLERS
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// VALIDATORS
const OngsValidator = require('./validators/OngsValidator');
const IncidentsValidator = require('./validators/IncidentsValidator');
const ProfileValidator = require('./validators/ProfileValidator');
const SessionValidator = require('./validators/SessionValidator');

// ROUTES
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsValidator.create, OngsController.create);

routes.get('/incidents', IncidentsValidator.index ,IncidentsController.index);
routes.get('/incidents/:id', IncidentsValidator.select , IncidentsController.select);
routes.post('/incidents', IncidentsValidator.create,IncidentsController.create);
routes.delete('/incidents/:id', IncidentsValidator.remove, IncidentsController.remove);

routes.get('/profile', ProfileValidator.index, ProfileController.index);

routes.post('/session', SessionValidator.create, SessionController.create);

module.exports = routes;
