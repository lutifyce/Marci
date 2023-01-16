var express = require('express')
var router = express.Router()
var Marci = require("../models/marci").Marci


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
module.exports = router;