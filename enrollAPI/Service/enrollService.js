var buildUrl = require("build-url");
const superagent = require("superagent");
const usersAPIRoutes = require("../epConfig.js").usersAPIRoutes;
const enrollUtils = require("../utils/enrollUtils.js");
const usersAPIEndpoint = process.env.usersAPIEndpoint || "localhost:3003";
const utils = require("../utils/enrollUtils.js");

var enrollService = {};

enrollService.register = (user) => {
  return new Promise((resolve, reject) => {
    superagent
      .post(utils.concate("http://",usersAPIEndpoint,usersAPIRoutes.create))
      .query(user)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(res.text).data);
      });
  });
};


enrollService.deRegister = (_id) => {
  return new Promise((resolve, reject) => {
    superagent
      .delete(utils.concate("http://",usersAPIEndpoint,usersAPIRoutes.delete , "/",_id))
      .end((err, res) => {
        if (err) {
          reject(err);
        }


        resolve(JSON.parse(res.res.text).data);
      });
  });
};



module.exports = enrollService;
