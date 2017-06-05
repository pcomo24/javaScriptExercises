var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});


var db = pgp({database: 'restaurant'});

db.query('SELECT * FROM restaurant')
  .then(function (results) {
    results.forEach(function (row) {
      console.log(row.id, row.name, row.distance, row.category);
    });
    return db.one("SELECT * FROM restaurant WHERE name='Texas BBQ'");
  })
  .then(function (row) {
    console.log(row)

    db.result('INSERT INTO restaurant VALUES (default, "Narf")' )
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    pgp.end();
  });
