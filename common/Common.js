const mongoose = require("mongoose")
const db=mongoose.connect('mongodb://localhost/green')
module.exports=mongoose
