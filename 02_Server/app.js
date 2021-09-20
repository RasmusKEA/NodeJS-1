const app = require("express")();

app.get("/", (req, res) => {
    res.sendFile("/Users/rasmus/Desktop/NodeJS-1/02_Server/memes/1.jpeg");
});

app.get("/random", (req, res) => {
    let rnd = Math.floor(Math.random()*8)
    console.log(rnd)
    path = `/Users/rasmus/Desktop/NodeJS-1/02_Server/memes/${rnd}.jpeg`

    res.sendFile(path)
})

app.get("/number/:number", (req, res) => {
    res.sendFile(`/Users/rasmus/Desktop/NodeJS-1/02_Server/memes/${req.params.number}.jpeg`)
})

app.listen(3000);