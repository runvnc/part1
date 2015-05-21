'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _this = this;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MAIN_CONTACTS = 'main01';

app.use(express['static']('' + __dirname + '/public'));
app.use(express['static']('' + __dirname + '/public/bower_components'));

app.use(bodyParser.urlencoded({ extended: false }));

var contactsRepo = require('./contactlistrepo');

app.post('/contacts', function callee$0$0(req, res) {
  var data, contactList;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        data = req.body;

        data.emails = data.emails.split('\n');
        data.phones = data.phones.split('\n');
        context$1$0.next = 5;
        return contactsRepo.get(MAIN_CONTACTS);

      case 5:
        contactList = context$1$0.sent;

        contactList.createContact(data);
        contactsRepo.commit();
        res.json(true);

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
});

app.get('/contacts/:id', function callee$0$0(req, res) {
  var contactList;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return contactsRepo.get(MAIN_CONTACTS);

      case 2:
        contactList = context$1$0.sent;

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