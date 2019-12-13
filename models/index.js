// const MongoClient = require("mongodb").MongoClient;

// function connect() {
//     // connect to the db(database) server:
//   return MongoClient.connect("mongodb://heroku_mjrklbvl:6an38k795kgunjropt3673dhm@ds033579.mlab.com:33579/heroku_mjrklbvl", {useUnifiedTopology: true})
//     // connect to specific db inside server:
//     .then(mongo => mongo.db("heroku_mjrklbvl"))
//     // close the app in case something is not working:
//     .catch(() => process.exit(1));
// }

// module.exports = connect;

//now with mongoose:
const mongoose = require('mongoose');
mongoose
.connect("mongodb://heroku_dd3wjrzb:4ls2fgqf66ho2gngus1q9df3eu@ds349628.mlab.com:49628/heroku_dd3wjrzb", {useNewUrlParser: true, useUnifiedTopology: true})
.catch(()=> process.exit(1))

require('./user');
require('./post');


