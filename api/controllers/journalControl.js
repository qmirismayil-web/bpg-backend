const {
  JournalCategories,
} = require('../../src/JournalCategories/JournalCategories.entity')
const { JournalForm } = require('../../src/JournalForm/JournalForm.entity')

module.exports.categories_get = async (req, res, next) => {
  let data = await JournalCategories.find()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}

module.exports.form_post = async (req, res, next) => {
  const data = req.body
  let datum = new JournalForm(data)
  // save model to database
  datum.save(function (err, data) {
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
