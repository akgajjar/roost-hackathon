//contains  all teacher related routes
const express = require("express");
const router = express.Router();
const enrollService = require("../Service/enrollService.js");
const routes = require("../epConfig.js").apiRoutes;
const responseMessage = require("../epConfig.js").responseMessages;
const dummyUser = require("../epConfig.js").healthCheckDummyUser;
const utils = require("../utils/enrollUtils.js");

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.post(routes.register, (req, res) => {
  const user = {
    USER_NAME: req.query.USER_NAME,
    USER_ADDRESS: req.query.USER_ADDRESS,
    USER_EMAIL_ID: req.query.USER_EMAIL_ID,
    USER_MOBILE: req.query.USER_MOBILE,
    USER_SALARY: Number(req.query.USER_SALARY),
  };

  enrollService
    .register(user)
    .then((response) => {
      console.log(responseMessage.registerUserSuccessMessage);
      res.send({
        message: responseMessage.registerUserSuccessMessage,
        data: response,
      });
    })
    .catch((err) => {
      console.log(utils.concate(responseMessage.registerUserFailureMessage, " " + err));
      res.send({
        message: responseMessage.registerUserFailureMessage,
        Error: err,
      });
    });
});

router.delete(routes.deRegister, (req, res) => {
  enrollService
    .deRegister(req.params._Id)
    .then((response) => {
      console.log(utils.concate(responseMessage.deRegisterUserSuccessMessage, " ", err));
      res.send({
        message: responseMessage.deRegisterUserSuccessMessage,
        data: response,
      });
    })
    .catch((err) => {
      console.log(responseMessage.deRegisterUserFailureMessage);
      res.send({
        message: responseMessage.deRegisterUserFailureMessage,
        Error: err,
      });
    });
});

router.get(routes.checkStatus, async (req, res) => {
  try {
    resgisteredUser = await enrollService.register(dummyUser);
    response = await enrollService.deRegister(resgisteredUser._id);
    console.log(responseMessage.checkStatusSuccessMessage);
    res.send({
      healty: true,
      message: responseMessage.checkStatusSuccessMessage,
    });
  } catch (err) {
    console.log(utils.concate(responseMessage.checkStatusFailureMessage, err));
    res.send({
      healty: false,
      message: responseMessage.checkStatusFailureMessage,
    });
  }
});

module.exports = router;
