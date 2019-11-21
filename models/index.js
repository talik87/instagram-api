const MongoClient = require("mongodb").MongoClient;

function connect() {
    // connect to the db(database) server:
  return MongoClient.connect("mongodb://heroku_mjrklbvl:6an38k795kgunjropt3673dhm@ds033579.mlab.com:33579/heroku_mjrklbvl", {useUnifiedTopology: true})
    // connect to specific db inside server:
    .then(mongo => mongo.db("heroku_mjrklbvl"))
    // close the app in case something is not working:
    .catch(() => process.exit(1));
}

module.exports = connect;