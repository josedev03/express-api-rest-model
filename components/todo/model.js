const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  description: String,
  status: Number
})

const model = mongoose.model('Todo', todoSchema)

module.exports = model
