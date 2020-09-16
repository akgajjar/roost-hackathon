//contains  all teacher related routes
const express = require("express");
const router = express.Router();
const usersDAO = require("../DAO/usersDAO.js");

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/api/users", (req, res) => {
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
      console.log("User Inserted Successfully!!!!");
      res.send({
        data: insertedUser,
        Message: "User Inserted Successfully!!!!!",
      });
      res.end();
    })
    .catch((err) => {
      console.log("Error while inserting user!!!!");
      res.send("Error while inserting User!!");
    });
});

router.get("/api/users", (req, res) => {
  usersDAO
    .get()
    .then((users) => {
      console.log("Users found Successfully!!!!");
      res.send({
        data: users,
        Message: "Users found Successfully!!!!!",
      });
      res.end();
    })
    .catch((err) => {
      console.log("Error while selecting users!!!!");
      res.send("Error while selecting Users!!");
    });
});

router.get("/api/users/:_Id", (req, res) => {
  usersDAO
    .getById(req.params._Id)
    .then((user) => {
      console.log("User found Successfully!!!!");
      res.send({
        data: user,
        Message: "User found Successfully!!!!!",
      });
      res.end();
    })
    .catch((err) => {
      console.log("Error while selecting user!!!!");
      res.send("Error while selecting User!!");
    });
});

router.put("/api/users/:_Id", (req, res) => {
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
      console.log("User Updated Successfully!!!!");
      res.send({
        data: updatedUser,
        Message: "User Updated Successfully!!!!!",
      });
      res.end();
    })
    .catch((err) => {
      console.log("Error while Updating user!!!!");
      res.send("Error while Updating User!!");
    });
});

router.delete("/api/users/:_Id", (req, res) => {
  usersDAO
    .remove(req.params._Id)
    .then((response) => {
      console.log("User Deleted Successfully!!!!");
      res.send({
        data: response,
        Message: "User Deleted Successfully!!!!!",
      });
      res.end();
    })
    .catch((err) => {
      console.log("Error while Deleting user!!!!" + err);
      res.send("Error while Deleting User!!");
    });
});

router.get("/api/status", async (req, res) => {
  try {
    const user = {
      USER_NAME: "healthCheck",
      USER_ADDRESS: "healthCheck",
      USER_EMAIL_ID: "healthCheck",
      USER_MOBILE: "healthCheck",
      USER_SALARY: 0,
    };

    insertedUser = usersDAO.create(user);

    const _id = insertedUser._id;
    delete insertedUser._id;

    users = usersDAO.get();

    selecteduser = usersDAO.getById(insertedUser._id);

    updatedUser = usersDAO.update(_id, insertedUser);

    response = usersDAO.remove(_id);

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
