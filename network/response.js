exports.success = function(req, res, message, status) {
  res.status(status || 200).send({
    data: message,
    error: ''
  })
}

exports.error = function(req, res, message, status, details) {
  console.log(`[response Error] ${details}`)

  res.status(status || 500).send({
    data: '',
    error: message
  })
}
