let mongoose =require('../common/Common')
let userSchema=new mongoose.Schema({
        name:{type:String},//任务名称
        areaId:{type:Number},//区域id
        date:{type:Date},//发布时间
        userId:{type:Number}
    },
    {
        versionKey:false
    });

var TaskModel=mongoose.model('task',userSchema)
module.exports=TaskModel
