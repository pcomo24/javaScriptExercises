var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});


var name = "Big Belly Burger";
var query = `INSERT INTO restaurant \
  VALUES (default, '${name}')"`;
db.result(query)
  .then(function (result) {
    console.log(result);
  });
//What If:
//var name = "Big Belly Burger'; DROP TABLE restaurant; --";
