Summary: Build a Node.js based web application for tracking Contacts. A Contact is a person or business with the following properties:

id - some kind of unique identifier
name - string
phone - array of phone numbers
email - array of email addresses
notes - long string
deleted - boolean
Detailed Requirements:

We'd like the data to be persisted in a Mongo DB using "event sourcing" as described in this presentation: http://slides.com/stefankutko/nodejs-microservices-event-sourcing-cqrs

The backend service should be a JSON-based webservice with the following methods:

GET /contacts - returns an array of all contact records, ordered by name, excluding deleted ones
POST /contacts - creates a new contact used POSTed form data and returns it. Data should be sent as individual parameters (not one param which is JSON) as if they were submitted via a normal HTML form
GET /contacts/:id - returns the contact with the correct id
PUT /contacts/:id - takes in parameters similar as the POST and updates the selected contract and then returns it
DELETE /contacts/:id - marks the contact as deleted and returns some kind of "ok" message to the client
The UI should be the barest you can manage while still demonstrating the system works. Simple pages using bootstrap 3 for styles. Plain HTML files that use AJAX to load their data would probably be best.

A table that shows all the existing ones with links to the detail page. Below the table is a form to create a new one.
A detail page which has a form that lets you edit
