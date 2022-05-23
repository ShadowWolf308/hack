<?php
    $error = "";
    if (isset($_POST['submit'])) {
        if (!empty($_POST['username']) && !empty($_POST['password']) && !empty($_POST['email'])) {
            require('dbconnect.php');
            $sql = "INSERT INTO gebruikers (username,password,email) VALUES ('".trim($_POST['username'])."','".trim($_POST['password'])."','".trim($_POST['email'])."')";
            if ($conn->query($sql) === false) {
                die("Error: " . $sql . "<br>" . $conn->error);
            }
            session_start();
            $_SESSION['ingelogd'] = true;
            $_SESSION['user'] = $_POST['username'];
            header('location: ingelogd.php');
        } else {
            $error = "vul de velden in!";
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
    <link rel="stylesheet" type="text/css" href="">
</head>

<body>
    <!--body data-->
    <header>
        <!--header data-->
        <img src="./images/Logo.png">
        <nav>
            <a href="shop.php">Webshop</a>
        </nav>
    </header>
    <form method="post">
        <?php echo $error ?>
        <input type="text" name="username" id="user" required placeholder="vul hier je gebruikersnaam">
        <input type="email" name="email" id="mail" required placeholder="vul hier je e-mail in">
        <input type="password" name="password" id="pass" required placeholder="vul hier je wachtwoord in">
        <input type="submit" name="submit" id="submit">
        </form>
    <footer>
        <!--footer data-->

    </footer>
    <!--linking a .js file-->
    <script src="" type="text/javascript"></script>
</body>

</html>