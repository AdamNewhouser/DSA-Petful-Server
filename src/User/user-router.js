const express = require('express');
const { queues } = require('../QueueGen');
const jsonBodyParser = express.json();
const userRouter = express.Router();
const userService = require('./user-service');

userRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(queues.userQueue.first);
  })
  .post(jsonBodyParser, (req,res,next) => {
    const { user } = req.body;
    userService.addUser(user);
    res.status(201).json(queues.userQueue);
  })
  .delete((req, res, next) => {
    userService.deleteBothPets();
    res.status(204).end();
  });



module.exports = userRouter;