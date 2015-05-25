var Entity = require('sourced').Entity;
var Contact = require('./contact');

class ContactList extends Entity {
  constructor() {
    super();
    this.id = null;
    this.contacts = [];
  }

  init(id, cb) {
    this.id = id;
    if (cb) cb(); 
  }

  async createContact(c) {
    this.digest('createContact', c);
    this.contacts.push(new Contact(c));
  }

}

module.exports = ContactList;
