const db = require('mongoose')
const colors = require('colors')

db.Promise = global.Promise

async function connect(app) {
  db.connect(
    'mongodb+srv://jose:mongotodo@cluster0-vscks.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )

  db.connection.on('error', (err) => {
    console.log(colors.red(`[APP ERROR] unable to connect to database ${err}`))
    throw new Error('cannot to conect database')
  })

  db.connection.on('connected', () => {
    app.emit('readyBD')
    console.log(colors.green('[APP] Conected to database'))
  })
}

module.exports = {
  connect
}
