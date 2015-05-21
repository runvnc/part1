'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var Entity = require('sourced').Entity;

var Contact = (function (_Entity) {
  function Contact() {
    _classCallCheck(this, Contact);

    _get(Object.getPrototypeOf(Contact.prototype), 'constructor', this).call(this);
    this.id = null;
    this.phones = [];
    this.emails = [];
  }

  _inherits(Contact, _Entity);

  _createClass(Contact, [{
    key: 'initialize',
    value: function initialize(id, cb) {
      this.id = id;
      if (cb) cb();
    }
  }]);

  return Contact;
})(Entity);

module.exports = Contact;