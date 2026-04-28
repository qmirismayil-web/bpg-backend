const { Careers } = require('../../src/Careers/Careers.entity')

module.exports.careers_get = async (req, res, next) => {
  const data1 = await Careers.find({ cardType: 'vacancy' })
  const data2 = await Careers.find({ cardType: 'program' })
  const data = { vacancy: data1, program: data2 }
  next()
  res.json(data)
}
module.exports.vacancy_get = async (req, res, next) => {
  const { id } = req.params
  const data = await Careers.find({ _id: id })
  next()
  res.json(data[0])
}
