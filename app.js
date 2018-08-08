// 引包
var express = require('express');

var app = express();

// 开发静态资源
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))

// 配置模板引擎
app.engine('.html', require('express-art-template'));

app.get('/', function (req, res) {
  res.render('index.html')
})

app.listen(3000, function () {
  console.log('Server is Running ...');
})