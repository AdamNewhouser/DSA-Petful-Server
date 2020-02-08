const express = require('express');
const { queues } = require('../QueueGen');
const catService = require('./cat-service');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(queues.catQueue.first);
  })
  .delete((req, res, next) => {
    catService.deleteCat();
    res.status(204).end();
  });

module.exports = catRouter;