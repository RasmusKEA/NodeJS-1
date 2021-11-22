require('dotenv').config()
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: process.env.ACCESS_TOKEN_SECRET,
    rolling: true,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(cookieParser());

const myusername = "user"
const mypassword = "password"
var session;

app.get('/login', function(req,res){
    session=req.session;
    if(session.userid){
        res.redirect('/admin')
    }else{
        res.send(loginPage)
    }
    
})

const mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "nodefolio",
    port: "3306"
    })

app.post('/login',(req,res) => {

    let sql = `SELECT * FROM users WHERE username = '${req.body.username}'`
    connection.query(sql, function(err, result){
        if(err){throw err} 
        if(req.body.password == result[0].password){
            session=req.session;
            session.userid=req.body.username;
            console.log(req.session)
            res.sendStatus(200);
        }
        else{
            res.sendStatus(400);
        }
    })
})

/* Import and use routes */
const projectsRouter = require("./routers/projects.js");
const pagesRouter = require("./routers/pages.js")
const contactRouter = require("./routers/contact.js");



app.use(projectsRouter.router);
app.use(pagesRouter.router);
app.use(contactRouter.router);



const { createPage } = require("./render.js");
const { urlencoded } = require("express");  

/* Read the HTML files */
const frontpagePage = createPage("frontpage/frontpage.html", { 
    title: "Nodefolio | Welcome"
});
const CVPage = createPage("CVPage/CVPage.html");
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");
const loginPage = createPage("login/login.html");
const adminPage = createPage("admin/admin.html");

app.get("/", (req, res) => {
    res.send(frontpagePage);
});


app.get("/cv", (req, res) => {
    res.send(CVPage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.get('/openCV', function(req, res) {
    res.sendFile(__dirname + "/public/assets/CV.pdf");
})



app.get('/admin', function(req, res){
    session=req.session;
    if(session.userid){
        res.send(adminPage)
    }else{
        res.redirect('/login')
    }
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
