const express = require('express');
const orders = require('../routes/orders');
const volunteers = require('../routes/volunteers');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/orders', orders);
  app.use('/api/volunteers', volunteers);
}