// Dummy comment to trigger redeploy
const express = require('express')
const { default: AdminBro } = require('admin-bro')
const mongoose = require('mongoose')
const options = require('./admin.options')
const buildAdminRouter = require('./admin.router')
require('dotenv').config()
const request = require('request')
const getFileStream = require('./S3').getFileStream
const generateUploadURL = require('./S3').generateUploadURL
const cron = require('node-cron')
const cors = require('cors')

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
  const app = express()
  const port = process.env.PORT || 5000

  // 1. ABSOLUTE PERMISSIVE CORS
  app.use(cors())
  app.options('*', cors())

  // 2. NO CACHE HEADERS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    next()
  })

  app.use(express.json())
  app.use(express.static('public'))

  // 3. PRIORITIZED API ROUTES
  app.use(newsRoutes)
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
  app.use(careersRoutes)

  app.get('/api/ping', (req, res) => res.status(200).send('pong'))

  // 4. AdminBro (Mounted on /admin)
  const admin = new AdminBro(options)
  const router = buildAdminRouter(admin)
  app.use('/admin', router)
  app.use('/uploads', express.static('uploads'))

  app.get('/file/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
  })

  app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({ url })
  })

  app.get('/', (req, res) => {
    res.redirect('/admin')
  })

  // 5. Start listening
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  // 6. Async DB Connection
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch(err => console.error('DB Error:', err.message))

  // 7. Error handling
  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found', path: req.path })
  })

  const selfUrl = process.env.SELF_URL || `https://bpg-admin-panel.onrender.com`
  cron.schedule('*/5 * * * *', () => {
    request(selfUrl, (err) => {
      if (err) console.log('Self-ping failed')
    })
  })
}

module.exports = run
