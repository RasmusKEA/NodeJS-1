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

        const joinButton = document.createElement("button")
        joinButton.className = "btn btn-primary join-btn "
        joinButton.id = result.idchats
        joinButton.innerHTML = "Join!"
        
        chatDiv.append(joinButton)
        chatWrapperDiv.appendChild(chatDiv);


        joinButton.onclick = function (){
            location.href = `/chat/${result.idchats}`
            localStorage.setItem("editID", result.idprojects)
        }

    });
});

