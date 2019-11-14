const path = require('path');
const express = require('express');
const router = express.Router();
const rootDirectory = require('../util/path.js');
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    console.log(adminData.products);
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html')); // __dirname : whole absolute path
});

module.exports = router;