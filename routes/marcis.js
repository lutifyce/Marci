var express = require('express');
var router = express.Router();
var Marci = require("../models/marci").Marci
var checkAuth = require("./../middleware/checkAuth.js");
// var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с marcis');
});

/* Страница marci */
router.get('/:nick',checkAuth, function(req, res, next) {
    Marci.findOne({nick:req.params.nick}, function(err,marci){
        if(err) return next(err)
        if(!marci) return next(new Error("Нет такой адаптации"))
        res.render('marci', {
            title: marci.title,
            picture: marci.avatar,
            desc: marci.desc
        })
    })
})

  module.exports = router