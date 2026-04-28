const { Video } = require('../../src/homeVideo/video.entity');

module.exports.video_get = async (req, res, next) => {
   let datum = await Video.find();
   const data = datum;

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
   res.json(data);
};
