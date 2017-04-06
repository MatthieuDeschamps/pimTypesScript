"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    _id: String,
    MPN: String,
    ProductTypeName: String,
    ProductGroup: String,
    Title: String,
    ItemDimensions: Number,
    Binding: String,
    UPC: String,
    Model: Number,
    Manufacturer: String,
    Brand: String,
    EAN: String,
    Feature: String
});
exports.default = mongoose.model('products', ProductSchema);
