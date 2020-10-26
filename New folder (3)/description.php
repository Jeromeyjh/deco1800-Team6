<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crime Description</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/strip.css">
	<link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">     
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Piazzolla&display=swap" rel="stylesheet">
    <script src="js/script2.js"></script>
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


    <div class="container1">
        <h1>Crime Description</h1>
        
        <p>Robbery is the crime of taking or attempting to take anything of value by force, threat of force, or by putting the victim in fear. Robbery is defined as taking the property of another, with the intent to permanently deprive the person of that property, by means of force or fear; that is, it is theft accomplished by an assault</p>

        <section id="records">

            <table id ="table">
                <tr>
                    <th>ID</th>
                    <th>Region</th>
                    <th>Date</th>
                    <th>No.Of Cases</th>

    
                </tr>
            </table>
        </section>
        
        <a href="question1.php"><button  onclick="registeruser()" class="start">Restart Quiz</button></a>
        <a href="home.php"><button  onclick="registeruser()" class="start">Home</button></a>
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

<script src="/script.js"></script>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/strip.pkgd.min.js"></script>
<script src="js/script2.js"></script>
</html>