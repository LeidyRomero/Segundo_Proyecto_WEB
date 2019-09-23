var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var financingRouter = require('./routes/financing');
var indexRouter = require('./routes/index');
var reviewRouter = require('./routes/review');
var scholarshipRouter = require('./routes/scholarship');
var usersRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // IF.GARCIA ///This is set up true to be able to get params from url encoded.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/front/build')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/financing', financingRouter);
app.use('/scholarship', scholarshipRouter);
app.use('/reviews', reviewRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
