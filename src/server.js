// Dummy comment to trigger redeploy
const express = require('express')
const { default: AdminBro } = require('admin-bro')
const mongoose = require('mongoose')
const options = require('./admin.options')
const buildAdminRouter = require('./admin.router')
require('dotenv').config()
const request = require('request')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const { getFileStream, generateUploadURL } = require('./S3')
const cron = require('node-cron')

// routes
const serviceRoutes = require('../api/routes/services')
const selectRoutes = require('../api/routes/selects')
const contactRoutes = require('../api/routes/contact')
const videoRoutes = require('../api/routes/video')
const pagesRoutes = require('../api/routes/pages')
const journalRoutes = require('../api/routes/journal')
const slideRoutes = require('../api/routes/slides')
const recallRoutes = require('../api/routes/recall')
const vacancyRoutes = require('../api/routes/vacancy')
const subscribeRoutes = require('../api/routes/subscribe')
const valyutaRoutes = require('../api/routes/currency')
const verifyRoutes = require('../api/routes/verify')
const remoteRoutes = require('../api/routes/remote')
const teqvimRoutes = require('../api/routes/teqvim')
const teamRoutes = require('../api/routes/team')
const searchRoutes = require('../api/routes/search')
const newsRoutes = require('../api/routes/news')
const careersRoutes = require('../api/routes/careers')

const run = async () => {
  try {
    console.log('Connecting to database...')
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected successfully!')
  } catch (error) {
    console.error('Database connection failed:', error.message)
    // We still call run() but warn the user. On Render, it's better to log and retry or exit.
    process.exit(1)
  }
  const admin = new AdminBro(options)
  const router = buildAdminRouter(admin)

  //*middleware
  app.use(express.static(__dirname + '/public'))
  app.use(cors())
  app.use(express.json())

  app.use(admin.options.rootPath, router)
  app.use('/uploads', express.static('uploads'))
  app.get('/file/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
  })
  app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    console.log(url)
    res.send({ url })
  })
  app.get('/', function (req, res) {
    res.redirect('/admin')
  })
  //*routes
  app.use(serviceRoutes)
  app.use(selectRoutes)
  app.use(contactRoutes)
  app.use(videoRoutes)
  app.use(pagesRoutes)
  app.use(journalRoutes)
  app.use(slideRoutes)
  app.use(recallRoutes)
  app.use(vacancyRoutes)
  app.use(subscribeRoutes)
  app.use(valyutaRoutes)
  app.use(verifyRoutes)
  app.use(remoteRoutes)
  app.use(teqvimRoutes)
  app.use(teamRoutes)
  app.use(searchRoutes)
  app.use(newsRoutes)
  app.use(careersRoutes)

  const selfUrl = process.env.SELF_URL || `http://localhost:${port}`
  cron.schedule('*/5 * * * *', () => {
    request(selfUrl, (err, res, body) => {
      if (err) {
        return console.log('Self-ping failed:', err.message)
      }
      // console.log('pinged')
    })
  })
  app.listen(port, () => console.log(`Example app listening at PORT:${port}`))
}

module.exports = run
