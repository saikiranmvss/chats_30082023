var mysql=require('mysql');
var db= mysql.createConnection({host:'localhost',user:'root',password:'',database:'test'});


class databases{

  validate=(email,pass)=>{
      var sql="SELECT user_id,name FROM users WHERE email=? AND password=?";
      return new Promise((resolve, reject) => {
        db.query(sql,[email,pass],async(error,result)=>{
          if(error){
            console.log(error);
          }else{
              resolve(result[0]);
          }
        })
      })
  }

}


module.exports={databases};