const { RemoteWorker } = require('../../src/RemoteWorker/RemoteWorker.entity')

module.exports.work_post = async (req, res, next) => {
  const data = req.body
  let datum = new RemoteWorker(data)
  // save model to database
  datum.save(function (err, data) {
    if (err) return console.error(err)
    console.log(data.fullname + '  saved to collection.')
  })
  res.send('ok').status(200)
  next()
}
