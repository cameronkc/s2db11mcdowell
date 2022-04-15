var express = require('express');
const table_controlers= require('../controllers/table'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('table:id', { title: 'Search Results Table Class' });
});

module.exports = router;

router.get('/', table_controlers.table_view_all_Page ); 
module.exports = router; 