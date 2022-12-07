var express = require('express')
var router = express.Router()
var marci = require("../models/marci").marci


/* GET home page. */
router.get('/', function(req, res, next) {
  marci.find({},{_id:0,title:1,nick:1},function(err,menu){
  req.session.greeting = "Hi!!!",
  res.cookie('greeting', 'Hi!!!').render('index', {
  title: 'Express',
  menu: menu,
  counter:req.session.counter
      });
  })

});

module.exports = router;