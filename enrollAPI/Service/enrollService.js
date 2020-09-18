var buildUrl = require("build-url");
const superagent = require("superagent");

var enrollService = {};

enrollService.register = (user) => {
  return new Promise((resolve, reject) => {
    superagent
      .post("localhost:3000/api/users")
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
      .delete("localhost:3000/api/users/" + _id)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(res.text).data);
      });
  });
};



module.exports = enrollService;
