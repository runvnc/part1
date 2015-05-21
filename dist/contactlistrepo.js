'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var sourcedRepoMongo = require('sourced-repo-mongo');
var MongoRepository = sourcedRepoMongo.Repository;

var Promise = require('bluebird');

Promise.promisifyAll(MongoRepository);

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
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            contactList = this.cache[id];

            if (contactList) {
              context$2$0.next = 8;
              break;
            }

            context$2$0.next = 4;
            return _get(Object.getPrototypeOf(ContactListRepository.prototype), 'getAsync', this).call(this, id);

          case 4:
            this.cache[id] = context$2$0.sent;
            return context$2$0.abrupt('return', this.cache[id]);

          case 8:
            return context$2$0.abrupt('return', contactList);

          case 9:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }]);

  return ContactListRepository;
})(MongoRepository);

module.exports = ContactListRepository;