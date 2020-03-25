const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
})

routes.post('/ongs', async (request, response) => {
    const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        name,
        email,
        whatsapp,
        city,
        uf,
        id
    })

    return response.json({id});
})

module.exports = routes;