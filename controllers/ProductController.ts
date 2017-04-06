
import mongodb = require('mongodb');
import assert = require('assert');
//  === need to import module for the connection with database  ===\\
import config from '../config/dataBase';
import * as mongoose from 'mongoose';
//  === need to import Schema to use method  ===\\
import ProductSchema from '../models/ProductModel';


mongoose.connect(config.mongodb.db);
/*var serverMongo = new mongodb.Server('mongodb', 27107);
var db = new mongodb.Db('product', serverMongo, { w: 1 });
db.open(function(){
  console.log(`DataBase connect -> ok`);  
});*/


//  === Function for error handling === \\
function handleError(res, reason:string, message:string, code:number) {
    //logger.warn("ProductController - " + reason + " : " + message);
    res.status(code || 500).json({ "error": reason, "error_description": message });
}
//  === function get all Product    ===    \\
export function getAllProduct(req, res) {
    ProductSchema.find((err, products) => {
        if (err) {
            res.status(500).json({ err });
            return res.send();
        }
        res.status(206).json(products);
    }).limit(config.mongodb.maxDocs);
}
//  ===         function count      ===    \\
export function count(req, res) {
    ProductSchema.aggregate(
        [{ $group: { _id: null, count: { $sum: 1 } } }], function (err, result:number) {
            if(err){
                res.status(400).json({err});
                return res.send();
            }
            res.send(result[0].count.toString());
        });
}
//  ===     function GET by id      ===    \\
export function getProductById(req, res) {
    //  === Init of id with a constant variable   ===\\
    const id = req.params.id;
    ProductSchema.findById(id, (err, product:object) => {
        if (err) {
            return handleError(res, "Server error", err.message, 400);
        }
        //  === Return status '404' if objet is null    ===\\
        if (product === null) {
            return handleError(res,'return null', 'Entity '+id+ ' does not exist',404);
        }
        res.status(200).json(product);
        console.log('Entity ' + id + ' exist');
    });
}
//  ===     function delete Entity   ===    \\
export function deleteProduct(req, res) {
    //  === Init id with a constant variable   ===\\
    const id = req.params.id;
    ProductSchema.findByIdAndRemove(id).exec((err, product) => {
        if (err) {
            res.status(500).json({ err });
            return res.send();
        }
        if (product === null) {
            res.status(404).json('Entity ' + id + ' does not exist');
            return res.send();
        }
        res.status(204).json({ product }, 'Entity '+id+' delete');
    });

}
//  ===     function update Entity   ===    \\
export function updateProduct(req, res, next) {
    //  === Init id with a constant variable   ===\\
    const id = req.params.id;
    ProductSchema.findByIdAndUpdate(id, req.body, (err, product) => {
        if (err) {
            res.status(500).json({ err });
            return res.send();
        }
        if (product === null) {
            res.status(404).json('Entity ' + id + ' does not exist');
            return res.send();
        }
        res.status(200).json({ product });
        console.log('Entity ' + id + ' update sucess');
    });
}
//  ===     function create Entity   ===    \\
export function createProduct(req, res, next) {
    //  === Init req.body with a constant variable   ===\\
    const _id = req.body.id;
    const MPN = req.body.MPN;
    const ProductTypeName = req.body.ProductTypeName;
    const ProductGroup = req.body.ProductGroup;
    const Title = req.body.Title;
    const ListPrice = req.body.ListPrice;
    const ItemDimensions = req.body.ItemDimensions;
    const Binding = req.body.Binding;
    const UPC = req.body.UPC;
    const Model = req.body.Model;
    const Manufacturer = req.body.Manufacturer;
    const Brand = req.body.Brand;
    const EAN = req.body.EAN;
    const Feature = req.body.Feature;
    const TradeInValue = req.body.TradeInValue;
    //  === Init ProductSchema  ===\\
    const product = new ProductSchema({
        _id,
        MPN,
        ProductTypeName,
        ProductGroup,
        Title,
        ListPrice,
        ItemDimensions,
        Binding,
        UPC,
        Model,
        Manufacturer,
        Brand,
        EAN,
        Feature,
        TradeInValue
    });

    product.save((err, product) => {
        if (err) {
            res.status(500).json({ err });
            return res.send();
        }
        res.status(201).json({ product });
        console.log({ product });
    });
}