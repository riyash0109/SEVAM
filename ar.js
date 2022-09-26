const mysql=require('mysql2');
var nodemailer = require('nodemailer');
const express=require('express');
const port =5800;
const app =express();
const bodyParser=require('body-parser');
const cors=require('cors');
const { connect } = require('./app');
var session = require('express-session');
var cookieparser = require('cookie-parser');
const{cookie} = require("express/lib/response");
const req = require('express/lib/request');


app.use(cors({
    orgin: "*",
}))

app.use(cookieparser('secret'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));
const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'rishiyash0109',
        database:'sevam'
    }
);

var agname ;
var username;
var useremail;
var admin;

// app.use(req,res,next)=>{
//     console.log(req,path);
//     next();
// }

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

connection.connect((err)=>
{
    if(!err)
    console.log('Database connection eshtablished....!')
    else
    console.log('Error')
})

app.listen(port,()=>
{
    console.log('Connection Eshtablished successfully....!!!')
}
)

app.get('/getjsonad',(req,res)=>
{
    connection.query("SELECT aptid,name,date,Time,address,status,ag_status,agent,report from appointment",(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log('Error in Displaying')
    })
})

app.get('/getjsontest',(req,res)=>
{
    connection.query("SELECT * from test_db",(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log('Error in Displaying')
    })
})

app.get('/getmail',(req,res)=>
{
    console.log('inside get mail')
    var mailOptions = {
        from: 'yashranchi0109@gmail.com',
        to: 'yash@mca.christuniversity.in',
        subject: 'Sending Email via Node.js',
        text: 'That was easy!'
      };
      mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})

app.get('/getjsonag',(req,res)=>
{
    connection.query("SELECT name,phonenumber,experience,email from agentreg",(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log('Error in Displaying')
    })
})

app.get('/getpatient',(req,res)=>
{
    connection.query("SELECT name,email,gender,age from userreg",(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log('Error in Displaying')
    })
})

app.get('/getjson',(req,res)=>
{
    connection.query("SELECT * from appointment",(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log('Error in Displaying')
    })
})

app.get('/getjsontoday',(req,res)=>
{
    console.log("agent-");
    console.log(agname);
    var sql = connection.query('Select * from appointment where agent = ?',[agname],(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log('Error in Displaying')
    })
})

app.get('/userprofile',(req,res)=>
{
    res.sendFile(__dirname +'/public/userprofile.html');

});

app.get('/usertable',(req,res)=>
{
    res.sendFile(__dirname +'/public/usertable.html');

});

app.get('/agentfg1',(req,res)=>
{
    res.sendFile(__dirname +'/public/agent_fgpass1.html');

});

app.get('/agentfg2',(req,res)=>
{
    res.sendFile(__dirname +'/public/agent_fgpass2.html');

});

app.get('/adminfg1',(req,res)=>
{
    res.sendFile(__dirname +'/public/admin_fgpass.html');

});

app.get('/adminfg2',(req,res)=>
{
    res.sendFile(__dirname +'/public/admin_fgpass2.html');

});

app.get('/usermain',(req,res)=>
{
    res.sendFile(__dirname +'/public/muserprof.html');

});


app.get('/home',(req,res)=>
{
    console.log(req.session.agentid);
    res.sendFile(__dirname +'/public/agentProfile.html', {agentid:req.session.agentid});
});

app.get('/ui',(req,res)=>
{
    res.sendFile(__dirname +'/public/agentUI.html');
    //res.redirect('/agentUI');

});

app.get('/calendar',(req,res)=>
{
    res.sendFile(__dirname +'/public/calendar.html');

});

app.get('/db1',(req,res)=>
{
    console.log(req.session.agentid);
    //res.json({agentid:req.session.agentid});
    res.sendFile(__dirname +'/public/datatable5.html' );

});

app.get('/db2',(req,res)=>
{
    res.sendFile(__dirname +'/public/datatable6.html' , {agentid:req.session.agentid});
});

app.get('/adminhome',(req,res)=>
{
    console.log(req.session.adminid);
    res.sendFile(__dirname +'/public/profile.html');
});

app.get('/adminprofile' ,(req,res)=>
{
    res.sendFile(__dirname +'/public/index.html')
});

app.get('/adminupload' ,(req,res)=>
{
    res.sendFile(__dirname +'/public/image-dropzone.html')
});

