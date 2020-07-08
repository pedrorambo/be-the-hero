const {celebrate, Joi, Segments} = require('celebrate');

const index = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().hex().length(8).required()
    }).unknown()
});

module.exports = {index};