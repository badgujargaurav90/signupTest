const Joi = require('joi');

const loginSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    isSubscribed: Joi.boolean()
});
module.exports = loginSchema;