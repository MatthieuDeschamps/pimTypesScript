"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var index_1 = require("./routes/index");
var dataBase_1 = require("./config/dataBase");
var app = express();
/*
var serverMongo = new mongodb.Server('mongodb', 27107);
var db = new mongodb.Db('product', serverMongo, { w: 1 });
db.open(function(){
  console.log(`DataBase connect -> ok`);
});
*/
// init mongoose
/*mongoose.connect(config.db);
console.log(`DataBase connect -> ${config.db}`);
//Model
var test = mongoose.model(config.collection);
console.log(`DataBase connect -> ${config.collection}`);
test.find(null,function(err, data) {
  if(err){
    throw err;
  }
  console.log(data);
});*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// init server
var server;
if (process.env.NODE_ENV !== dataBase_1.default.test_env) {
    server = app.listen(dataBase_1.default.port);
    console.log("Server connect -> " + dataBase_1.default.port);
}
else {
    server = app.listen(dataBase_1.default.test_port);
    console.log("Server connect ->  " + dataBase_1.default.test_port);
}
// router
index_1.default(app);
// export
module.exports = server;
