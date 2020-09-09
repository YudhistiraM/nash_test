var express = require('express');
var router = express.Router();

const readFile = () => {
  const fs = require('fs');
  var rawdata = fs.readFileSync('data.json', 'utf8');
  return JSON.parse(rawdata);
}

const writeFile = (content) => {
  const fs = require('fs');
  fs.writeFileSync("./data.json", JSON.stringify(content, null, 3), 'utf8');
}

router.get('/', function (req, res, next) {
  try {
    let data = readFile();
    res.json(data);
  } catch (err) {
    res.json({
      error: true,
      message: `something went wrong : ${err.message}`
    })
  }
});

router.post('/', function (req, res, next) {
  try {
    var input = readFile();
    var value = {
      id: req.body.id,
      title: req.body.title,
      location: req.body.location,
      date: req.body.date,
      participants: req.body.participants.split(','),
      note: req.body.note,
      img: null
    }
    input.push(value);
    writeFile(input);
    res.json({
      success: true,
      message: `Data has been added succesfully`,
      data: value
    })
  } catch (err) {
    res.json({
      error: true,
      message: `something went wrong : ${err.message}`
    })
  }
});

module.exports = router;
