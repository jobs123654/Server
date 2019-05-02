let mongoose =require('../common/Common')
let userSchema=new mongoose.Schema({
        zbId:{type:Number},
        name:{type:String},
        method:{type:String},
        effect:{type:String},
        userId:{type:Number},
        yao:{type:String},
        date:{type:Date}
    },
    {
        versionKey:false
    });

var BchModel=mongoose.model('Bch',userSchema)
module.exports=BchModel
