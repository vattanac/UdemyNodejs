const express = require('express');
const router = express.Router();
const path = require('path');
const rootDirectory = require('../util/path.js');
const products = [];

// /admin/add-product => Get
router.get('/add-product',(req, res, next) => {
    //console.log("In another middleware!"); 
    res.sendfile(path.join(rootDirectory, 'views', 'add-product.html'));
});

// /admin/add-product => Post
router.post('/add-product', (req, res, next) => {
    //console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

//module.exports = router;
exports.routes = router;
exports.products = products;