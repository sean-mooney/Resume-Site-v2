var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
var blogpath = path.join(path.resolve(__dirname, '..'), '/blogposts/');

router.get('/', function(req, res, next) {
  res.send("Blog api");
});

router.get('/posts', function (req, res, next) {
  var files = fs.readdirSync(blogpath);
  var results = [];
  files.forEach(fileName => {
    var data = fs.readFileSync(blogpath+fileName);
    if (!data) return;
    data = JSON.parse(data);
    results.push(data);
  })
  res.send(results);
});

module.exports = router;