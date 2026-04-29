const { Team } = require('../../src/team/team.entity')

module.exports.team_get = async (req, res, next) => {
  try {
    let data = await Team.find()
    res.json(data)
  } catch (error) {
    next(error)
  }
}
