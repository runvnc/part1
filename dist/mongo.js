'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var mongodb = require('mongodb');

var mongo = require('sourced-repo-mongo/mongo');

var done = false;

module.exports = function () {
  console.log('connecting');
  mongo.connect('mongodb://127.0.0.1:27017/contacts');
  console.log('ok');
  return new _Promise(function (res) {
    if (done) return res(mongo.db);
    mongo.once('connected', function () {
      done = true;
      res(mongo.db);
    });
  });
};