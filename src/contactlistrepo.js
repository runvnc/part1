var sourcedRepoMongo = require('sourced-repo-mongo');
var MongoRepository = sourcedRepoMongo.Repository;

var ContactList = require('./contactlist');

class ContactListRepository extends MongoRepository {
  constructor() {
    super(ContactList)
    this.cache = {}
  }

  async get(id) {
    console.log('x');
    var contactList = this.cache[id];
    if (!contactList) {
      console.log('a');
      this.cache[id] = await new Promise( (res) => {
        super.get(id, r => { res(r); });
      });
      console.log('b');
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
