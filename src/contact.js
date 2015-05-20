var Entity = require('sourced').Entity;

class Contact extends Entity {
  constructor() {
    super();
    this.id = null;
  }

  initialize(id, cb) {
    this.id = id;
    if (cb) cb(); 
  }
}

module.exports = Contact;
