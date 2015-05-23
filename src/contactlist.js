var Entity = require('sourced').Entity;
var Contact = require('./contact');

class ContactList extends Entity {
  constructor() {
    console.log('n');
    super();
    console.log('m');
    this.id = null;
    this.contacts = [];
  }

  initialize(id, cb) {
    this.id = id;
    if (cb) cb(); 
  }

  async createContact(c) {
    this.digest('createContact', c);
    this.contacts.push(new Contact(c));
  }
}

module.exports = ContactList;
