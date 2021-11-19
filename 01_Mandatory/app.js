const express = require('express')
const app = express()

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/theory", (req, res) => {
    res.sendFile(__dirname + "/public/theory.html")
})

app.get("/terminal", (req, res) => {
    res.sendFile(__dirname + "/public/terminal.html")
})

app.get("/snippets", (req, res) => {
    res.sendFile(__dirname + "/public/snippets.html")
})

const PORT = process.env.PORT || 7070;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});