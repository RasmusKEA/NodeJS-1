function registerUser() {
    if(document.getElementById("username").value !== '' && document.getElementById("password1").value !== '' && document.getElementById("password2").value !== ''){
        if(document.getElementById("password1").value === document.getElementById("password2").value){
            fetch("/api/register", {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    username: document.getElementById("username").value,
                    password: document.getElementById("password1").value
                })  
            }).then(response => {
                if (response.status === 200) {
                    window.location = '/'
                } 
            });
        }else{
            window.alert("Passwords does not match.")
        }

    }else{
        window.alert("You need to fill out all fields before trying to login")
    }

}   

document.getElementById("send-button").addEventListener("click", registerUser)