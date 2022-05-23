<?php
    $error = "";
    if (isset($_POST['submit'])) {
        if (!empty($_POST['username']) && !empty($_POST['password'])) {
    
            require("dbconnect.php");
    
            $sql = "SELECT * FROM gebruikers WHERE username = '".trim($_POST['username'])."' AND password = '".trim($_POST['password'])."'";
    
            if ($result = $conn->query($sql)) {
                $aantal = $result->num_rows;
                if ($aantal == 1) {
                    session_start();
                    $_SESSION['ingelogd'] = true;
                    $_SESSION['username'] = $_POST['username'];
                    header("location: ingelogd.php");
                } else {
                    $error = "niet de juiste gegevens ingevuld";
                }
            } 
        } else {
            $error = "vul de velden in";
        }
    }
?>
<!doctype html>
<html>

<head>
    <!--meta data-->
    <!--usable characters for the website-->
    <meta charset="utf-8">

    <!--language of the page-->
    <meta http-equiv="language" content="NL">

    <!--display settings-->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--website description-->
    <meta name="description" content="">

    <!--author data-->
    <meta name="author" content="Levy van der Valk">

    <!--search words for google-->
    <meta name="keywords" content="">

    <!--website title in tab-->
    <title>pack opening</title>

    <!--linking a .css page-->
    <link rel="stylesheet" type="text/css" href="./css/inlog.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css">

</head>

<body>
    <!--body data-->
    <header>
        <!--header data-->
        <img src="./images/logo.png" class="logotje">
        <nav>
            <a href="shop.php">Webshop</a>
            <?php if (isset($_SESSION['ingelogd']) && $_SESSION['ingelogd'] == true){
                echo '<a href="pack.php">Pack opening</a>';
                echo '<a href="trade.php">Trading</a>';
            }
            ?>
        </nav>
    </header>
    <form method="post">
        <?php echo $error ?>
        <input type="text" name="username" id="user" required placeholder="vul hier je gebruikersnaam">
        <input type="password" name="password" id="pass" required placeholder="vul hier je wachtwoord in">
        <input type="submit" name="submit" id="submit">
    </form>
    <footer>
        <!--footer data-->
        <img src="./images/logo.png" id="foot-img">
        <p id="copy"><b>COPYRIGHT POKESHOP 2022</b></p>
        <article class="icons">
        <img src="./images/Laag 4.png">
        <img src="./images/Laag 3.png">
        <img src="./images/Laag 2.png">
        </artcile>
    </footer>
    <!--linking a .js file-->
    <script src="" type="text/javascript"></script>    
    <p class="inloggen">Inloggen</p>

</body>

</html>