app.get('/admindb1' ,(req,res)=>
{
    
    res.sendFile(__dirname + '/public/datatable.html',{})
});

app.get('/admindb2' ,(req,res)=>
{
    res.sendFile(__dirname + '/public/datatable2.html')
});

app.get('/admindb3' ,(req,res)=>
{
    res.sendFile(__dirname + '/public/datatable3.html')
});

app.get('/admindb4' ,(req,res)=>
{
    res.sendFile(__dirname + '/public/datatable4.html')
});

app.get('/fg1' ,(req,res)=>
{
    res.sendFile(__dirname + '/public/forgot_password1.html')
});

app.get('/fg2' ,(req,res)=>
{
    res.sendFile(__dirname + '/public/forgot_password2.html')
});

app.post('/agentsubmit',(req,res)=>
{
    console.log(req.body);
    var sql="insert into agentreg SET ?";
    var data=req.body;
    var query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw err;
        res.redirect("admindb4");
    });
})

app.get('/mainuser',(req,res)=>{
    res.sendFile(__dirname + '/public/user_login.html')
})

app.get('/contactuser',(req,res)=>{
    res.sendFile(__dirname + '/public/user_login.html')
})

app.get('/1home',(req,res)=>
     {
         //console.log(req.url);
         res.sendFile(__dirname +'/public/1st.html');
});

app.get('/user_login',(req,res)=>
     {
         //console.log(req.url);
         res.sendFile(__dirname +'/public/user_login.html');
});

app.get('/agent_login',(req,res)=>
     {
         //console.log(req.url);
         res.sendFile(__dirname +'/public/agent_login.html');
});

app.get('/admin_login',(req,res)=>
     {
         //console.log(req.url);
         res.sendFile(__dirname +'/public/admin_login.html');
});

app.get('/register',(req,res)=>
     {
         //console.log(req.url);
         res.sendFile(__dirname +'/public/user_login.html');
});

app.get('/userhome',(req,res)=>
     {
         //console.log(req.url);
         res.sendFile(__dirname +'/public/agentUI.html');
});

app.get('/logout',(req,res)=>
{
    req.session.destroy();
    res.sendFile(__dirname+'/public/agent_login.html')
});

app.get('/muserprof' ,(req,res)=>{
    console.log(req.session.userid);
    res.sendFile(__dirname + '/public/muserprof.html')
})

app.get('/logout_admin',(req,res)=>
{
    req.session.destroy();
    res.sendFile(__dirname+'/public/admin_login.html')
});

app.get('/logout_user',(req,res)=>{
    req.session.destroy();
    res.sendFile(__dirname+'/public/user_login.html')
    
})

