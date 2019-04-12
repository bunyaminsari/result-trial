var express = require('express');
var app  = express();
var ejs  = require('ejs')
var bodyParser = require('body-parser');
var mysql = require('mysql');

//Routes
var studentRoutes = require("./routes/student"); 

var port = process.env.PORT || 8080;
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'result'
});

app.get('/',function(req,res){
res.render('home');
});

//STUDENT ROUTES 
// //INDEX ROUTE 
// //Get students from Database
// app.get('/students',(req,res)=>{
//     var getStudents = 'SELECT * FROM students;';
//     connection.query(getStudents,function(err,results){
//         if(err) throw err;
//         var students = results;
//         res.render('student/index',{students:students});
//     });
// });

// //NEW ROUTE 
// app.get('/students/new',(req,res)=>{
//     res.render('student/new');
// });

// //CREATE ROUTE 
// // Add New Students to Database 
// app.post('/students',function(req,res){
//     var newStudent = {
//         grade: req.body.grade,
//         firstname: req.body.firstname,
//         lastname: req.body.lastname
//     };
// var addStudent ='INSERT INTO students SET ?';
// connection.query(addStudent,newStudent,function(err,results){
//         if(err) throw err;
//         res.redirect('/students');
//         console.log('New Student Added!');
//     });
// });


// function lookupStudent(req,res,next){
//     var studentID = req.params.id;
//     var sql  = 'SELECT * FROM students WHERE id = "$1"';
//     connection.query(sql,[studentID],function(err,results){
//         if(err) throw err;
//          req.student = results[0];
//          console.log(req.student);
//     next();
//     });
// }


// //SHOW ROUTE 
// app.get('/students/:id',lookupStudent,function(req,res){
// res.send(req.student);
// console.log(req.student);
// });




//Get teacher from Database 
app.get('/teachers',function(req,res){
    var getTeachers = 'SELECT * FROM teachers;';
    connection.query(getTeachers,function(err,results){
        if(err) throw err;
        var teachers = results;
        res.render('teacher',{teachers:teachers});
    });
});

// Add New Teacher to Database 
app.post('/teachers',function(req,res){
    var newTeacher = {
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };
var addTeacher ='INSERT INTO teachers SET ?';
connection.query(addTeacher,newTeacher,function(err,results){
        if(err) throw err;
        res.redirect('/teachers');
        console.log('New Teacher Added!');
    });
});

//Get subjects from Database 
app.get('/subjects',function(req,res){
    var getSubjects = 'SELECT * FROM students  JOIN subjects ON students.id = subjects.student_id;';
    connection.query(getSubjects,function(err,results){
        if(err) throw err;
        var subjects = results;
        res.render('subject',{subjects:subjects});
    });
});

// Add New Subject to Database 
app.post('/subjects',function(req,res){
    var newSubject = {
        title: req.body.title,
    };
var addSubject ='INSERT INTO subjects SET ?';
connection.query(addSubject,newSubject,(err,results) => {
        if(err) throw err;
        res.redirect('/subjects');
        console.log('New Subject Added!');
    });
});












app.listen(port,function(){
console.log("Server is listening at port: "+ port)
});