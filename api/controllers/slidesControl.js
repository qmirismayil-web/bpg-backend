const { Slide } = require('../../src/slide/slide.entity')

module.exports.slides_get = async (req, res, next) => {
  try {
    let data = await Slide.find()
    res.json(data)
  } catch (error) {
    next(error)
  }
}
