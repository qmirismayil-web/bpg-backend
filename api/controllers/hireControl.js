const { RemoteHires } = require('../../src/RemoteHires/RemoteHires.entity')

module.exports.hire_post = async (req, res, next) => {
  const data = req.body
  console.log(data)
  let datum = new RemoteHires(data)
  // save model to database
  datum.save(function (err, data) {
    if (err) return console.error(err)
    console.log(data.fullname + '  saved to collection.')
  })
  res.send('ok').status(200)
  next()
}
