// 引包
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');

var app = express();

// 开发静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 配置模板引擎
app.engine('.html', require('express-art-template'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(router);

app.listen(3000, function () {
  console.log('Server is Running ...');
})