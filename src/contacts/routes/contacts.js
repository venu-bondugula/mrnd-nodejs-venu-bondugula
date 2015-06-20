var express = require('express');
var router = express.Router();
var arr =new Array();
//var messages = new Array();

/* GET contacts */
router.get('/:id', function(req, res, next) {
  res.send(arr[req.params.id]);
});

router.post('/', function(req, res, next) {
  //console.log(req.body);
  arr.push(req.body);
  res.send(arr.length-1+"");
});

router.put('/:id', function(req, res, next) {
  //console.log(req.body);
  for(var i in req.body)
  {
    arr[req.params.id][i] = req.body[i];
  }

  res.send(arr[req.params.id]);
});


module.exports = router;