var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ContactList = require('./contactlist');

const MAIN_CONTACTS = 'main01';

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/bower_components`));

app.use(bodyParser.urlencoded({extended:false}));

var contactsRepo = null; // see below

async function initContacts() {
  var contactList = new ContactList();

  contactList.init( { id: MAIN_CONTACTS } );
  let test = {
    name: 'Test', phones: [], emails: [],
    notes: ''
  };
  contactList.createContact(test);
  await contactsRepo.commitAsync(contactList);
  return contactList;  
} 

app.post('/contacts', async (req, res) => {
  let data = req.body;

  data.emails = data.emails.split("\n");
  data.phones = data.phones.split("\n");
  try {
    var contactList = await contactsRepo.get(MAIN_CONTACTS);
    if (!contactList) {
      contactList = await initContacts();
    }

    contactList.createContact(data);
    contactsRepo.commit();
  } catch (e) {
    console.error(e);
  }
  res.json({ok:true});
});

app.get('/contacts/:id', async (req, res) => {
  let contactList = await contactsRepo.get(MAIN_CONTACTS);
  
  res.json(contact);
});

require('./mongo')().then( () => {
  var ContactsRepo = require('./contactlistrepo');
  contactsRepo = new ContactsRepo();

  var server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
});
