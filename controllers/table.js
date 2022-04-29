var Table = require('../models/table'); 
 

// List of all Tables 
exports.table_list = async function(req, res) { 
    try{ 
        theTables= await Table.find(); 
        res.send(theTables); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.table_view_all_Page = async function(req, res) { 
    try{ 
        theTables = await Table.find(); 
        res.render('table', { title: 'Table Search Results', results: theTables }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Table create on POST. 
exports.table_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Table(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"materia":"steel", "widht":211, "lendth":"1313"} 
    document.material = req.body.material 
    document.length = req.body.length; 
    document.width = req.body.width; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// GET for a specific TABLE. 
exports.table_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Table.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Table update form on PUT. 
exports.table_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Table.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.material)  
               toUpdate.material = req.body.material; 
        if(req.body.length) toUpdate.length = req.body.length; 
        if(req.body.width) toUpdate.width = req.body.width; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


// Handle Table delete on DELETE. 
exports.table_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Table.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    }
}; 

// Handle a show one view with id specified by query 
exports.table_view_one_Page = async function(req, res) { 
    console.log("single view for id " + req.query.id) 
    try{ 
        result = await Table.findById( req.query.id) 
        res.render('tabledetail', { title: 'Table Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a table. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.table_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('tablecreate', { title: 'Table Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.table_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Table.findById(req.query.id) 
        res.render('tableupdate', { title: 'Table Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.table_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Table.findById(req.query.id) 
        res.render('tableDelete', { title: 'Table Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};