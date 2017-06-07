var promise = require('bluebird');
var prompt = require('prompt-promise');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'music'});

var albumStuff = [];
prompt('Album Name: ')
  .then(function name(alName) {
    albumStuff = {name: alName};
    console.log(alName);
    console.log(albumStuff);

    var query = 'INSERT INTO album VALUES (default, ${name})';
    return db.result(query, albumStuff);

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


//console.log(query);


//  db.query('SELECT * FROM album')
//  .then(function (results) {
  //    results.forEach(function (row) {
    //    console.log(row.id, row.name, row.year);
      //});
  //  })
