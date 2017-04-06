const config = {

  /*var serverMongo = new mongodb.Server('mongodb', 27107);
var db = new mongodb.Db('product', serverMongo, { w: 1 });
db.open(function(){
  console.log(`DataBase connect -> ok`);  
});*/

  // mongodb location
  db: 'mongodb://localhost:27017/product',
  collection: 'products',

  // port
  port: process.env.PORT || 3005,

  // test environment
  test_env: 'test',
  test_db: 'blog-api-test',
  test_port: 3001,

  // secret for jwt
  secret: 'secret'
};

export default config;