const cheerio = require('cheerio')
const request = require('request')
const { Home_Currency } = require('../../src/HomeCurrency/index.entity')
const { Currency } = require('../../src/Currency/index.entity')

// module.exports.currency_get = async (req, res, next) => {
//   request('https://cbar.az/', function (error, response, html) {
//     let data = []
//     const $ = cheerio.load(html)
//     $('div.relize_item>ul>li').each(function (i, element) {
//       const text = $(element).text()
//       const code = text.split('-')[0].trim()
//       const rate = text.split('-')[1].trim()
//       let sign = $(element).find('img').attr('src').split('/')[2].split('.')[0]
//       sign === 'table_cur' ? (sign = 'dot') : (sign = sign)
//       data.push({ code, rate, sign })
//     })
//     Home_Currency.insertMany(data)
//       .then(function () {
//         console.log('Data inserted') // Success
//       })
//       .catch(function (error) {
//         console.log(error) // Failure
//       })
//     res.send(data)
//     next()
//   })
// }
module.exports.currency_get = async (req, res, next) => {
  const data = await Home_Currency.find({})
  res.send(data)
}

// module.exports.currency_all_get = async (req, res, next) => {
//   request('https://cbar.az/currency/rates', function (error, response, html) {
//     let data = []
//     const $ = cheerio.load(html)
//     $('div.table_items>.table_row').each(function (i, element) {
//       const valyuta = $(element).find('.valuta').text()
//       const currency = {
//         AZ: valyuta,
//         ENG: valyuta,
//         RU: valyuta,
//       }
//       const code = $(element).find('.kod').text().toUpperCase()
//       const rate = $(element).find('.kurs').text()
//       let sign = $(element)
//         .find('.dynamic>img')
//         .attr('src')
//         .split('/')[2]
//         .split('.')[0]
//         .split('_')[1]
//       if (sign === 'cur') {
//         sign = 'dot'
//       }
//       data.push({ currency, code, rate, sign })
//     })
//     Currency.insertMany(data)
//       .then(function () {
//         console.log('Data inserted') // Success
//       })
//       .catch(function (error) {
//         console.log(error) // Failure
//       })
//     res.send(data)
//     next()
//   })
// }
module.exports.currency_all_get = async (req, res, next) => {
  const data = await Currency.find({})
  res.send(data)
}
module.exports.currency_date_get = async (req, res, next) => {
  const { date } = req.query
  console.log('date', date)
  request(`https://cbar.az/currency/rates?date=${date}`, function (
    error,
    response,
    html,
  ) {
    let data = []
    const $ = cheerio.load(html)
    $('div.table_items>.table_row').each(function (i, element) {
      const valyuta = $(element).find('.valuta').text()
      const kod = $(element).find('.kod').text().toUpperCase()
      const kurs = $(element).find('.kurs').text()
      let sign = $(element)
        .find('.dynamic>img')
        .attr('src')
        .split('/')[2]
        .split('.')[0]
        .split('_')[1]
      if (sign === 'cur') {
        sign = '.'
      }
      data.push({ valyuta, kod, kurs, sign })
    })
    console.log('data', data)
    res.send(data)
    next()
  })
}
