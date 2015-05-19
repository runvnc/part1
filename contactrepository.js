var sourcedRepoMongo = require('sourced-repo-mongo');
var MongoRepository = sourcedRepoMongo.Repository;
var Contact = require('./contact');

class ContactRepository extends MongoRepository {
  constructor() {
    super(Contact);
  }
}
