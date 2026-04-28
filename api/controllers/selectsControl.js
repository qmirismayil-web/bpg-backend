const { Selects } = require('../../src/Selects/Selects.entity');

module.exports.gender_get = async (req, res, next) => {
   let datum = await Selects.find({ selectType: 'gender' });
   let data = datum[0].categories;

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
   res.json(data);
};

module.exports.entrepreneurship_get = async (req, res, next) => {
   let datum = await Selects.find({ selectType: 'entrepreneurship' });
   let data = datum[0].categories;

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
   res.json(data);
};

module.exports.workspace_get = async (req, res, next) => {
   let datum = await Selects.find({ selectType: 'workspace' });
   let data = datum[0].categories;

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
   res.json(data);
};

module.exports.position_get = async (req, res, next) => {
   let datum = await Selects.find({ selectType: 'position' });
   let data = datum[0].categories;

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
   res.json(data);
}

module.exports.marital_get = async (req, res, next) => {
   let datum = await Selects.find({ selectType: 'marital' });
   let data = datum[0].categories;

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
   res.json(data);
}

module.exports.subject_get = async (req, res, next) => {
   let datum = await Selects.find({ selectType: 'subject' });
   let data = datum[0].categories;

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
   res.json(data);
}