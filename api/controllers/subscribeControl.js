const { SubscribedEmails } = require('../../src/subscribe/subscribe.entity')

module.exports.subscribe_post = async (req, res, next) => {
  const { email } = req.body
  let data = new SubscribedEmails({
    email_or_phone: email,
  })
  // save model to database
  data.save(function (err, data) {
    if (err) return console.error(err)
    console.log(data.email_or_phone + '  saved to collection.')
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
