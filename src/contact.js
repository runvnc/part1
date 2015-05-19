var Entity = require('sourced').Entity;

class Entityx {
  constructor(s) {
    console.log(s);
  }
}

class Contact extends Entityx {
  constructor() {
    super();
    this.id = null;
  }

  initialize(id, cb) {
    this.id = id;
    if (cb) cb(); 
  }
}

let c = new Contact('hello');



module.exports = Contact;
