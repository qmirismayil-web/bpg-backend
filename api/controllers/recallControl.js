const { Recall } = require('../../src/Recall/recall.entity')

module.exports.recall_post = async (req, res, next) => {
  const { fullname, subject, contact } = req.body
  let data = new Recall({
    fullname: fullname,
    subject: subject,
    contact_info: contact,
  })
  // save model to database
  data.save(function (err, data) {
    if (err) return console.error(err)
    console.log(data.fullname + '  saved to collection.')
  })

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.send('ok').status(200)
  next()
}
