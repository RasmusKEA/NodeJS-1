const router = require("express").Router();
const mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "nodefolio",
    port: "3306"
})

connection.connect((err) => {
    if(err){
        throw err
    }else{
        console.log("connected")
    }
})

router.get("/api/projects", (req, res) => {

    let sql = "SELECT * FROM projects"
    connection.query(sql, function(err, result){
        if(err){throw err} 
        console.log(result[0].projectname)
        res.send(result)
        
    })
});


module.exports = {
    router
};
