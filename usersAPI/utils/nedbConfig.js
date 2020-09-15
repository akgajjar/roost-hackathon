var Datastore = require("nedb");
var db = new Datastore({ filename: "db/users.db" });
db.loadDatabase();
 
module.exports = db;
