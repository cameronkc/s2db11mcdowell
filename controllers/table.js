var Table = require('../models/table'); 
 
// List of all Tables 
exports.table_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Table list'); 
}; 
 
// for a specific Table. 
exports.table_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Table detail: ' + req.params.id); 
}; 
 
// Handle Table create on POST. 
exports.table_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Table create POST'); 
}; 
 
// Handle Table delete form on DELETE. 
exports.table_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Table delete DELETE ' + req.params.id); 
}; 
 
// Handle Table update form on PUT. 
exports.table_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Table update PUT' + req.params.id); 
}; 

// List of all Costumes 
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
        res.render('tables', { title: 'Table Search Results', results: theTables }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.table_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Table(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
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
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Table.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.table_type)  
               toUpdate.table_type = req.body.table_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


