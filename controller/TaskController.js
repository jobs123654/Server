var express = require('express');
var router = express.Router();
var UserModel= require('../model/UserModel')
var TaskModel= require('../model/TaskModel')
/* 新增作业记录 */
const addTask=(req,res)=>{
let work=new TaskModel(req.query)

    work.save((e)=>{
        if (!e){
            res.send('添加成功！')
        }else{
            res.send('添加失败！')
        }
    })
};
const findTask=(req,res)=>{
    TaskModel.find({},(er,d)=>{
        if (d.length>0){
            res.send(JSON.stringify(d))
        } else{
            res.send('无作业记录')
        }
    })
}
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
router.get('/addTask', function(req, res, next) {
    addTask(req,res)
});
/*查询作业记录*/
router.get('/findTask', function(req, res, next) {
    findTask(req,res)
});
module.exports=router
