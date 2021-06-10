const express = require('express');
const events = require('../routes/events');
const volunteers = require('../routes/volunteers');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/events', events);
  app.use('/api/volunteers', volunteers);
}