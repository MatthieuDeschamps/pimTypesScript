"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mongoclient = require('mongodb').Mongoclient;
var assert = require('assert');
var Q = require('q');
var DataAcess = (function () {
    function DataAcess() {
    }
    return DataAcess;
}());
DataAcess.productUrl = '';
exports.DataAcess = DataAcess;
