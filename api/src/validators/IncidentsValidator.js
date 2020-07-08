const {celebrate, Joi, Segments} = require('celebrate');

const index = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().integer().min(1)
    })
});

const select = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().integer().min(1).required()
    })
});

const create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().max(150),
        description: Joi.string().required().max(255),
        value: Joi.number().required().min(10).max(5000)
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().hex().length(8).required()
    }).unknown()
});

const remove = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().integer().min(0).required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().hex().length(8).required()
    }).unknown()
});

module.exports = {create, index, select, remove};