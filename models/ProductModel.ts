import * as mongoose from 'mongoose';
import config from '../config/dataBase';

//  === Configure the Schema    === \\
const Schema = mongoose.Schema;
//  ===  Configure the Schema for Product    === \\
const ProductSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    MPN: {
        type: String,
        required: false
    },
    ProductTypeName: {
        type: String,
        required: true
    },
    ProductGroup: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: false
    },
    ListPrice: {
        type: Number,
        required: true
    },
    ItemDimensions: {
        type: Number,
        required: true
    },
    Binding: {
        type: String,
        required: false
    },
    UPC: {
        type: String,
        required: false
    },
    Model: {
        type: Number,
        required: false
    },
    Manufacturer: {
        type: String,
        required: false
    },
    Brand: {
        type: String,
        required: false
    },
    EAN: {
        type: String,
        required: false
    },
    Feature: {
        type: String,
        required: false
    },
    TradeInValue: {
        type: Number,
        required: false
    }
},
    {
        versionKey: false
    });
//  ===  Export  the Schema for Product with the db.nameCollection    === \\
export default mongoose.model('products', ProductSchema);