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
        res.send(result)
        
    })
});

router.get("/api/project/:id", (req, res) => {
    let sql = `SELECT * FROM projects WHERE idprojects = ${req.params.id}`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.send(result)
    })
})

router.delete("/api/project/:id", (req, res) => {
    let sql = `DELETE FROM projects WHERE idprojects = ${req.params.id}`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.sendStatus(202)
    })
})

router.put("/api/project/:id", (req, res) => {
    let sql = `UPDATE projects SET projectname = '${req.body.projectname}', category = '${req.body.category}', techs = '${req.body.techs}', links = '${req.body.links}' WHERE idprojects = '${req.params.id}'`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.sendStatus(200)
    })
})

router.post("/api/project", (req, res) => {
    let sql = `INSERT INTO projects (projectname, category, techs, links) VALUES ('${req.body.projectname}', '${req.body.category}', '${req.body.techs}', '${req.body.links}')`
    connection.query(sql, function(err, result){
        if(err){throw err}
        res.sendStatus(200)
    })
})

module.exports = {
    router
};
