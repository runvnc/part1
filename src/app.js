var express = require('express');
var app = express();

var contactsRepo = require('./contactsrepository');

app.post('/contacts/:id', async (req, res) => {
  let contact = await contactsRepo.get(req.params.id);
  contactawait
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

