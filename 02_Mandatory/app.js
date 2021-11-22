const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Import and use routes */
const projectsRouter = require("./routers/projects.js");
const pagesRouter = require("./routers/pages.js")
const contactRouter = require("./routers/contact.js");
const adminRouter = require("./routers/admin.js")
const loginRouter = require("./routers/login.js")

app.use(projectsRouter.router);
app.use(pagesRouter.router);
app.use(contactRouter.router);
app.use(adminRouter.router);
app.use(loginRouter.router)

const { createPage } = require("./render.js");
const { urlencoded } = require("express");  

/* Read the HTML files */
const frontpagePage = createPage("frontpage/frontpage.html", { 
    title: "Nodefolio | Welcome"
});
const CVPage = createPage("CVPage/CVPage.html");
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");
const loginPage = createPage("login/login.html");
const adminPage = createPage("admin/admin.html");

app.get("/", (req, res) => {
    res.send(frontpagePage);
});


app.get("/cv", (req, res) => {
    res.send(CVPage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.get('/openCV', function(req, res) {
    res.sendFile(__dirname + "/public/assets/CV.pdf");
})

app.get('/login', function(req,res){
    res.send(loginPage)
})

app.get('/admin', function(req, res){
    res.send(adminPage)
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
