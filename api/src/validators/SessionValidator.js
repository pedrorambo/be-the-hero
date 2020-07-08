const {celebrate, Joi, Segments} = require('celebrate');

const create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().hex().length(8).required()
    })
});

module.exports = {create};