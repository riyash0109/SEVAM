const mysql=require('mysql2');
const express=require('express');
var app=express();
const path = require('path');
const parser=require('body-parser');
app.use(parser.json());
app.use(express.urlencoded());
app.use(express.static('public'));
//app.use(express.static(__dirname+'../'));
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'rishiyash0109',
        database:'sevam'
});
connection.connect((err)=>
    {
        if(!err)
        console.log('DB Connected...');
        else
        console.log('Error');
})

app.listen(5700,()=>console.log('Server Startred...'));








    // app.post('/submit1',(req,res)=>
    // {
    //     console.log("hey");
    //     console.log(req.body);
    //     var sql="insert into login SET ?";
    //     var data=req.body;
    //     var  query=connection.query(sql,data,(err,result)=>
    //     {
    //         if(err) throw err;
    //         res.send("Inserted rows....");
    //     });
    // })