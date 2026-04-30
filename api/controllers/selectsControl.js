// const { Selects } = require('../../src/Selects/Selects.entity');

// module.exports.gender_get = async (req, res, next) => {
//    let datum = await Selects.find({ selectType: 'gender' });
//    let data = datum[0].categories;

//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//    next();
//    res.json(data);
// };

// module.exports.entrepreneurship_get = async (req, res, next) => {
//    let datum = await Selects.find({ selectType: 'entrepreneurship' });
//    let data = datum[0].categories;

//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//    next();
//    res.json(data);
// };

// module.exports.workspace_get = async (req, res, next) => {
//    let datum = await Selects.find({ selectType: 'workspace' });
//    let data = datum[0].categories;

//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//    next();
//    res.json(data);
// };

// module.exports.position_get = async (req, res, next) => {
//    let datum = await Selects.find({ selectType: 'position' });
//    let data = datum[0].categories;

//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//    next();
//    res.json(data);
// }

// module.exports.marital_get = async (req, res, next) => {
//    let datum = await Selects.find({ selectType: 'marital' });
//    let data = datum[0].categories;

//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//    next();
//    res.json(data);
// }

// module.exports.subject_get = async (req, res, next) => {
//    let datum = await Selects.find({ selectType: 'subject' });
//    let data = datum[0].categories;

//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//    next();
//    res.json(data);
// }



const { Selects } = require('../../src/Selects/Selects.entity');

// Helper function (to avoid repeating code)
const getSelectData = async (type, res) => {
   try {
      const datum = await Selects.find({ selectType: type });

      // ✅ Fix 1: handle empty data
      if (!datum || datum.length === 0) {
         return res.status(404).json({ message: `${type} data not found` });
      }

      const data = datum[0].categories;

      // ✅ Only one response
      return res.json(data);

   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
   }
};

// Controllers
module.exports.gender_get = (req, res) => {
   return getSelectData('gender', res);
};

module.exports.entrepreneurship_get = (req, res) => {
   return getSelectData('entrepreneurship', res);
};

module.exports.workspace_get = (req, res) => {
   return getSelectData('workspace', res);
};

module.exports.position_get = (req, res) => {
   return getSelectData('position', res);
};

module.exports.marital_get = (req, res) => {
   return getSelectData('marital', res);
};

module.exports.subject_get = (req, res) => {
   return getSelectData('subject', res);
};
