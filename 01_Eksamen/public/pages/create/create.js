document.getElementById("create-button").addEventListener("click", createChat)

function createChat(){
    if(document.getElementById("name").value !== '' && document.getElementById("description").value !== '' ){
        fetch(`/api/chats`, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                description: document.getElementById("description").value
            })  
        }).then(response => {
            if (response.status === 200) {
                console.log("Everything went well");
                window.location.href = '/admin'
            } else {
                console.log("Update succesful", response.status);
            }
        });
    }else{
        window.alert("You need to fill out all fields before applying changes.")
    }
}