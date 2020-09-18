const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const enrollRoutes = require("./routes/enrollRoutes.js");

app.use(morgan("short")); // we can use combined for detailed logs.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./views"));
app.use(enrollRoutes);

app.get("/", (req, res) => {
  console.log("responding to root route");
});

app.listen(port, () => {
  console.log(`Server is up and listening on ${port}!!!!!!`);
});
