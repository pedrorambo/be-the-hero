const connection = require('../database/connection');

async function create(request, response){
    const {id} = request.body;

    const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

    if(!ong){
        return response.status(400).json({error: 'Can not found ong id'});
    }

    return response.json({name: ong.name});
}

module.exports = {create};