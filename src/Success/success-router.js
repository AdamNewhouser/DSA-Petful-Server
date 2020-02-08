const express = require('express');
const STORE = require('../Store');
const successRouter = express.Router();

successRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(STORE.success);
  });

module.exports = successRouter;