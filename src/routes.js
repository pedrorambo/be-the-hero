const express = require('express')

const routes = express.Router()

const database = {
    users: [
        {
            id: 1,
            name: 'Pedro Rambo',
            idade: 20
        },
        {
            id: 2,
            name: 'Outra Pessoa',
            idade: 24
        }
    ]
}

routes.get('/users', (request, response) =>{
    const query = request.query
    if(Object.keys(query).length){
        return response.json({query: query, users: database.users[0]})
    }
    return response.json(database.users)
})

routes.get('/users/:id', (request, response) =>{
    const id = request.params.id
    const found = database.users.find(user => user.id == id)
    return response.json(found)
})

routes.post('/users', (request, response) => {
    const data = request.body
    return response.json({message: 'User added', user: data})
})

routes.delete('/users/:id', (request, response) => {
    const id = request.params.id
    return response.json({message: 'User removed', id: id})
})

module.exports = routes