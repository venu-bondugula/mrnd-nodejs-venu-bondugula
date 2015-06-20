var express = require('express');
var router = express.Router();
var fs = require('fs');
var id = 0;
//var messages = new Array();

/* GET contacts */
var getContactFileName = function(id) {

  // We assume contacts are stored under data sub-folder
  //return "C:\\Users\\venu bondugula\\WebstormProjects\\NodeJS1\\spec\\tests\\data\\" + id + "-Contact.json";
  return "..\\..\\data\\" + id + "-Contact.json";
}

var getMessageFileName = function(id) {

  // We assume contacts are stored under data sub-folder
  //return "C:\\Users\\venu bondugula\\WebstormProjects\\NodeJS1\\spec\\tests\\data\\" + id + "-Message.json";
  return "..\\..\\data\\" + id + "-Message.json";
}


router.get('/:id', function(req, res, next) {

  var fileName = getContactFileName(req.params.id);
  fs.open(fileName, "r" ,function(err, fd){
    if (err) //throw err;
      console.log("Error in get()");

    console.log("File opened successfully");

    fs.readFile(fileName, function (err, data) {
      if (err) //throw err;
        console.log("Error in read()");
      console.log(data);

      res.send(JSON.parse(data));
    });
  });

});

router.post('/', function(req, res, next) {
  //console.log(req.body);
  ++id;
  var fileName = getContactFileName(id);
  console.log(fileName);
  fs.open(fileName, "w" ,function(err, fd){
    if (err)//throw err;
      console.log("Error in post()");

    console.log("File opened successfully");

    fs.write(fd,JSON.stringify( req.body), function (err) {
      if (err) //throw err;
        console.log("Error in write()");
      console.log('It\'s saved!');
      res.send(id+"");
    });
  });

});

router.put('/:id', function(req, res, next) {
  //console.log(req.body);
  var fileName = getContactFileName(req.params.id);

  var obj = JSON.parse(fs.readFileSync(fileName));

  for(var i in req.body)
  {
    obj[i] = req.body[i];
  }

  console.log(JSON.stringify( obj ));
  fs.open(fileName, "w" ,function(err, fd){
    if (err)//throw err;
      console.log("Error in post()");

    console.log("File opened successfully");

    fs.write(fd,JSON.stringify( obj ), function (err) {
      if (err) //throw err;
        console.log("Error in write()");
      console.log('It\'s saved!');
      res.send(obj);
    });
  });

});

router.post('/:id/messages', function(req, res, next) {
  //console.log(req.body);
  var fileName = getMessageFileName(req.params.id);
  console.log(fileName);
  fs.open(fileName, "a" ,function(err, fd){
    if (err)//throw err;
      console.log("Error in post()");

    console.log("File opened successfully");

    fs.write(fd,JSON.stringify( req.body), function (err) {
      if (err) //throw err;
        console.log("Error in write()");
      console.log('It\'s saved!');
      res.send(id+"");
    });
  });

});

module.exports = router;