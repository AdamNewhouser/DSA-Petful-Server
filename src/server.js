const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, NODE_ENV, CLIENT_ORIGIN } = require('./config');
const catRouter = require('./Cat/cat-router');
const dogRouter = require('./Dog/dog-router');
const userRouter = require('./User/user-router');
const successRouter =require('./Success/success-router');
const adminRouter = require('./Admin/admin-router');
const { queueMain } = require('./QueueGen');


queueMain();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';


const app = express();
app.use(cors());
app.use(morgan(morganOption));

app.use('/api/dogs', dogRouter);
app.use('/api/cats', catRouter);
app.use('/api/users', userRouter);
app.use('/api/successes', successRouter);
app.use('/api/admin', adminRouter);




app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});





app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});