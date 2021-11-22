fetch("/api/projects")
.then(response => response.json())
.then((result) => {
    const projectsWrapperDiv = document.getElementById("projects-container wrap");
    console.log(projectsWrapperDiv);

    result.map(result => { 
        const projectDiv = document.createElement("div");
        projectDiv.className = "project-div"
        projectDiv.innerHTML = `
            <h4>${escapeHTML(result.projectname)}</h4>
            <p>Category: ${escapeHTML(result.category)}</p>
            <p>Technologies: ${escapeHTML(result.techs)}</p>
            <p>Link: <a href="https://${result.links}">${escapeHTML(result.links)}</a></p>
        `;
        
        projectsWrapperDiv.appendChild(projectDiv);

    });
});
