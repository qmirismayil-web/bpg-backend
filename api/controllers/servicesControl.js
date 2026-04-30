const { Service } = require('../../src/homeService/service.entity')
const { ServiceForm } = require('../../src/ServiceForm/ServiceForm.entity')
const {
  ServiceCategories,
} = require('../../src/ServiceCategories/ServiceCategories.entity')

module.exports.services_get = async (req, res, next) => {
  try {
    let data = await Service.find()
    res.json(data)
  } catch (error) {
    next(error)
  }
}

module.exports.categories_get = async (req, res, next) => {
  try {
    let services = await Service.find()
    let data = services.map((item) => {
      if (item && item.service_name) {
        return item.service_name
      }
      return { AZ: '', ENG: '', RU: '' }
    })
    res.json(data)
  } catch (error) {
    next(error)
  }
}

module.exports.subcategories_get = async (req, res, next) => {
  try {
    let data = await ServiceCategories.find()
    res.json(data || [])
  } catch (error) {
    next(error)
  }
}

module.exports.services_post = async (req, res, next) => {
  try {
    const data = req.body
    let datum = new ServiceForm(data)
    await datum.save()
    res.status(200).send('ok')
  } catch (error) {
    next(error)
  }
}
