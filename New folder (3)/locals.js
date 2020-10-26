function registeruser(){
    const username = document.getElementById("user_name").value
    const user_age = document.getElementById("user_age").value
   
    if (username && user_age !=null) {
        sessionStorage.setItem("username", JSON.stringify(username));
    }

    window.location.href = "question1.html"
    var name = JSON.parse(sessionStorage.getItem("username"))
    document.getElementById("question").innerHTML = name
    
}
    



