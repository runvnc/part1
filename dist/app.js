'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _this = this;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ContactList = require('./contactlist');

var MAIN_CONTACTS = 'main01';

app.use(express['static']('' + __dirname + '/public'));
app.use(express['static']('' + __dirname + '/public/bower_components'));

app.use(bodyParser.urlencoded({ extended: false }));

var contactsRepo = null; // see below

function initContacts() {
  var contactList, test;
  return _regeneratorRuntime.async(function initContacts$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        contactList = new ContactList();

        contactList.init({ id: MAIN_CONTACTS });
        console.log('t');
        test = {
          name: 'Test', phones: [], emails: [],
          notes: ''
        };

        contactList.createContact(test);
        console.log(3);
        context$1$0.next = 8;
        return contactsRepo.commit();

      case 8:
        return context$1$0.abrupt('return', contactList);

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

app.post('/contacts', function callee$0$0(req, res) {
  var data, contactList;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        data = req.body;

        console.log(data);

        data.emails = data.emails.split('\n');
        data.phones = data.phones.split('\n');
        console.log(1);
        context$1$0.prev = 5;
        context$1$0.next = 8;
        return contactsRepo.get(MAIN_CONTACTS);

      case 8:
        contactList = context$1$0.sent;

        if (contactList) {
          context$1$0.next = 14;
          break;
        }

        context$1$0.next = 12;
        return initContacts();

      case 12:
        contactList = context$1$0.sent;

        console.log(4);

      case 14:

        console.log(2);
        contactList.createContact(data);
        console.log(5);
        contactsRepo.commit();
        console.log(6);
        context$1$0.next = 24;
        break;

      case 21:
        context$1$0.prev = 21;
        context$1$0.t0 = context$1$0['catch'](5);

        console.error(context$1$0.t0);

      case 24:
        res.json({ ok: true });

      case 25:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this, [[5, 21]]);
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

require('./mongo')().then(function () {
  var ContactsRepo = require('./contactlistrepo');
  contactsRepo = new ContactsRepo();

  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
});

/*await new Promise( res => { 
  contactsRepo.commit(contactList);
  res(contactList);
}); */