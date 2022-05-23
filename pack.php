<?php
session_start();
if(!$_SESSION['ingelogd']) {
    header('location: home.php');
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
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" type="text/css" href="./css/pack.css">
</head>

<body>
    <!--body data-->
    <header>
        <!--header data-->
        <img src="./images/Logo.png" id="logo">
        <nav id="nav">
            <a href="shop.php">Webshop</a>
            <a href="pack.php">Pack opening</a>
            <a href="trade.php">Trading</a>
        </nav>
    </header>
    <p>jou packs</p>
    <section id="pack1">

    </section>
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
</body>

</html>