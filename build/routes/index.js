"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ProductController_1 = require("../controllers/ProductController");
exports.default = function (app) {
    //  === api routes  ===\\
    var apiRoutes = express.Router();
    //  === append apiRoutes to app === \\  
    app.use('/api/v1', apiRoutes);
    //  === method get  === \\
    apiRoutes.get('/products', ProductController_1.getAllProduct);
    apiRoutes.get('/productsV3', ProductController_1.count);
    /*
    apiRoutes.get('/productsV1', getAllProductV2);
    apiRoutes.get('/productsV2', getProduct);
    
  */
};
