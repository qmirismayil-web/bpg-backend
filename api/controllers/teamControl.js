const { Team } = require('../../src/team/team.entity')

module.exports.team_get = async (req, res, next) => {
  let data = await Team.find()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
