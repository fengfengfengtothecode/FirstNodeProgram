var express = require('express');
var app = express();
var db = require('./db.ts');
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})


app.get('/',async function (req, res) {
  await db.GetAllProduct(function(result){
    res.send(result);
  });
})
