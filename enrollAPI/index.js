const express = require("express");
const routes = require("./epConfig.js").apiRoutes;
const env = require("./epConfig.js").env;
const app = express();
const port = process.env.port || env.port;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const enrollRoutes = require("./routes/enrollRoutes.js");
const responseMessages = require("./epConfig.js").responseMessages;
const utils = require("./utils/enrollUtils.js")

app.use(morgan("short")); // we can use combined for detailed logs.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(env.viewsFolder));
app.use(enrollRoutes);

app.get(routes.root, (req, res) => {
  console.log(responseMessages.rootResponse);
});

app.listen(port, () => {
  console.log(utils.concate(responseMessages.serverInitMessage, " " , port , "!!!"));
});
