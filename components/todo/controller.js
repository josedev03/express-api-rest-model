const db = require('./store')
const colors = require('colors')

async function getTodo() {
  try {
    const resultQuery = await db.get()

    if (resultQuery.errors) {
      return { errors: resultQuery.errors }
    }

    const listTodo = []
    resultQuery.map((element) => {
      const temp = {
        id: element._id,
        description: element.description
      }
      listTodo.push(temp)
    })

    return {
      data: listTodo
    }
  } catch (error) {
    console.log(colors.red(`[ERROR] ${error}`))
    return { errors: error.message }
  }
}
// req.params
async function getTodoById(id) {
  try {
    const resultQuery = await db.getById(id)

    if (resultQuery.errors) {
      return { errors: resultQuery.errors }
    }

    return {
      data: {
        id: resultQuery._id,
        description: resultQuery.description
      }
    }
  } catch (error) {
    console.log(colors.red(`[ERROR] ${error}`))
    return { errors: error.message }
  }
}

async function createTodo(payload) {
  const result = await db.add(payload)
  if (result.errors) {
    return {
      errors: ['error al crear la tarea']
    }
  }

  return {
    data: {
      id: result._id,
      message: 'todo created'
    }
  }
}

async function updateTodo(payload) {
  try {
    const resultUpdate = await db.update(payload)
    if (resultUpdate.errors) {
      return { errors: resultUpdate.errors }
    }

    return {
      data: {
        id: resultUpdate._id,
        message: 'todo updated'
      }
    }
  } catch (error) {
    console.log(colors.red(`[ERROR] ${error}`))
    return { errors: error.message }
  }
}

async function deleteTodo(payload) {
  const resultDelete = await db.remove(payload)
  if (resultDelete.errors) {
    return { errors: resultDelete.errors }
  }

  return {
    data: {
      id: resultDelete._id
    }
  }
}

module.exports = {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
}
