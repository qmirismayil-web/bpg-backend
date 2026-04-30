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

  // 1. UNIVERSAL PERMISSIVE CORS
  app.use(cors({ origin: '*' }));
  app.options('*', cors());

  // 2. DISABLE CACHING TO BYPASS STALE PROXIES
  app.use((req, res, next) => {
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
  });

  app.use(express.json())
  app.use(express.static('public'))

  // 3. Routes registration (BEFORE AdminBro)
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

  app.get('/api/ping', (req, res) => res.status(200).send('pong'))

  // 4. AdminBro (Explicit Path)
  const admin = new AdminBro(options)
  const router = buildAdminRouter(admin)
  app.use('/admin', router) // Explicitly use /admin path
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

  // 5. Start listening IMMEDIATELY
  app.listen(port, () => {
    console.log(`Example app listening at PORT:${port}`)
    console.log(`CORS is enabled for all origins (*)`)
  })

  // 6. Database Connection (Background)
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Database connected successfully!')
  }).catch(error => {
    console.error('Database connection failed:', error.message)
  })

  // 7. Error Handlers
  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found', path: req.path })
  })

  app.use((err, req, res, next) => {
    console.error('Global Error:', err)
    res.status(500).json({ message: 'Internal Server Error' })
  })

  const selfUrl = process.env.SELF_URL || `https://bpg-admin-panel.onrender.com`
  cron.schedule('*/5 * * * *', () => {
    request(selfUrl, (err, res, body) => {
      if (err) return console.log('Self-ping failed:', err.message)
    })
  })
}

module.exports = run
