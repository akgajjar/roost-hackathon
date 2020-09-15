const db = require("../utils/nedbConfig.js");

var usersDAO = {};

usersDAO.create = (user) => {
  return new Promise((resolve, reject) => {
    db.insert(user, (err, newuser) => {
      if (err) reject(err);
      resolve(newuser);
    });
  });
};

usersDAO.get = (user) => {
  return new Promise((resolve, reject) => {
      db.find({}, (err, users) => {
      if (err) reject(err);
      resolve(users);
    });
  });
};

module.exports = usersDAO;