app.post('/usersubmit',(req,res)=>
    {
        console.log(req.body);
        var sql="insert into userreg SET ?";
        var data=req.body;
        var query=connection.query(sql,data,(err,result)=>
        {
            if(err) throw err;
            res.redirect("user_login");
        });
});

    app.post('/adminsubmit',(req,res)=>
    {
        console.log(req.body);
        var sql="insert into adminreg SET ?";
        var data=req.body;
        var query=connection.query(sql,data,(err,result)=>
        {
            if(err) throw err;
            res.redirect("admin_home");
        });
    })

    app.post('/agentsubmit',(req,res)=>
    {
        console.log(req.body);
        var sql="insert into appointment SET ?";
        var data=req.body;
        var query=connection.query(sql,data,(err,result)=>
        {
            if(err) throw err;
            res.redirect("agent_login");
        });
    })

    app.post('/apptsubmit',(req,res)=>
    {
        console.log("inside apptsubmit");
        console.log(req.body);
        var sql="insert into appointment SET ?";
        var data=req.body;
        var query=connection.query(sql,data,(err,result)=>
        {
            if(err) throw err;
            res.redirect("usermain");
        });
    })

    app.post('/user_updtpass',(req,res)=>
    {
        var password = req.body.password;
        // var sql=`UPDATE userreg set password = ? where email= ?` , [password , user_email],
        var data=req.body;
        var query=connection.query(`UPDATE userreg set password = ? where email= ?` , [password , user_email],(err,result)=>
        {
            if(err) throw err;
            res.redirect("mainuser");
        });
    })

    app.post('/agent_updtpass',(req,res)=>
    {
        var password = req.body.password;
        // var sql=`UPDATE userreg set password = ? where email= ?` , [password , user_email],
        var data=req.body;
        var query=connection.query(`UPDATE agentreg set password = ? where email= ?` , [password , agent_email],(err,result)=>
        {
            if(err) throw err;
            res.redirect("agent_login");
        });
    })

    app.post('/admin_updtpass',(req,res)=>
    {
        console.log("inside admin updt password");
        var password = req.body.password;
        // var sql=`UPDATE userreg set password = ? where email= ?` , [password , user_email],
        var data=req.body;
        var query=connection.query(`UPDATE adminreg set password = ? where email= ?` , [password , admin_email],(err,result)=>
        {
            if(err) throw err;
            res.redirect("admin_login");
        });
    })

    app.post('/testad',(req,res)=>
    {
        console.log(req.body);
        var sql="insert into test_db SET ?";
        var data=req.body;
        var query=connection.query(sql,data,(err,result)=>
        {
            if(err) throw err;
            res.redirect("admindb1");
        });
    })

    app.post('/agent_login',function(req,res){
        var emailj = req.body.email;
        var passwordj = req.body.password;
        
        var sql = connection.query('Select * from agentreg where email = ? and password = ?',[emailj,passwordj],function(err,results,fields){
            if (err) throw err;
            
            if(results.length > 0){
                var agent = results[0]
                req.session.agentid = agent.name;
                console.log(req.session.agentid);
                agname = req.session.agentid;
                req.session.loggedin = true;
                req.session.save();
                console.log('Logged In successfully');
                res.redirect('db1');
            }
            else{
                console.log("User doesn't exist");
            }
        })
    });


    app.post('/user_login',function(req,res){
        var email = req.body.email;
        var password = req.body.password;

        var sql = connection.query('Select * from userreg where email = ? and password = ?',[email,password],function(err,results,fields){
            if (err) throw err;

            if(results.length > 0){
                var user = results[0]
                req.session.userid = user.name;
                req.session.usermail = user.email;
                console.log(req.session.userid);
                username = req.session.userid;
                useremail = req.session.usermail;
                req.session.loggedin = true;
                req.session.save();
                console.log('Logged In successfully');
                console.log(useremail);
                res.redirect('muserprof');
            }
            else{
                console.log("User doesn't exist");
            }
        })
    });
    var user_email;
    app.post('/user_fgpass',function(req,res){
         user_email = req.body.email;
        // var phno = req.body.phno;

        var sql = connection.query('Select * from userreg where email = ? ',[user_email],function(err,results,fields){
            if (err) throw err;

            if(results.length > 0){
                console.log('Changing password');
                // res.redirect('/index');
                // window.location.replace('https://www.google.co.in/');
                res.redirect('fg2');
                // alert('Logged In');
            }
            else{
                console.log("User doesn't exist");
            }
        })
    });

    var admin_email;
    app.post('/admin_fgpass',function(req,res){
         user_email = req.body.email;
        // var phno = req.body.phno;
        console.log("inside admin fgpass")
        var sql = connection.query('Select * from adminreg where email = ? ',[user_email],function(err,results,fields){
            if (err) throw err;

            if(results.length > 0){
                console.log('Changing password');
                // res.redirect('/index');
                // window.location.replace('https://www.google.co.in/');
                res.redirect('adminfg2');
                // alert('Logged In');
            }
            else{
                console.log("User doesn't exist");
            }
        })
    });

    var agent_email;
    app.post('/agent_fgpass',function(req,res){
        agent_email = req.body.email;
       // var phno = req.body.phno;

       var sql = connection.query('Select * from agentreg where email = ? ',[agent_email],function(err,results,fields){
           if (err) throw err;

           if(results.length > 0){
               console.log('Changing password');
               // res.redirect('/index');
               // window.location.replace('https://www.google.co.in/');
               res.redirect('agentfg2');
               // alert('Logged In');
           }
           else{
               console.log("User doesn't exist");
           }
       })
   });

    app.post('/admin_login',function(req,res){
        var email = req.body.email;
        var password = req.body.password;

        var sql = connection.query('Select * from adminreg where email = ? and password = ?',[email,password],function(err,results,fields){
            if (err) throw err;

            if(results.length > 0){
                var admin = results[0]
                req.session.adminid = admin.name;
                console.log(req.session.adminid);
                adname = req.session.adminid;
                req.session.loggedin = true;
                req.session.save();
                console.log('Logged In successfully');
                res.redirect('admindb1');
            }
            else{
                
                console.log("User doesn't exist");
            }
        })
    });

