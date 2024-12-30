import Joi, { Schema } from '@hapi/joi';

const schema: Schema = Joi.object({
    orderDescription: Joi.string().messages({
        'any.required': 'Order description is required',
    }).required().label('Order description'),
    products: Joi.array().required().min(1).messages({
        'array.min': 'Select at least one product',
        'any.required': 'Select at least one product',
    }).label('Selected products'),
});

export default schema;
