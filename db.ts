var mysql  = require('mysql');  

// var connection = mysql.createConnection({      
//   user     : 'test_service',
//   password : '@Test_service123',
//   port: '6033',
//   database:'test_service'
// }); 

var pool  = mysql.createPool({
    connectionLimit : 10,
    user     : 'test_service',
  password : '@Test_service123',
  port: '6033',
  database:'test_service'
  });
  
 
const PRODUCT_TABLE='test_service.products'
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

exports.GetAllProduct = function(callback){
var  sql = 'SELECT * FROM '+PRODUCT_TABLE;
console.log(sql);
//查
pool.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }

//    console.log('--------------------------SELECT----------------------------');
//    console.log(result);
//    console.log('------------------------------------------------------------\n\n');  
// res = result;
return callback(result);
});
}


 
