fetch("/api/chats")
.then(response => response.json())
.then((result) => {
    const chatWrapperDiv = document.getElementById("chat-container wrap");

    result.map(result => { 
        const chatDiv = document.createElement("div");
        chatDiv.className = "chat-div"
        chatDiv.innerHTML = `
            <h4>${result.name}</h4>
            <p>Category: ${result.description}</p>
        `;

        const deleteButton = document.createElement("button")
        deleteButton.className = "btn btn-primary join-btn "
        deleteButton.id = result.idchats
        deleteButton.innerHTML = "Delete"

        const editButton = document.createElement("button")
        editButton.className = "btn btn-primary join-btn "
        editButton.id = result.idchats
        editButton.innerHTML = "Edit"
        
        chatDiv.append(editButton)
        chatDiv.append(deleteButton)
        chatWrapperDiv.appendChild(chatDiv);

        editButton.onclick = function (){
            location.href = '/edit'
            localStorage.setItem("editID", result.idchats)
        }

        deleteButton.onclick = function(){
            fetch(`/api/chats/${result.idchats}`, {
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

