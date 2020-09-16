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

usersDAO.getById = (_id) => {
  return new Promise((resolve, reject) => {
    db.find({ _id: _id }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
};

usersDAO.update = (_id, user) => {
  return new Promise((resolve, reject) => {
    db.update(
      { _id: _id },
      user,
      {
        returnUpdatedDocs: true,
        multi: true,
      },
      (err, numAffected, updatedUsers) => {
        if (err) reject(err);
        resolve({
          "Number of Updated User": numAffected,
          "Updated Users": updatedUsers,
        });
      }
    );
  });
};

usersDAO.remove = (_id) => {
  return new Promise((resolve, reject) => {
    db.remove(
      { _id: _id },
      {
        multi: true,
      },
      (err, numAffected) => {
        if (err) reject(err);
        resolve({
          "Number of Deleted User": numAffected,
        });
      }
    );
  });
};

module.exports = usersDAO;
