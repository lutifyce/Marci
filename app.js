var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/marci')
var session = require("express-session")
var marcis = require('./routes/marcis');
var Marci = require("./models/marci").Marci

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var MongoStore = require('connect-mongo');(session);
app.use(session({
  secret: "marcis",
  cookie:{maxAge:60*1000},
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: 'mongodb://127.0.0.1:27017/marci'})
}))

app.use(function(req,res,next){
  req.session.counter = req.session.counter +1 || 1
  next()
})

app.use(function(req,res,next){
  res.locals.nav = []
  Marci.find(null,{_id:1,title:1,nick:1},function(err,result){
      if(err) throw err
      res.locals.nav = result
      next()
  })
})

app.use(require("./middleware/createMenu.js"))
app.use(require("./middleware/createUser.js"))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/marcis', marcis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title:'Ошибка'});
});

module.exports = app;