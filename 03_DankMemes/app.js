const express = require("express");
const app = express();
app.use(express.json());

const dankMemes = [
    {id : 1,
    topText: "Dank meme 1",
    bottomText: "Dank meme 1"},
    {id : 2,
    topText: "Dank meme 2",
    bottomText: "Dank meme 2"},
    {id : 3,
    topText: "Dank meme 3",
    bottomText: "Dank meme 3"},
    {id : 4,
    topText: "Dank meme 4",
    bottomText: "Dank meme 4"},
    {id : 5,
    topText: "Dank meme 5",
    bottomText: "Dank meme 5"}
]

app.get("/dankmemes", (req, res) => {
    res.send({memes : dankMemes});
})

app.get("/dankmemes/:id", (req, res) => {
    let meme = dankMemes[req.params.id-1]
    res.send({meme}) 
})

app.post("/dankmemes", (req, res) =>{
    const upperText = req.body.topText
    const lowerText = req.body.bottomText

    dankMemes.push({topText : upperText, bottomText : lowerText})

    res.send({"succes" : true})
})

app.put("/dankmemes/:id", (req, res) =>{
    

    if(req.body.hasOwnProperty("topText") === true && req.body.hasOwnProperty("bottomText") === true){
        dankMemes[req.params.id-1] = {topText: req.body.topText,
        bottomText: req.body.bottomText}
        
        res.send({"succes" : true})
    }else{
        res.send({"succes" : false})
    }
})

app.patch("/dankmemes/:id", (req, res) =>{

    console.log(dankMemes[req.params.id-1].topText);

    if(req.body.hasOwnProperty("topText") === true && req.body.hasOwnProperty("bottomText") === false){
        dankMemes[req.params.id-1] = {topText: req.body.topText, bottomText : dankMemes[req.params.id-1].bottomText}

        res.send({"succes" : true})
    }else if(req.body.hasOwnProperty("bottomText") === true && req.body.hasOwnProperty("topText") === false){
        dankMemes[req.params.id-1] = {topText: dankMemes[req.params.id-1].topText, bottomText : req.body.bottomText}

        res.send({"succes" : true})
    }else if(req.body.hasOwnProperty("topText") === true && req.body.hasOwnProperty("bottomText") === true){
        dankMemes[req.params.id-1] = {topText: req.body.topText,
            bottomText: req.body.bottomText}
        
        res.send({"succes" : true})
    }else{
        res.send({"succes" : false})
    }
})

app.delete("/dankmemes/:id", (req, res) =>{
    dankMemes.splice(req.params.id-1,1)

    res.send({"succes" : true})
})

app.listen(8080)