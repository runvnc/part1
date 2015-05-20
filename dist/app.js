'use strict';

var _this = this;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express['static']('' + __dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var contactsRepo = require('./contactlistrepo');

app.post('/contacts/:id', function callee$0$0(req, res) {
  var contactList;
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return contactsRepo.get(req.params.id);

      case 2:
        contactList = context$1$0.sent;

        contactList.createContact(req.body);
        contactsRepo.commit();
        res.json(true);

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
});

app.get('/contacts/:id', function callee$0$0(req, res) {
  var contact;
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return contactsRepo.get(req.params.id);

      case 2:
        contact = context$1$0.sent;

        res.json(contact);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});