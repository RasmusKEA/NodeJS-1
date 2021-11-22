fetch("/api/projects")
.then(response => response.json())
.then((result) => {
    const projectsWrapperDiv = document.getElementById("projects-container wrap");

    result.map(result => { 
        const projectDiv = document.createElement("div");
        
        projectDiv.className = "project-div"
        projectDiv.innerHTML = `
            <h4>${escapeHTML(result.projectname)}</h4>
            <p>Category: ${escapeHTML(result.category)}</p>
            <p>Technologies: ${escapeHTML(result.techs)}</p>
            <p>Link: <a href="https://${result.links}">${escapeHTML(result.links)}</a></p>
        `;

        const editButton = document.createElement("button")
        editButton.className = "btn btn-primary shadow-none dl-cv edit-button"
        editButton.id = result.idprojects
        editButton.innerHTML = "Edit"

        projectDiv.append(editButton)

        
        projectsWrapperDiv.appendChild(projectDiv);

    });
});
