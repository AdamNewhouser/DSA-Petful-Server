const express = require('express');
const { queues } = require('../QueueGen');
const dogRouter = express.Router();
const dogService = require('./dog-service');

dogRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(queues.dogQueue.first);
  })
  .delete((req,res,next) => {
    dogService.deleteDog();
    res.status(204).end();
  });

module.exports = dogRouter;