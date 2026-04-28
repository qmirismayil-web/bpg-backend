const {
  IstehsalatTeqvimi,
} = require('../../src/IstehsalatTeqvimi/index.entity')

module.exports.holidays_get = async (req, res, next) => {
  let data = await IstehsalatTeqvimi.find()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
