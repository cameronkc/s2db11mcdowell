const mongoose = require("mongoose") 
const tableSchema = mongoose.Schema({ 
 material: String, 
 length: Number, 
 width: Number 
}) 
 
module.exports = mongoose.model("Table", tableSchema) 