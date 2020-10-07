function registeruser(){
    const username = document.getElementById("user_name").value
    const user_age = document.getElementById("user_age").value
   
    if (username && user_age !=null) {
        const item = {
            username: username,
            user_age: user_age,
        }
    console.log(item);
    sessionStorage.setItem(sessionStorage.length, JSON.stringify(item));
    }

    window.location.href = "question1.html"
    
}
    



