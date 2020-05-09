const Joi = require('@hapi/joi')

const getTodoByIdSchema = Joi.object({
  id: Joi.string().required()
})

const createTodoSchema = Joi.object({
  description: Joi.string()
    .required()
    .min(3)
})

const updateTodoSchema = Joi.object({
  id: Joi.string().required(),
  description: Joi.string()
    .required()
    .min(3)
})

const deleteTodoSchema = Joi.object({
  id: Joi.string().required()
})

module.exports = {
  getTodoByIdSchema,
  createTodoSchema,
  updateTodoSchema,
  deleteTodoSchema
}
