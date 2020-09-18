//contains  all teacher related routes
const express = require("express");
const router = express.Router();
const enrollService = require("../Service/enrollService.js");

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/api/enroll/register", (req, res) => {
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
      res.send({
        message: "user successfully registered !!!!!",
        data: response,
      });
    })
    .catch((err) => {
      console.log("Error occured while registering user!!!");
      res.send({
        message: "Error occured while registering user!!!",
        Error: err,
      });
    });
});

router.delete("/api/enroll/deRegister/:_Id", (req, res) => {
  enrollService
    .deRegister(req.params._Id)
    .then((response) => {
      res.send({
        message: "user successfully Deregistered !!!!!",
        data: response,
      });
    })
    .catch((err) => {
      console.log("Error occured while Deregistering user!!!");
      res.send({
        message: "Error occured while Deregistering user!!!",
        Error: err,
      });
    });
});

router.get("/api/status", async (req, res) => {
  const user = {
    USER_NAME: "healthCheck",
    USER_ADDRESS: "healthCheck",
    USER_EMAIL_ID: "healthCheck",
    USER_MOBILE: "healthCheck",
    USER_SALARY: 0,
  };
  try {
    resgisteredUser = await enrollService.register(user);
    response = await enrollService.deRegister(resgisteredUser._id);
    res.send({
      healty: true,
      message: "Api is working as expected",
    });
  } catch (err) {
    console.log("Api is not working as expected!!!!" + err);
    res.send({
      healty: false,
      message: "Api is not  working as expected",
    });
  }
});

module.exports = router;
