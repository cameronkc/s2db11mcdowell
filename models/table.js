const mongoose = require("mongoose") 
const tableSchema = mongoose.Schema({
    material: String,
    length: {
        type: Number,
        min: [4, 'value is too low'],
        max: [400, 'value is too high']
    },
    width: {
        type: Number,
        min: [4, 'value is too low'],
        max: [400, 'value is too high']
    }
}) 

 
module.exports = mongoose.model("Table", tableSchema) 