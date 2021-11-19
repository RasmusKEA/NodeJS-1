fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    const projectsWrapperDiv = document.getElementById("projects-container wrap");
    console.log(projectsWrapperDiv);

    projects.map(project => { 
        const projectDiv = document.createElement("div");
        projectDiv.className = "project-div"
        projectDiv.innerHTML = `
            <h4>${escapeHTML(project.name)}</h4>
            <p>Category: ${escapeHTML(project.category)}</p>
            <p>Technologies: ${escapeHTML(project.technologies.join(", "))}</p>
            <p>Links: ....</p>
        `;
        
        projectsWrapperDiv.appendChild(projectDiv);

    });
});
