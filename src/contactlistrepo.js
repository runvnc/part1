var sourcedRepoMongo = require('sourced-repo-mongo');
var MongoRepository = sourcedRepoMongo.Repository;

var ContactList = require('./contactlist');

class ContactListRepository extends MongoRepository {
  constructor() {
    super(ContactList)
    this.cache = {}
  }

  async get(id) {
    var contactList = this.cache[id];
    if (!contactList) {
      this.cache[id] = await new Promise( (res) => {
        super.get(id, r => { res(r); });
      });
      return this.cache[id];
    } else {
      return contactList;
    }
  }

  async commitAsync(data) {
    return new Promise( (res) => {
      super.commit(data);
      res();
    }); 
  }
}


module.exports = ContactListRepository;
