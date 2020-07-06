const express = require('express');

const app = express();
const PORT = 3000;

const studentList = [
    {id: 1, name: "Chanuka"},
    {id: 2, name: "Kasun"},
    {id: 3, name: "Isuru"},
    {id: 4, name: "Sandaru"},
    {id: 5, name: "Maduba"}
]
const subjectList = [
    {id: 1, name: "Mathematics"},
    {id: 2, name: "Physics"},
    {id: 3, name: "Chemistry"},
    {id: 4, name: "ICT"}
]
const requestLog = [];

//Middleware
app.use(express.json());
app.use((req, res, next) => {
    requestLog.push("Method: " + req.method + "|" + "Timestamp: " + new Date());
    //console.log(requestLog);
    next();
});

//Endpoints
//Student
app.get('/api/students', (req, res) => {
    res.send(studentList);
});

app.get('/api/students/:studentId', (req, res) => {
    let studentId = parseInt(req.params.studentId);
    let student = studentList.find(s => s.id === studentId);
    if(!student){
        return res.status(400).send("Student does not exist");
    }
    res.send(student);
});

app.post('/api/students', (req, res) => {
    if(!req.body.studentName) {
        return res.send("Please set all mandetory values!");
    }
    let student = {
        id: studentList.length + 1,
        name: req.body.studentName
    }
    studentList.push(student);
    res.send(student);
});

app.put('/api/students/:studentId', (req, res) => {
    let studentId = parseInt(req.params.studentId);
    let student = studentList.find(s => s.id === studentId);
    if(!student){
        return res.status(400).send("Student does not exist");
    }
    if(!req.body.studentName) {
        return res.send("Please set all mandetory values!");
    }
    student.name = req.body.studentName;
    res.send(studentList);
});

app.delete('/api/students/:studentId', (req, res) => {
    let studentId = parseInt(req.params.studentId);
    let student = studentList.find(s => s.id === studentId);
    if(!student){
        return res.status(400).send("Student does not exist");
    }
    let studentIndex = studentList.indexOf(student);
    studentList.splice(studentIndex, 1);
    res.send(student);
});

//Subject
app.get('/api/subjects', (req, res) => {
    res.send(subjectList);
});

app.get('/api/subjects/:subjectId', (req, res) => {
    let subjectId = parseInt(req.params.subjectId);
    let subject = subjectList.find(s => s.id === subjectId);
    if(!subject){
        return res.status(400).send("Subject does not exist");
    }
    res.send(subject);
});

app.post('/api/subjects', (req, res) => {
    if(!req.body.subjectName) {
        return res.send("Please set all mandetory values!");
    }
    let subject = {
        id: subjectList.length + 1,
        name: req.body.subjectName
    }
    subjectList.push(subject);
    res.send(subject);
});

app.put('/api/subjects/:subjectId', (req, res) => {
    let subjectId = parseInt(req.params.subjectId);
    let subject = subjectList.find(s => s.id === subjectId);
    if(!subject){
        return res.status(400).send("Subject does not exist");
    }
    if(!req.body.subjectName) {
        return res.send("Please set all mandetory values!");
    }
    subject.name = req.body.subjectName;
    res.send(subjectList);
});

app.delete('/api/subjects/:subjectId', (req, res) => {
    let subjectId = parseInt(req.params.subjectId);
    let subject = subjectList.find(s => s.id === subjectId);
    if(!subject){
        return res.status(400).send("Subject does not exist");
    }
    let subjectIndex = subjectList.indexOf(subject);
    subjectList.splice(subjectIndex, 1);
    res.send(subject);
});

app.listen(PORT);