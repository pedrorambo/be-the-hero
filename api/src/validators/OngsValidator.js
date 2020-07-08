const {celebrate, Joi, Segments} = require('celebrate');

const create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().max(45),
        email: Joi.string().required().email().max(100),
        whatsapp: Joi.string().required().max(12),
        city: Joi.string().required().max(45),
        uf: Joi.string().required().min(2).max(2),
    })
});

module.exports = {create};