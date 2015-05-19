'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Entity = require('sourced').Entity;

var Entityx = function Entityx(s) {
  _classCallCheck(this, Entityx);

  console.log(s);
};

var Contact = (function (_Entityx) {
  function Contact() {
    _classCallCheck(this, Contact);

    if (_Entityx != null) {
      _Entityx.apply(this, arguments);
    }
  }

  _inherits(Contact, _Entityx);

  _createClass(Contact, [{
    key: 'initialize',

    //constructor() {
    //  super();
    //}

    value: function initialize(id, cb) {
      if (cb) cb();
    }
  }]);

  return Contact;
})(Entityx);

var c = new Contact('hello');

module.exports = Contact;