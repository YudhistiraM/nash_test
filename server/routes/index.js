var express = require('express');
var router = express.Router();

function getJson(){
  const fs = require('fs');
  let rawdata = fs.readFileSync('./data.json');
  let data = JSON.parse(rawdata);
  return data;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  let data = getJson();
  res.json(data);
});

module.exports = router;
