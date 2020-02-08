const express = require('express');
const adminRouter = express.Router();
const adminService = require('./admin-service');

adminRouter
  .route('/')
  .delete((req, res, next) => {
    adminService.resetData();
    res.status(204).end();
  });

module.exports = adminRouter;