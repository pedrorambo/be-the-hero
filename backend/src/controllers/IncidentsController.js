const connection = require('../database/connection');

async function index(request, response) {
    const {page = 1} = request.query;
    const INCIDENTS_PER_PAGE = 5;

    // Number incidents
    const count = await connection('incidents').count('*').first();
    response.header('X-Total-Count', count['count(*)']);

    const incidents = await connection('incidents')
        .limit(INCIDENTS_PER_PAGE)
        .offset((page - 1) * INCIDENTS_PER_PAGE)
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.whatsapp',
            'ongs.email',
            'ongs.city',
            'ongs.uf'
        ]);
    return response.json(incidents);
}

async function select(request, response) {
    const {id} = request.params;

    const incident = await connection('incidents')
        .where('incidents.id', id)
        .join('ongs', 'ongs.id', 'incidents.ong_id')
        .select(
            'incidents.title',
            'incidents.description',
            'incidents.value',
            'ongs.name',
            'ongs.city',
            'ongs.uf',
            'ongs.whatsapp',
            'ongs.email'
        )
        .first();

    return response.json(incident);
}

async function create(request, response) {
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

async function remove(request, response) {
    const {id} = request.params;
    const {authorization} = request.headers;

    const {ong_id} = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

    if (ong_id != authorization) {
        return response.status(401).json({error: "Operation not permitted"})
    }

    await connection('incidents')
        .where('id', id)
        .delete();

    return response.status(204).send();
}

module.exports = {index, create, remove, select};