import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as Promise from "bluebird";
import * as helmet from 'helmet';
import * as logger from 'morgan';
import * as cors from 'cors';



import router from './routes/index';
import config from './config/dataBase';
//import mongodb = require('mongodb');


const app = express();



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





// ===  Protect from commons attacks (cross-site scripting, script injection, clickjacking...) === \\
app.use(helmet());
// ===  Enable CORS Support ==\\
app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// router
router(app);
// ===  init server === \\
let server;
if (process.env.NODE_ENV !== config.test_env) {
  //  === Use the listener in the configuration file "../config/database" === \\
  server = app.listen(config.port);
  console.log(`Server connect -> ${config.port}`);
} else {
  server = app.listen(config.test_port);
  console.log(`Server connect ->  ${config.test_port}`);
}
// export
module.exports = server;