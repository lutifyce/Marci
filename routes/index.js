var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Марси в аниме */
router.get('/marci_anime', function(req, res, next) {
  res.send("<h1>Марси в аниме</h1>")
  });
/* Страница Марси в доте */
router.get('/marci_dota', function(req, res, next) {
  res.send("<h1>Страница Марси в доте</h1>")
  });
  
/* Страница промо Марси*/
router.get('/marci_promo', function(req, res, next) {
  res.send("<h1>Страница промо Марси</h1>")
  });
  
  

module.exports = router;
