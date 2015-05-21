var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const MAIN_CONTACTS = 'main01';

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/bower_components`));

app.use(bodyParser.urlencoded({extended:false}));

var contactsRepo = require('./contactlistrepo');

app.post('/contacts', async (req, res) => {
  let data = req.body;
  data.emails = data.emails.split("\n");
  data.phones = data.phones.split("\n");
  let contactList = await contactsRepo.get(MAIN_CONTACTS);
  contactList.createContact(data);
  contactsRepo.commit();
  res.json(true);
});

app.get('/contacts/:id', async (req, res) => {
  let contactList = await contactsRepo.get(MAIN_CONTACTS);
  
  res.json(contact);
});


var server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

