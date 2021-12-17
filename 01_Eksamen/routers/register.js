const router = require("express").Router();
const mysql = require("mysql")
const bcrypt = require('bcrypt');
const saltRounds = 10;

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


  router.post('/api/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    let sql = `INSERT INTO users (username, password) VALUES ('${req.body.username}', '${hashedPassword}')`
    connection.query(sql, async function(err, result){
        res.sendStatus(200)
    })
  })

  module.exports = {
    router
};