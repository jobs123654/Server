
var express = require('express');
var router = express.Router();
var UserModel= require('../model/UserModel')
var WorkModel= require('../model/WorkModel')
var BchModel= require('../model/BchModel')
const findUser=(req,res)=>{
    let key=req.query.name;

    UserModel.find({
    name: new RegExp(`${key}`,`i`)
    // name:{$regex: '.*' + key + '.*' }
    }).exec( (error,data)=> {
        if (error){
            res.send('数据获取失败')
        }
        else{

            if (data.length>0){
                res.send(JSON.stringify((data.filter(e=>e.name.indexOf(key)>-1))))
            } else{
                res.send('数据为空')
            }
        }
    })
};
const addUser=(req,res)=>{
    let user=new UserModel(req.query);
    user.save(e=>{
        res.send(e?'error!'+e:'success!')
    })
}
const deleteUser=(req,res)=>{
    let key=req.query.name;
    UserModel.find({
        name:new RegExp(key,'i')
    },(err,data)=>{
        if (data.length>0){
            // res.send(JSON.stringify(data))
            data.map(e=>{
                e.remove()
            })
            res.send('数据删除成功')
        }else{
            res.send('数据获取失败')
        }
    })

}
const login=(req,res)=>{
let {zh,pwd}=req.query;
  UserModel.find({
      zh:zh,
      pwd:pwd
  },(er,d)=>{
      if (d.length<1){
          res.send('登录失败！请检查账号或密码是否正确')
      }
  })
};
const logout=(req,res)=>{

}
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
/* 新增用户 */
router.get('/add', function(req, res, next) {
    addUser(req,res)
});
/*查询用户*/
/* 登录 */
router.get('/find', function(req, res, next) {
    findUser(req,res)
});


/* 新增用户 */
router.get('/add', function(req, res, next) {
    addUser(req,res)
});


module.exports = router;
