const connection = require('../database/connection');

async function index(request, response){
    const incidents = await connection('incidents').select('*');
    return response.json(incidents);
}

async function create(request, response){
    const {title, description, value} = request.body;
    const {authorization} = request.headers;

    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id: authorization
    })

    return response.json({id});
}

async function remove(request, response){
    const {id} = request.params;
    const {authorization} = request.headers;

    const {ong_id} = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

    if(ong_id != authorization){
        return response.status(401).json({error: "Operation not permitted"})
    }

    await connection('incidents')
        .where('id', id)
        .delete();

    return response.status(204).send();
}

module.exports = {index, create, remove};