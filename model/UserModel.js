let mongoose =require('../common/Common')
let userSchema=new mongoose.Schema({
        name:{type:String},
        zh:{type:String},
        role:{tyle:Number},
        pwd:{type:String},
        phone:{type:String},
        email:{type:String},
    },
    {
        versionKey:false
    });

var UserModel=mongoose.model('User',userSchema)
module.exports=UserModel
