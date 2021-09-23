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

app.get("/date", (req, res) => {
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    res.send({day: `${weekday[d.getDay()]}, ${new Date().toLocaleString()}`})
})

const cake = require("./cake.json")
console.log(cake)

app.listen(3000);