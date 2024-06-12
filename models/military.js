const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "studentId":{type:String,required:true},
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "address":{type:String,required:true},
        "pincode":{type:String,required:true},
        "state":{type:String,required:true}
    }
)

let militarymodel=mongoose.model("militarys",schema);
module.exports={militarymodel}