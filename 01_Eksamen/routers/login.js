const router = require("express").Router();
const mysql = require("mysql")
const bcrypt = require('bcrypt');

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

router.post('/api/login', (req, res) => {
    console.log("test");
    let sql = `SELECT * FROM users WHERE username = '${req.body.username}'`
    connection.query(sql, async function(err, result){
            if(await bcrypt.compare(req.body.password, result[0].password)) {
                session=req.session;
                session.userid=req.body.username;
                console.log(req.session.userid)
                res.sendStatus(200);
            }else{
                res.sendStatus(400);
            }
    })
})



module.exports = {
    router
};