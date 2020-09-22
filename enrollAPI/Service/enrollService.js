
const usersAPIRoutes = require("../epConfig.js").usersAPIRoutes;
const enrollUtils = require("../utils/enrollUtils.js");
const usersAPIEndpoint = process.env.usersAPIEndpoint || "localhost:3003";
const utils = require("../utils/enrollUtils.js");
const axios = require('axios');

var enrollService = {};

enrollService.register = (user) => {
  return new Promise((resolve, reject) => {
    axios
  .post(utils.concate("http://",usersAPIEndpoint,usersAPIRoutes.create), user)
  .then((res) => {
    resolve(res.data);
  })
  .catch((error) => {
    reject(error)
  })    
  });
};


enrollService.deRegister = (_id) => {
  return new Promise((resolve, reject) => {
    axios
  .delete(utils.concate("http://",usersAPIEndpoint,usersAPIRoutes.delete , "/",_id), {})
  .then((res) => {
    resolve(res.data)
  })
  .catch((error) => {
    reject(error)
  });
  });
};



module.exports = enrollService;
