import ProductSchema from '../models/ProductModel';
import mongodb = require('mongodb');
import assert = require('assert');
import config from '../config/dataBase';
import * as mongoose from 'mongoose';



/*var serverMongo = new mongodb.Server('mongodb', 27107);
var db = new mongodb.Db('product', serverMongo, { w: 1 });
db.open(function(){
  console.log(`DataBase connect -> ok`);  
});*/
// import User from '../models/User';


mongoose.connect(config.db);
console.log(`DataBase connect -> ${config.db}`);
//Model
/*var test = mongoose.model(config.collection,new ProductSchema);
console.log(`DataBase connect -> ${config.collection}`);*/
/*test.find(null,function(err, data) { 
  if(err){
    throw err;
  }
  console.log(data); 
});*/




/*export interface Product {
    _id: string ,
    MPN?: string,
    ProductTypeName?: string,
    ProductGroup?: string,
    Title?: string,
    ItemDimensions?: number,
    Binding?: string,
    UPC?: string,
    Model?: number,
    Manufacturer?: string,
    Brand?: string,
    EAN?: string,
    Feature?: string
}*/


// get all Product
export function getAllProduct(req, res, next) {
  ProductSchema.find((err, products) => {
    if (err) {
      res.status(500).json({ err });
    }
    res.status(200).json({ products });
  });/*
  mongoose.connection.close();
  console.log(`DataBase connect -> ${config.db} fermée`);*/
}

/*export function getAllProductV2(callback:(users: Product[]) => void) {
    db.collection('products', function(error, users_collection) {
        if(error) 
        {
        console.log("erreur avant produit")
        console.error(error); 
        return;
        }
        users_collection.find({}).toArray(function(error, userobjs){
          if(error) 
          { 
              console.log(users_collection);
              console.log("erreur lors de la recherche")
              console.error(error); 
              return; 
          }
            console.log("recherche ok")
            callback(userobjs);
        });
    });
}*/

export function count(req, res, next) {
    ProductSchema.aggregate(
        [ { $group: { _id: null, count: { $sum: 1 } } } ], function (error, result) {
           res.send(result[0].count.toString());
        });
};

/*export function getProduct(callback){
  
  db.collection('products').find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    assert.equal(2, docs.length);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}*/

/*export function getAllProductV2(callback:any){
    db.collection('products', function(error, products_collection) {
        if(error) { console.error(error); return; }
        products_collection.find({}).toArray(function(error, userobjs) {
           if(error) { console.error(error); return; }
           callback(userobjs);
        });
    });
}*/

/*export function getAllProductV3(req, res, next,db) {
    db.collection('products', function(error, products_collection) {
        if(error) 
        { 
          console.error(error); 
          return; 
        }
        products_collection.find({}).toArray(function(error, userobjs) {
           if(error) 
            { 
             console.error(error); 
             return; 
            }
            res.status(200).json(userobjs);
            db.close();
           
        });
    });
    
}*/