const mongoose = require("mongoose")
const schema = mongoose.Schema(
{
    "name":{type:String,require:true},
    "dob":{type:String,require:true},
    "bloodgroup":{type:String,require:true},
    "mobno":{type:String,require:true},
    "address":{type:String,require:true},
    "pincode":{type:String,require:true},
    "district":{type:String,require:true},
    "place":{type:String,require:true},
    "emailid":{type:String,require:true},
    "username":{type:String,require:true},
    "password":{type:String,require:true},
    "cpassword":{type:String,require:true}
    
}
)

let usermodel = mongoose.model("users",schema)
module.exports = {usermodel}