const path = require('path');
const express = require('express');
const router = express.Router();
const rootDirectory = require('../util/path.js');

router.get('/',(req, res, next) => {
    //console.log("In another middleware!"); 
    //res.send('<h1>Hello from Express!</h1>'); 
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html')); // __dirname : whole absolute path
});

module.exports = router;