const express = require('express');
const router = express.Router();
const path = require('path');
const rootDirectory = require('../util/path.js');


router.get('/add-product',(req, res, next) => {
    //console.log("In another middleware!"); 
    res.sendfile(path.join(rootDirectory, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;