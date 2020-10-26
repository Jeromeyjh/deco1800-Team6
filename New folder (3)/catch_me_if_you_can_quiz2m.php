<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
        <title>Catch me if you can</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="deco1800male.css">
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Piazzolla&display=swap" rel="stylesheet">
        <script src="locals.js"> </script>
    </head>
    <body>
        
        <div class = "the_header">
            <img class = "logo" src="logo3.png" alt="Developers Inc.">
            <h1>Catch me if you can!</h1>
            <div class = "navbar">
                <a href="catch_me_if_you_can_quize.php">Quiz</a>
                <a href="info.php">Information</a>
                <a href="home.php">Home</a>
            </div>
            <h5>The fun and interactive way to learn about crime!</h5>
        </div>
    
        
        <div class="container">
            <h1 class='title'>Please Enter Information</h1>
            <section>
                <img src="Capture.png" alt="photo for male " class="person">
                <div  class="userinput">
                    <label for="Uname">Name</label>
                    <br>
                    <input type="text" id="user_name" placeholder="Enter your Name" name="Uname">
                    <br>
                    
                    <label for="Uage">Age</label>
                    <br>
                    <input type="number" id="user_age" placeholder="Enter your Age" name="Uage">
                    <br>
                </div>
           
            </section>
            <a href="question1.php"><button  onclick="registeruser()" class="start">Start</button></a>
        <script src="locals.js"> </script>
               
                

            </div>
            
        
    <div class = "footer">
        <div class = "footer1">
            <h2>Catch me if you can!</h2>
            <p>&copy  Developers inc. 2020</p>
            <img class = "logo" src="logo3.png" alt="Developers Inc.">
           
        </div>
    
        <div class = "footer2">
            <ul> 
              <li><a href="home.php">Home</a></li>     
              <li><a href="info.php">Information</a></li>   
              <li><a href="catch_me_if_you_can_quize.php">Quiz</a></li>     
            </ul>
        </div>
    
        <div class = "footer3"> 
            <p class = findus>Find us on Social Media:</p>
            <img class = "social_media" src = "social media.png" alt = "social media links"></div>
            <!----https://pixabay.com/illustrations/social-networks-icons-twitter-like-1863613/</p>-->
        </div>



    
        
        </body>



    </html>