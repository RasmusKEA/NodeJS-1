const router = require("express").Router();
const mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "nodechat",
    port: "3306"
})

connection.connect((err) => {
    if(err){
        throw err
    }else{

    }
})

router.get("/api/chats", (req, res) => {

    let sql = "SELECT * FROM chats"
    connection.query(sql, function(err, result){
        if(err){throw err} 
        res.send(result)
        
    })
});

router.delete('/api/chats/:id', (req, res) => {
    let sql = `DELETE FROM chats WHERE idchats = ${req.params.id}`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.sendStatus(202)
    })
})

router.get("/api/chats/:id", (req, res) => {
    let sql = `SELECT * FROM chats WHERE idchats = ${req.params.id}`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.send(result)
    })
})

router.put("/api/chats/:id", (req, res) => {
    let sql = `UPDATE chats SET name = '${req.body.name}', description = '${req.body.description}' WHERE idchats = '${req.params.id}'`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.sendStatus(200)
    })
})

router.post("/api/chats", (req, res) => {
    let sql = `INSERT INTO chats (name, description) VALUES ('${req.body.name}', '${req.body.description}')`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.sendStatus(200)
    })
})

module.exports = {
    router
};