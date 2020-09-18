//contains  all teacher related routes
const express = require("express");
const router = express.Router();
const usersDAO = require("../DAO/usersDAO.js");
const utils = require("../utils/usersUtils.js");
const apiRoutes = require("../epconfig.js").apiRoutes;
const responseMessages = require("../epconfig.js").responseMessages;
const dummyUser = require("../epconfig.js").healthCheckDummyUser;

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.post(apiRoutes.createUser, (req, res) => {
  const user = {
    USER_NAME: req.query.USER_NAME,
    USER_ADDRESS: req.query.USER_ADDRESS,
    USER_EMAIL_ID: req.query.USER_EMAIL_ID,
    USER_MOBILE: req.query.USER_MOBILE,
    USER_SALARY: Number(req.query.USER_SALARY),
  };

  usersDAO
    .create(user)
    .then((insertedUser) => {
      console.log(responseMessages.createUserSuccessMessage);
      res.send({
        data: insertedUser,
        Message: responseMessages.createUserSuccessMessage,
      });
      res.end();
    })
    .catch((err) => {
      console.log(
        utils.concate(responseMessages.createUserFailureMessage, err)
      );
      res.send(responseMessages.createUserFailureMessage);
    });
});

router.get(apiRoutes.getUsers, (req, res) => {
  usersDAO
    .get()
    .then((users) => {
      console.log(responseMessages.getUsersSuccessMessage);
      res.send({
        data: users,
        Message: responseMessages.getUsersSuccessMessage,
      });
      res.end();
    })
    .catch((err) => {
      console.log(utils.concate(responseMessages.getUsersFailureMessage, err));
      res.send(responseMessages.getUsersFailureMessage);
    });
});

router.get(apiRoutes.getUserById, (req, res) => {
  usersDAO
    .getById(req.params._Id)
    .then((user) => {
      console.log(responseMessages.getUserByIdSuccessMessage);
      res.send({
        data: user,
        Message: responseMessages.getUserByIdSuccessMessage,
      });
      res.end();
    })
    .catch((err) => {
      console.log(
        utils.concate(responseMessages.getUserByIdFailureMessage, err)
      );
      res.send(responseMessages.getUserByIdFailureMessage);
    });
});

router.put(apiRoutes.updateUser, (req, res) => {
  const user = {
    USER_NAME: req.query.USER_NAME,
    USER_ADDRESS: req.query.USER_ADDRESS,
    USER_EMAIL_ID: req.query.USER_EMAIL_ID,
    USER_MOBILE: req.query.USER_MOBILE,
    USER_SALARY: Number(req.query.USER_SALARY),
  };

  usersDAO
    .update(req.params._Id, user)
    .then((updatedUser) => {
      console.log(responseMessages.updateUserSuccessMessage);
      res.send({
        data: updatedUser,
        Message: responseMessages.updateUserSuccessMessage,
      });
      res.end();
    })
    .catch((err) => {
      console.log(
        utils.concate(responseMessages.updateUserFailureMessage, err)
      );
      res.send(responseMessages.updateUserFailureMessage);
    });
});

router.delete(apiRoutes.deleteUser, (req, res) => {
  usersDAO
    .remove(req.params._Id)
    .then((response) => {
      console.log(responseMessages.deleteUserSuccessMessage);
      res.send({
        data: response,
        Message: responseMessages.deleteUserSuccessMessage,
      });
      res.end();
    })
    .catch((err) => {
      console.log(
        utils.concate(responseMessages.deleteUserFailureMessage, err)
      );
      res.send(responseMessages.deleteUserFailureMessage);
    });
});

router.get(apiRoutes.checkStatus, async (req, res) => {
  try {
    insertedUser = usersDAO.create(dummyUser);

    const _id = insertedUser._id;
    delete insertedUser._id;

    users = usersDAO.get();

    selecteduser = usersDAO.getById(insertedUser._id);

    updatedUser = usersDAO.update(_id, insertedUser);

    response = usersDAO.remove(_id);

    res.send({
      healty: true,
      message: responseMessages.checkStatusSuccessMessage,
    });
  } catch (err) {
    console.log(utils.concate(responseMessages.checkStatusFailureMessage, err));
    res.send({
      healty: false,
      message: responseMessages.checkStatusFailureMessage,
    });
  }
});
module.exports = router;
