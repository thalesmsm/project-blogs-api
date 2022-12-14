const Joi = require('joi');

const validateUserBody = (body) => 
  Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  }).validate(body);

const validateCategoryBody = (body) => 
  Joi.object({
    name: Joi.string().required(),
  }).validate(body);

module.exports = {
  validateUserBody,
  validateCategoryBody,
};