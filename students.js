var fs = require('fs');

var dbPath = './db.json';

exports.find = function ( callback ) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  })
}

exports.findById = function () {

}

exports.new = function () {

}

exports.edit = function () {

}

exports.delete = function () {

}
