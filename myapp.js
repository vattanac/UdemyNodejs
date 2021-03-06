const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

//MARK: Page Not Found
app.use((req, res, next) => {
    //res.status(404).send('<h1>Page Not Found</h1>');
    res.status(404).sendfile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);


