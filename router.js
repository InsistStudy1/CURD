var express = require('express');
var Student = require('./students');

var router = express.Router();

router.get('/students', function (req, res) {
  Student.find(function (err, data) {
    if (err) {
      return res.status(500).send(err);
    }
    res.render('index.html', {
      students: data
    })
  })
})

router.get('/students/new', function (req, res) {
  res.render('new.html')
})

router.post('/students/new', function (req, res) {
  console.log(req.body);
  Student.new(req.body, function (err, data) {
    if (err) {
      return res.status(500).send(err);
    }
    res.redirect('/students');
  })
})

router.get('/students/edit', function (req, res) {

})

router.post('/students/edit', function (req, res) {

})

router.get('/students/delete', function (req, res) {

})

module.exports = router;