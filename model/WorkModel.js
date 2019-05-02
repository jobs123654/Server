let mongoose =require('../common/Common')
let userSchema=new mongoose.Schema({
        content:{type:String},
        other:{type:String},
        areaId:{type:Number},
        zbId:{type:Number},
        date:{type:Date},
        userId:{type:Number}
    },
    {
        versionKey:false
    });

var WorkModel=mongoose.model('Work',userSchema)
module.exports=WorkModel
