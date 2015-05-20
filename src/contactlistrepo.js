var sourcedRepoMongo = require('sourced-repo-mongo');
var MongoRepository = sourcedRepoMongo.Repository;
var Promise = require('bluebird');

Promise.promisifyAll(MongoRepository);

var ContactList = require('./contactlist');

class ContactListRepository extends MongoRepository {
  constructor() {
    super(ContactList)
    this.cache = {};
  }

  async get(id) {
    var contactList = this.cache[id];
    if (!contactList) {
      this.cache[id] = await super.getAsync(id);
      return this.cache[id];
    } else {
      return contactList;
    }
  }
}

module.exports = ContactListRepository;
