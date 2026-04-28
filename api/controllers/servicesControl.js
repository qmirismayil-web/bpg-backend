const { Service } = require('../../src/homeService/service.entity')
const { ServiceForm } = require('../../src/ServiceForm/ServiceForm.entity')
const {
  ServiceCategories,
} = require('../../src/ServiceCategories/ServiceCategories.entity')

module.exports.services_get = async (req, res, next) => {
  let data = await Service.find()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}

module.exports.categories_get = async (req, res, next) => {
  let services = await Service.find()
  let data = []
  services.map((item) => data.push(item.service_name))
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}

module.exports.subcategories_get = async (req, res, next) => {
  let data = await ServiceCategories.find()
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}

module.exports.services_post = async (req, res, next) => {
  const data = req.body
  let datum = new ServiceForm(data)
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
