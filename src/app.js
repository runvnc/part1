var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

var contactsRepo = require('./contactsrepository');

app.post('/contacts/:id', async (req, res) => {
  let contactList = await contactsRepo.get(req.params.id);
  contactList.createContact(req.body);
  contactsRepo.commit();
  res.json(true);
});

app.get('/contacts/:id', async (req, res) => {
  let contact = await contactsRepo.get(req.params.id);
  res.json(contact);
});

var server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

