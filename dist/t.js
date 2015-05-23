'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var __ = require('bluebird').promisifyAll;

function test() {
  var db;
  return _regeneratorRuntime.async(function test$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        console.log('connecting to mongo..');

        context$1$0.prev = 1;
        context$1$0.next = 4;
        return require('./mongo')();

      case 4:
        db = context$1$0.sent;

        console.log('db returned');
        context$1$0.next = 8;
        return __(db.collection('test')).insertAsync({ x: 1 });

      case 8:
        console.log('inserted');

        console.log('ok');

        context$1$0.next = 12;
        return require('./mongo')();

      case 12:
        console.log('ok');
        context$1$0.next = 18;
        break;

      case 15:
        context$1$0.prev = 15;
        context$1$0.t0 = context$1$0['catch'](1);

        console.error(context$1$0.t0);

      case 18:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[1, 15]]);
}

test().then(function () {
  console.log('tada');
});

setTimeout(function () {
  console.log('tada');
}, 2000);