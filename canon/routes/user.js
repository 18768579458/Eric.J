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
			window.location.href='http://127.0.0.1:8080/login.html'
			//res.send({code:200,msg:'reg suc'})
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
// //查找用户
// router.post('/detail',function(req,res){
// 	var obj=req.query;
// 	if(!obj.uid){
// 		res.send({code:401,msg:'uid required'});
// 		return;}
// 	pool.query('SELECT * FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
// 		if(err)throw err;
// 		res.send(result);});
// 		});	
// //修改用户
// router.post('/update',function(req,res){
// 	var obj=req.body;
// 	var i=400
// 	for(var key in obj){
// 		i++;
// 		if(!obj[key]){res.send({code:i,msg:key+'required'})};
// 		return;
// 		}
// 	var uid=obj.uid;
// 	delete obj.uid;
// 	pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj.uid],function(err,result){
// 		if(err)throw err;
// 		if(result.affectedRows>0){
// 			res.send({code:200,msg:'update suc'});
// 		}else{
// 			res.send({code:400,msg:'update error'});
// 		};
// 		});
// 	});
// //	用户列表
// //router.post('/list',function(req,res){
// //	var obj=req.body;
// //	var count=obj.count;
// //	var pno=obj.pno;
// //	if(!count){
// //		count=2;
// //		}
// //	if(!pno){
// //		pno=1;
// //		}
// //	count=parseInt(count);
// //	pno=parseINT(pno);
// //	var start=(pno-1)*count;
// //	pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,count],
// //		function(err,result){
// //		if(err)throw err;
// //		res.send(result)
// //		});
// //	});

// router.get("/list",(req,res)=>{
// //	设定行高
//    const rows=5;
//    if(req.query.loginUser!=null&&req.query.loginUser!=""){
//    var loginUser=req.query.loginUser;
//    var msg=req.query.msg;
//    var page=req.query.page;
//    var pageNum=(parseInt(page)-1)*rows;
//    var sql1="SELECT COUNT(*) as count FROM xz_user ";
//    if(req.query.uname!=null&&req.query.uname!=''){
//        sql1+=" WHERE uname like '%"+req.query.uname+"%'";}
//    console.log("sql1"+sql1);
//    pool.query(sql1,(err,result)=>{
// 	     console.log(result[0].count);   
// 		 var countPage=Math.ceil(parseInt(result[0].count)/parseInt(rows));
// 		 console.log(page,countPage);
// 		 if(page<=countPage){ 
// 		     var sql=`SELECT * FROM xz_user `;
// 			 if(req.query.uname!=null&&req.query.uname!=''){
//                   sql+=" WHERE uname like '%"+req.query.uname+"%'";}
// 			 sql+=` limit  ${pageNum},${rows}`;
// 	         console.log("sql"+sql);
//    pool.query(sql,(err,result)=>{
// 	   let ht=`<table border="1" style="width:800px;">`+
//                  `<tr><th colspan="6">${loginUser},${msg}</th></tr>`+
// 		         `<tr><td colspan="6">`+
// 		          `<form action='/user/list' method="get">`+
// 		          `用户名：<input type="text" name="uname"/>`+
// 		          `<input type="hidden" name="loginUser" value="${loginUser}"/>`+
// 		          `<input type="hidden" name="page" value="1"/>`+
// 		          `<input type="hidden" name="msg" value="搜索列表如下"/>`+
// 		          `<input type="submit" value="搜索"/></form></td></tr>`+
//                  `<tr><th>序号</th><th>用户名</th><th>手机</th><th>邮箱</th><th colspan="3">操作</th></tr>`;         
//        for(var i in result){
// 	      var bean=result[i];
// 		  ht+=`<tr><td>${pageNum+parseInt(i)+1}</td><td>${bean.uname}</td><td>${bean.phone}</td><td>${bean.email}</td>`+
// 			  `<td><a href="/user/update_b?loginUser=${loginUser}&uid=${bean.uid}">修改</a></td>`+
// 			  `<td><a href="/user/delete?loginUser=${loginUser}&uid=${bean.uid}">删除</a></td></tr>`;}
// 	      ht+= `<tr><td colspan="2" style="text-align:center;">`;
// 	        if(page>1){
// 		       ht+=`<a href='/user/list?loginUser=${loginUser}&msg=用户列表&page=${parseInt(page)-1}'>上一页</a>`;}
// 		  ht+=`</td><td colspan="2" style="text-align:center;">`;
// 	         if(page<countPage){
// 			   ht+=`<a href="/user/list?loginUser=${loginUser}&msg=用户列表&page=${parseInt(page)+1}">下一页</a>`;}
// 		  ht+=`</td><td  colspan="2">当前第${page}页/共${countPage}页</td></tr><tr><td colspan="3" style="text-align:center;"><a href='../user_reg.html'>注册新用户</a></td>`+
// 		        `<td colspan="3" style="text-align:center;"><a href="../user_login.html">退出登录</a></td></tr>`+   	   
// 	   `</table>`;
// 	   res.send(ht);});		 
// 		 }
//    });
//    }else{res.redirect("../user_login.html");}
// });

// //删除用户
// router.post('/delete',function(req,res){
// 	var obj=req.query;
// 	if(!uid){
// 		res.send({code:401,msg:'uid required'});
// 		return;}
// 	pool.query('DELETE FROM xz_user WHERE uid=?',[obj],
// 		function(err,result){
// 			if(err)throw err;
// 			if(result.affectedRows>0){
// 				res.send({code:200,msg:'delete suc'});
// 			}else{
// 				res.send({code:201,msg:'delete error'});
// 			}
// 		});
// 	});
module.exports=router;