var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const MAIN_CONTACTS = 'main01';

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/bower_components`));

app.use(bodyParser.urlencoded({extended:false}));

var contactsRepo = null; // see below

app.post('/contacts', async (req, res) => {
  let data = req.body;
  console.log(data);

  data.emails = data.emails.split("\n");
  data.phones = data.phones.split("\n");
  console.log(1)
  try {
    let contactList = await contactsRepo.get(MAIN_CONTACTS);
    console.log(2)
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
