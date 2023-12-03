const mongoose = require("mongoose");
const employeeModel = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name is Required"],
    minLength:[3,'Name must be atleast 3 characters long'],
    maxLength:[20,'name must be exceed 20 characters'],
},
image:{
    type:String,
    required:true,
    
},
email:String,
year:Number,
designation:String,

},
{timestamps:true}
  
)
module.exports= mongoose.model('employee',employeeModel)