var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var table_controller = require('../controllers/table'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Table ROUTES /// 
 
// POST request for creating a Table.  
router.post('/tables', table_controller.table_create_post); 
 
// DELETE request to delete Table. 
router.delete('/tables/:id', table_controller.table_delete); 
 
// PUT request to update Table. 
router.put('/tables/:id', table_controller.table_update_put); 
 
// GET request for one Table. 
router.get('/tables/:id', table_controller.table_detail); 
 
// GET request for list of all Table items. 
router.get('/tables', table_controller.table_list); 
 
module.exports = router;