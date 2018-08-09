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

exports.findById = function ( id, callback ) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    var stu = students.find(function ( item ) {
      return item.id === parseInt(id);
    })
    callback(null, stu);
  })
}

exports.new = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    student.id = students[students.length -1].id + 1;

    students.push(student);

    var fileDate = JSON.stringify({ students: students });
    fs.writeFile(dbPath, fileDate, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    })
  })
}

exports.edit = function ( student, callback ) {

  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    student.id = parseInt(student.id);

    var stu = students.find(function ( item ) {
      return item.id  === student.id;
    })

    for(var key in student) {
      stu[key] = student[key];
    }

    var fileDate = JSON.stringify({
      students: students
    })

    fs.writeFile(dbPath, fileDate, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    })
  })
}

exports.deleteById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    var deleteIndex = students.findIndex(function ( item ) {
      return item.id  === parseInt(id);
    })

    students.splice(deleteIndex, 1);

    var fileDate = JSON.stringify({
      students: students
    })

    fs.writeFile(dbPath, fileDate, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    })

  })
}
