var express = require('express');
var router = express.Router();
var marci = require("../models/marci").marci
var async = require("async")

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маpшрутов, начинающихся с marci');
});
/*   */
router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
              marci.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
              marci.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var marci = result[0]
          var marcis = result[1] || []
          if(!marci) return next(new Error("Нет такой адаптации"))
          res.render('marci', {
              title: marci.title,
              picture: marci.avatar,
              desc: marci.desc,
              menu: marcis
          });
      })
})

module.exports = router