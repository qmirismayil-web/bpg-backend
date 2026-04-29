const { Video } = require('../../src/homeVideo/video.entity');

module.exports.video_get = async (req, res, next) => {
   try {
      let data = await Video.find();
      res.json(data);
   } catch (error) {
      next(error);
   }
};
