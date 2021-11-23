let editID = localStorage.getItem("editID")

fetch(`/api/project/${editID}`)
.then(response => response.json())
.then((result) => {
    document.getElementById("projectname").value = result[0].projectname
    document.getElementById("category").value = result[0].category
    document.getElementById("techs").value = result[0].techs
    document.getElementById("links").value = result[0].links
});

document.getElementById("update-button").addEventListener("click", updateProject)

function updateProject(){
    if(document.getElementById("projectname").value !== '' && document.getElementById("category").value !== '' && document.getElementById("techs").value !== '' && document.getElementById("links").value !== ''){
        fetch(`/api/project/${editID}`, {
            method: "PUT",
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


