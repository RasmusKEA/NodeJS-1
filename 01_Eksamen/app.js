require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http)

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

var session;

const { createPage } = require("./render.js");
const { urlencoded } = require("express"); 

const indexPage = createPage('index/index.html')
const loginPage = createPage('login/login.html')
const chatPage = createPage('chat/chat.html')
const registerPage = createPage('register/register.html')
const adminPage = createPage('admin/admin.html')
const editPage = createPage('edit/edit.html')
const createChat = createPage('create/create.html')

app.get('/', (req, res) => {
    session=req.session;
    if(session.userid){
        res.send(indexPage)
    }else{
        res.redirect('/login')
    }
        
})

app.get('/create', (req, res) => {
    res.send(createChat)
})

app.get('/admin', (req, res) => {
    session=req.session;
    if(session.userid === 'admin'){
        res.send(adminPage)
    }else{
        res.redirect('/')
    }
    
})

app.get('/edit', (req, res) => {
    res.send(editPage)
})

app.get('/login', (req, res) => {
    res.send(loginPage)
})

app.get('/register', (req, res) => {
    res.send(registerPage)
})

app.get('/chat/:id', (req, res) => {
    session=req.session;
    if(session.userid){
        res.send(chatPage)
    }else{
        res.redirect('/login')
    }
    
})


const chatRouter = require("./routers/chats.js");
app.use(chatRouter.router);

const loginRouter = require("./routers/login.js");
app.use(loginRouter.router);

const registerRouter = require("./routers/register.js");
app.use(registerRouter.router);

io.on('connection', (socket) => {
    let currentRoomId;
    let username;
    socket.on('chat message', (msg, room, name) => {
        io.sockets.in(room).emit('chat message', msg)
        currentRoomId = room;
        username = name;

    });

    socket.on('join-room', room =>{
        socket.join(room)
    })

    socket.on('disconnect', function() {
        socket.broadcast.in(currentRoomId).emit('chat message', `${username} left the chat`);
      });

  });

const PORT = process.env.PORT || 8080;

http.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});