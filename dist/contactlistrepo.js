'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var sourcedRepoMongo = require('sourced-repo-mongo');

var MongoRepository = sourcedRepoMongo.Repository;

var ContactList = require('./contactlist');

var ContactListRepository = (function (_MongoRepository) {
  function ContactListRepository() {
    _classCallCheck(this, ContactListRepository);

    _get(Object.getPrototypeOf(ContactListRepository.prototype), 'constructor', this).call(this, ContactList);
    this.cache = {};
  }

  _inherits(ContactListRepository, _MongoRepository);

  _createClass(ContactListRepository, [{
    key: 'get',
    value: function get(id) {
      var contactList;
      return _regeneratorRuntime.async(function get$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            console.log('x');
            contactList = this.cache[id];

            if (contactList) {
              context$2$0.next = 11;
              break;
            }

            console.log('a');
            context$2$0.next = 6;
            return new _Promise(function (res) {
              _get(Object.getPrototypeOf(ContactListRepository.prototype), 'get', _this).call(_this, id, function (r) {
                res(r);
              });
            });

          case 6:
            this.cache[id] = context$2$0.sent;

            //try {
            //  this.cache[id] = await pr(super.get)(id);
            //} catch (e) {
            // console.error('getAsync failed');
            //  console.log(e.trace);
            //  console.error(e);
            //}
            console.log('b');
            return context$2$0.abrupt('return', this.cache[id]);

          case 11:
            return context$2$0.abrupt('return', contactList);

          case 12:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }]);

  return ContactListRepository;
})(MongoRepository);

module.exports = ContactListRepository;