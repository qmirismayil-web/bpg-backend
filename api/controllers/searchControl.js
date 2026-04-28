const { Service } = require('../../src/homeService/service.entity')
const { News } = require('../../src/news/news.entity')

module.exports.search_get = async (req, res, next) => {
  const { word, lang } = req.params
  let datum = await Service.find()
  let news = await News.find()
  let data = []
  const up = lang.toUpperCase()
  const low = lang.toLowerCase()
  datum.forEach((item, i) => {
    let word1 = item.service_name[up].toLowerCase()
    if (word1.includes(word.toLowerCase())) {
      data.push({
        title: item.service_name[up],
        text: item[`description_${low}`],
        type: 'service',
        id: i + 1,
      })
    }
  })
  news.forEach((item, i) => {
    let word1 = item.title[up].toLowerCase()
    if (word1.includes(word.toLowerCase())) {
      data.push({
        title: item.title[up],
        text: item[`description_${low}`],
        type: 'news',
        id: item._id,
      })
    }
  })
  next()
  res.json(data)
}
