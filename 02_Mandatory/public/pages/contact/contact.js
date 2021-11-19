function sendContactMessage() {
    if(document.getElementById("name").value !== '' && document.getElementById("email").value !== '' && document.getElementById("phone").value !== '' && document.getElementById("subject").value !== '' && document.getElementById("message").value !== ''){
        fetch("/api/contact", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
            })  
        }).then(response => {
            if (response.status === 200) {
                console.log("Everything went well");
                window.alert("Thank you for your email. We will get back to you soon!")
                window.location.href = '/'
            } else {
                console.log("Error sending the contact message", response.status);
            }
        });
    }else{
        window.alert("You need to fill out all fields before sending your email.")
    }

}

document.getElementById("send-button").addEventListener("click", sendContactMessage);