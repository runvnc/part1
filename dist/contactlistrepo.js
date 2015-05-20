'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

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
      return regeneratorRuntime.async(function get$(context$2$0) {
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