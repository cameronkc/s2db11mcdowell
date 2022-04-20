var express = require('express');
const table_controllers= require('../controllers/table'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('table:id', { title: 'Search Results Table Class' });
});

/* GET detail table page */ 
router.get('/detail', table_controllers.table_view_one_Page); 

/* GET create table page */ 
router.get('/create', table_controllers.table_create_Page); 

/* GET create update page */ 
router.get('/update', table_controllers.table_update_Page); 
 
/* GET delete table page */ 
router.get('/delete', table_controllers.table_delete_Page); 

module.exports = router;

router.get('/', table_controllers.table_view_all_Page ); 
module.exports = router; 