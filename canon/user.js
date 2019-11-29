const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//注册1
router.post("/reg",function(req,res){	
	var obj=req.body;
	// console.log();
	pool.query(`INSERT INTO jp_user(phone,upwd) VALUES (\'${obj.phone}\',\'${obj.upwd}\')`,function(err,result){
		if(err)throw err;
		if(result.affectedRows>0){
            res.send({code:200,msg:'reg suc'})
				}
			}
		);	
	}
)
	//});	
// //	用户登录
router.post('/login',function(req,res){
	var obj=req.body;	
	pool.query(`SELECT * FROM jp_user WHERE phone=\'${obj.phone}\' and upwd=\'${obj.upwd}\'`,function(err,result){
			if(err)throw err;			
			if(result.length>0){
				res.send({code:200,msg:'login suc'});
			}else{res.send({code:201,msg:'uname or wpwd error'})
				};	//res.send('登录成功')；
		});
	});