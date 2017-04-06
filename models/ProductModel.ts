import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ProductSchema = new Schema({

    _id: String ,
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


export default mongoose.model('products', ProductSchema);