const express = require('express')
const router = express.Router()
const todoController = require('./controller')
const { getTodoByIdSchema, createTodoSchema, updateTodoSchema, deleteTodoSchema, doneTodoSchema } = require('./modelSchema')
const colors = require('colors')

router.get('/', async(req, res) => {
  const result = await todoController.getTodo()
  res.json({ ...result })
})

router.get('/:id', async(req, res) => {
  const result = getTodoByIdSchema.validate(req.params)
  if (result.error) {
    console.log(colors.cyan.bold(`[ERROR] ${result.error.message}`))
    res.status(422).json({ errors: 'invalid request' })
  } else {
    const response = await todoController.getTodoById(req.params.id)
    res.json({ ...response })
  }
})

router.post('/', async(req, res) => {
  const result = createTodoSchema.validate(req.body)

  if (result.error) {
    console.log(colors.cyan.bold(`[ERROR] ${result.error.message}`))
    res.status(422).json({ errors: 'invalid request' })
  } else {
    const response = await todoController.createTodo(req.body)
    res.json({ ...response })
  }
})

router.put('/', async(req, res) => {
  const result = updateTodoSchema.validate(req.body)

  if (result.error) {
    console.log(colors.cyan(`[ERROR] ${result.error.message}`))
    res.status(422).json({ errors: 'invalid request' })
  } else {
    const response = await todoController.updateTodo(req.body)
    res.json({ ...response })
  }
})

router.delete('/', async(req, res) => {
  const result = deleteTodoSchema.validate(req.body)

  if (result.error) {
    console.log(colors.cyan(`[ERROR] ${result.error.message}`))
    res.status(422).json({ errors: 'invalid request' })
  } else {
    const response = await todoController.deleteTodo(req.body)
    res.json({ ...response })
  }
})

router.put('/done', async(req, res) => {
  const result = doneTodoSchema.validate(req.body)

  if (result.error) {
    console.log(colors.cyan(`[ERROR] ${result.error.message}`))
    res.status(422).json({ errors: 'invalid request' })
  } else {
    const response = await todoController.doneTodo(req.body)
    res.json({ ...response })
  }
})

module.exports = router
