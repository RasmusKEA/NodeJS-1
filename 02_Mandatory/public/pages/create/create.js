document.getElementById("create-button").addEventListener("click", createProject)

function createProject(){
    if(document.getElementById("projectname").value !== '' && document.getElementById("category").value !== '' && document.getElementById("techs").value !== '' && document.getElementById("links").value !== ''){
        fetch(`/api/project`, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                projectname: document.getElementById("projectname").value,
                category: document.getElementById("category").value,
                techs: document.getElementById("techs").value,
                links: document.getElementById("links").value,
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