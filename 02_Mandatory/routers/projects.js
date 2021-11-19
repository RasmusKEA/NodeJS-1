const router = require("express").Router();

const projects = [
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] }
    
];


router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
