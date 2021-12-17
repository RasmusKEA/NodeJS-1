const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors : { origin: "*" }})

server.listen(3000, (error) => {
    console.log("Server is running on port", 3000);
});

io.on('connection', (socket) => {
    console.log("User connected: " + socket.id)
})