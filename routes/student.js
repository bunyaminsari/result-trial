var express = require("express"),
    mysql = require("mysql"),
    router = express.Router;

var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'result'
});

    //INDEX ROUTE 
//Get students from Database
router.get('/students',(req,res)=>{
    var getStudents = 'SELECT * FROM students;';
    connection.query(getStudents,function(err,results){
        if(err) throw err;
        var students = results;
        res.render('student/index',{students:students});
    });
});

//NEW ROUTE 
router.get('/students/new',(req,res)=>{
    res.render('student/new');
});

//CREATE ROUTE 
// Add New Students to Database 
router.post('/students',function(req,res){
    var newStudent = {
        grade: req.body.grade,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };
var addStudent ='INSERT INTO students SET ?';
connection.query(addStudent,newStudent,function(err,results){
        if(err) throw err;
        res.redirect('/students');
        console.log('New Student Added!');
    });
});

module.exports = router;