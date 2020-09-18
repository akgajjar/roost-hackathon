const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const usersRoutes = require('./routes/usersRoutes.js');
const apiRoutes = require("./epconfig.js").apiRoutes;
const responseMessages = require("./epconfig.js").responseMessages;
const utils = require("./utils/usersUtils.js");
const env = require("./epconfig.js").env;

const port = env.port;


app.use(morgan("short")); // we can use combined for detailed logs.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(env.viewsFolder));
app.use(usersRoutes);

app.get(apiRoutes.root, (req, res) => {
  console.log(responseMessages.rootResponse);
});

app.listen(port, () => {
  console.log(utils.concate(responseMessages.serverInitMessage, port));
});
