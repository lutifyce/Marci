var express = require('express')
var router = express.Router()
var checkAuth = require("./../middleware/checkAuth.js")
var Marci = require("../models/marci").Marci
var User = require("./../models/user").User

/* GET home page. */
router.get('/', function(req, res, next) {
    Marci.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = "Hi!!!",
      res.cookie('greeting','Hi!!!').render('index', {
                              title: 'Express',
                              counter: req.session.counter
                          });
    })

});
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error:null});
});

router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});


router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username:username},function(err,user){
      if(err) return next(err)
      if(user){
          if(user.checkPassword(password)){
              req.session.user = user._id
              res.redirect('/')
          } else {
                  res.render('logreg', {title: 'Вход', error:"Пароль не верный"})
          }
      } else {
          var user = new User({username:username,password:password})
          user.save(function(err,user){
              if(err) return next(err)
              req.session.user = user._id
              res.redirect('/')
          })        
    }
  })
});
module.exports = router;