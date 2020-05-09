const todo = require('../components/todo/network')

const routes = function(server) {
  server.use('/todo', todo)
}

module.exports = routes
