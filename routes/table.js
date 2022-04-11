var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('table', { title: 'Search Results Table Class' });
});

module.exports = router;

class Table {
  constructor(material, length, width) {
    this.material = material;
    this.length = length;
    this.width = width;
  }
}
