var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  console.log('======This is the first route in router');
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = router;
