const TodoModel = require('./model')
const colors = require('colors')

async function get() {
  try {
    const data = await TodoModel.find()
    return data
  } catch (error) {
    console.log(colors.red.underline(`[Query] ${error.message}`))
    return { errors: 'Query Error' }
  }
}

async function getById(id) {
  try {
    const data = await TodoModel.findById(id)

    if (!data || data === undefined) {
      return { errors: `Query Error cannot find id: ${id}` }
    }

    return data
  } catch (error) {
    console.log(colors.red.underline(`[Query] ${error.message}`))
    return { errors: 'Query Error' }
  }
}

async function add(payload) {
  try {
    const todo = new TodoModel(payload)
    const result = await todo.save()
    return result
  } catch (error) {
    console.log(colors.red.underline(`[Query] ${error.message}`))
    return { errors: 'Query Error' }
  }
}

async function update(payload) {
  try {
    const foundTodo = await TodoModel.findOne({
      _id: payload.id
    })

    if (!foundTodo || foundTodo === undefined) {
      return { errors: `Query Error cannot find id: ${payload.id}` }
    }

    foundTodo.description = payload.description
    const result = await foundTodo.save()
    return result
  } catch (error) {
    console.log(colors.red.underline(`[Query] ${error.message}`))
    return { errors: 'Query Error' }
  }
}

async function remove(payload) {
  try {
    const foundTodo = await TodoModel.findByIdAndDelete({
      _id: payload.id
    })

    if (!foundTodo || foundTodo === undefined) {
      return { errors: `Query Error cannot find id: ${payload.id}` }
    }

    return foundTodo
  } catch (error) {
    console.log(colors.red.underline(`[Query] ${error.message}`))
    return { errors: 'Query Error' }
  }
}

module.exports = {
  get,
  getById,
  add,
  update,
  remove
}
