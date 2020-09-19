module.exports = {
  apiRoutes: {
    register: "/api/enroll/register",
    deRegister: "/api/enroll/deRegister/:_Id",
    checkStatus: "/api/status",
    root: "/",
  },
  env: {
    port: 3002,
    viewsFolder: "./views",
  },
  usersAPIRoutes: {
    create: "/api/users",
    delete: "/api/users",
  },
  responseMessages: {
    rootResponse: "responding to root route",
    serverInitMessage: `Server is up and listening on `,
    registerUserSuccessMessage: "user successfully registered !!!",
    registerUserFailureMessage: "Error occured while registering user!!!",
    deRegisterUserSuccessMessage: "user successfully Deregistered !!!",
    deRegisterUserFailureMessage: "Error occured while Deregistering user!!!",
    checkStatusSuccessMessage: "Api is working as expected!!!",
    checkStatusFailureMessage: "Api is not  working as expected!!!",
  },
  healthCheckDummyUser: {
    USER_NAME: "healthCheck",
    USER_ADDRESS: "healthCheck",
    USER_EMAIL_ID: "healthCheck",
    USER_MOBILE: "healthCheck",
    USER_SALARY: 0,
  },
};
