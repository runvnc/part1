'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var Entity = require('sourced').Entity;
var Contact = require('./contact');

var ContactList = (function (_Entity) {
  function ContactList() {
    _classCallCheck(this, ContactList);

    console.log('n');
    _get(Object.getPrototypeOf(ContactList.prototype), 'constructor', this).call(this);
    console.log('m');
    this.id = null;
    this.contacts = [];
  }

  _inherits(ContactList, _Entity);

  _createClass(ContactList, [{
    key: 'init',
    value: function init(id, cb) {
      this.id = id;
      if (cb) cb();
    }
  }, {
    key: 'createContact',
    value: function createContact(c) {
      return _regeneratorRuntime.async(function createContact$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            this.digest('createContact', c);
            this.contacts.push(new Contact(c));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }]);

  return ContactList;
})(Entity);

module.exports = ContactList;