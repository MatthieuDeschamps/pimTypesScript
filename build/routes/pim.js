"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ProductController_1 = require("../controllers/ProductController");
exports.default = function (app) {
    // api routes
    var apiRoutes = express.Router();
    var postRoutes = express.Router();
    /********************************
    === post endpoints
    ********************************/
    // append user routes to api routes
    apiRoutes.use('/v1', postRoutes);
    // get all products
    postRoutes.get('/products', ProductController_1.getAllProductV2);
    /********************************
    === append apiRoutes to app
    ********************************/
    app.use('/api', apiRoutes);
};
