const { Slide } = require('../../src/slide/slide.entity')

module.exports.slides_get = async (req, res, next) => {
  let data = await Slide.find()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
