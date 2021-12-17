function loginUser() {
    if(document.getElementById("username").value !== '' && document.getElementById("password").value !== ''){
        fetch("/api/login", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })  
        }).then(response => {
            if (response.status === 200) {
                if(document.getElementById("username").value === 'admin'){
                    window.location = '/admin'
                }else{
                window.location = '/'
                localStorage.setItem("username", document.getElementById("username").value)
                }
            } else {
                window.alert("Wrong username/password. Please try again")
                console.log("Error logging in", response.status);
            }
        });
    }else{
        window.alert("You need to fill out all fields before trying to login")
    }

}   

document.getElementById("send-button").addEventListener("click", loginUser)