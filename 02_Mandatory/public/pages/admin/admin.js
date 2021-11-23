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

        const deleteButton = document.createElement("button")
        deleteButton.className = "btn btn-primary shadow-none dl-cv delete-button"
        deleteButton.id = result.idprojects
        deleteButton.innerHTML = "Delete"

        projectDiv.append(editButton)
        projectDiv.append(deleteButton)
        projectsWrapperDiv.appendChild(projectDiv);

        editButton.onclick = function (){
            location.href = '/edit'
            localStorage.setItem("editID", result.idprojects)
        }

        deleteButton.onclick = function(){
            fetch(`/api/project/${result.idprojects}`, {
                method: "DELETE"
            }).then(response => {
                if (response.status === 202) {
                    console.log("Everything went well");
                    window.location.href = '/admin'
                } else {
                    console.log("Delete succesful", response.status);
                }
            });
        }
    });
});

document.getElementById("create-button").addEventListener("click", createProject)

function createProject(){
    location.href = '/create'
}


