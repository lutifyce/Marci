var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Cat = require("../models/cat").Cat
var checkAuth = require("./../middleware/checkAuth.js")




/* GET cats listing. */
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка адаптаций</h1>');
});


/* Страница адаптаций 
*/
router.get("/:nick", function(req, res, next) {
db.query(`SELECT * FROM marcis WHERE marcis.nick = '${req.params.nick}'`, (err, marcis) => {
if(err) {
console.log(err); 
if(err) return next(err)
} else {
if(marcis.length == 0) return next(new Error("Нет такого котенка в мультике"))
var marci = marcis[0];
res.render('marci', {
title:marci.title,
picture:marci.avatar,
desc:marci.about
})
// result(null, results);
}
})
// Cat.findOne({nick:req.params.nick}, function(err, cat){
// if(err) return next(err)
// if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
// res.render('cat', {
// title: cat.title,
// picture: cat.avatar,
// desc: cat.desc,
// });
// })
});


module.exports = router;
