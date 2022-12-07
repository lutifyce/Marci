var express = require('express');
var router = express.Router();
var marci = require("../models/marci").marci

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маpшрутов, начинающихся с marci');
});

/* Страница Marci */
router.get('/:nick', function (req, res, next) {
  console.log('в роутере')
  console.log(req.params.nick)
    marci.findOne({ nick: req.params.nick }, function (err, marci) {
        if (err) return next(err)
        if (!marci) return next(new Error("Нет такой адаптации "))
        res.render('Marci', {
            title: marci.title,
            picture: marci.avatar,
            desc: marci.desc
        })
    })
})
module.exports = router;