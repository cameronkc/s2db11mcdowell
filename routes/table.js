var express = require('express');
const table_controllers = require('../controllers/table'); 
var router = express.Router();

const secured = (req, res, next) => { 
  if (req.user) { 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', table_controllers.table_view_all_Page) ;

/* GET detail table page */ 
router.get('/detail', table_controllers.table_view_one_Page); 

/* GET create table page */ 
router.get('/create', table_controllers.table_create_Page); 
 
/* GET delete table page */ 
router.get('/delete', table_controllers.table_delete_Page); 

/* GET update costume page */ 
router.get('/update', secured, table_controllers.table_update_Page); 

   
module.exports = router; 