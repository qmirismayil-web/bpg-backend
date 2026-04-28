const { News } = require('../../src/news/news.entity')

module.exports.news_get = async (req, res, next) => {
  let data = await News.find({ newsType: 'news' })
  next()
  res.json(data)
}
module.exports.telim_get = async (req, res, next) => {
  let data = await News.find({ newsType: 'telim' })
  next()
  res.json(data)
}

module.exports.news_id_get = async (req, res, next) => {
  const { id } = req.params
  const datum = await News.find({ _id: id })
  const data = datum[0]
  next()
  res.json(data)
}

module.exports.news_home_get = async (req, res, next) => {
  const data = await News.find({ showInHome: true, newsType: 'news' })
  next()
  res.json(data)
}
module.exports.telim_home_get = async (req, res, next) => {
  const data = await News.find({ showInHome: true, newsType: 'telim' })
  next()
  res.json(data)
}
