var mongodb = require('mongodb');

var mongo = require('sourced-repo-mongo/mongo');

var done = false;

module.exports = () => {
  console.log('connecting');
  mongo.connect('mongodb://127.0.0.1:27017/contacts');
  console.log('ok');
  return new Promise( (res) => {
    if (done) return res(mongo.db);
    mongo.once('connected', () => {
      done = true;
      res(mongo.db)
    });
  });
}