app.get('/update/:id',(req,res)=>
{   
var id=req.params.id;
var agentid = req.params.agentid;
var sql2 =`UPDATE appointment set agent= ` +`'`+agname+`'`+` , status = 'Confirmed' WHERE status = 'Pending' AND aptid= `+id;
connection.query(sql2, function (err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
})

app.get('/reject/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
var sql = `UPDATE appointment SET agent = ` +`'` +agname+ `'`+`, status = 'Cancelled' , ag_status = 'Cancelled' , Report = 'Cancelled' WHERE status = 'Pending' AND aptid=`+id;
connection.query(sql, function (err, rows, fields) {
  if (err) throw err;
  res.send(rows);
});
})

app.get('/current/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
var sql = `UPDATE appointment set agent= ` +`'`+agname+`'`+` , ag_status = 'Collected' WHERE ag_status = 'Pending' AND aptid= `+id;
connection.query(sql, function (err, rows, fields) {
  if (err) throw err;
  res.send(rows);
});
})

app.get('/pending/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
var sql = `UPDATE appointment SET agent = ` +`'` +agname+ `'`+`, ag_status = 'Submitted' WHERE ag_status = 'Collected' AND aptid=`+id;
connection.query(sql, function (err, rows, fields) {
  if (err) throw err;
  res.send(rows);
});
})


app.get('/delete/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
var sql = "DELETE from appointment where aptid="+id;
connection.query(sql, function (err, rows, fields) {
  if (err) throw err;
  //console.log(result.affectedRows + " record(s) updated");
  res.send(rows);
});
})

app.get('/updt/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
var sql = "UPDATE appointment set report='Generated' where aptid="+id;
connection.query(sql, function (err, rows, fields) {
  if (err) throw err;
  //console.log(result.affectedRows + " record(s) updated");
  res.send(rows);
});
})

app.get('/drop/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
var sql = "DELETE from test_db where test_id="+id;
connection.query(sql, function (err, rows, fields) {
  if (err) throw err;
  //console.log(result.affectedRows + " record(s) updated");
  res.send(rows);
});
})

app.get('/drop_patient/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
// var sql = "DELETE from userreg where email= ?"+id;
var sql = connection.query('Delete from userreg where email = ?',[id],function(err,results,fields){
  if (err) throw err;
  //console.log(result.affectedRows + " record(s) updated");
  res.send(results);
});
})

app.get('/dropagent/:id',(req,res)=>
{   console.log("Done");
var id=req.params.id;
// var sql = "DELETE from userreg where email= ?"+id;
var sql = connection.query('Delete from agentreg where email = ?',[id],function(err,results,fields){
  if (err) throw err;
  //console.log(result.affectedRows + " record(s) updated");
  res.send(results);
});
})

app.post('/table',(req,res)=>
{
    console.log("inside table");
    res.redirect('usertable.html')
})

app.get('/getusertable',(req,res)=>
{
    console.log(useremail);
    var sql = connection.query('Select name,email,date,Time,agent,status,ag_status,report from appointment where email = ?',[useremail],(err,rows,fields)=>
    {
        console.log(rows);
        if(!err){
        console.log("hello world");
        res.send(rows);}
        else{
        console.log('Error in Displaying');
        res.redirect('usertable');}
    })
    
})

app.get('/cancel/:id',(req,res)=>
{
    console.log(useremail);
    var sql = connection.query('UPDATE appointment set status="Cancelled" , ag_status = "Cancelled" , report = "Cancelled" where email= ?',[useremail],(err,rows,fields)=>
    {
        console.log(rows);
        if(!err){
        console.log("hello world");
        res.send(rows);}
        else{
        console.log('Error in Displaying');
        res.redirect('usertable');}
    })
    
})

// app.get('/cancel/:id',(req,res)=>
// {   console.log("Done");
// var id=req.params.id;
// var sql = "UPDATE appointment set status='Cancelled' where aptid="+id;
// connection.query(sql, function (err, rows, fields) {
//   if (err) throw err;
//   //console.log(result.affectedRows + " record(s) updated");
//   res.send(rows);
// });
// })
