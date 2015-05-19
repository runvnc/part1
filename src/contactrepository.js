var sourcedRepoMongo = require('sourced-repo-mongo');
var MongoRepository = sourcedRepoMongo.Repository;
var Contact = require('./contact');

class ContactRepository extends MongoRepository {
  constructor() {
    super(Contact)
    this.cache = {};
  }

  async get(id) {
    var contact = this.cache[id];
    if (!contact) {
      this.cache[id] = await super.get(id);
      return this.cache[id];
    } else {
      return contact;
    }
  }

}

module.exports = ContactRepository;
