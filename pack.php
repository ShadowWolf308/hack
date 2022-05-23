<?php
session_start();
// if(!$_SESSION['ingelogd']) {
//     header('location: home.php');
// }
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
    <section id="box">
        <section id="pack1">
            <button id="pack1img">
                <img src="./images/pack1.jpg" class="packimg">
            </button>
        </section>
        <section id="pack2">
            <button id="pack2img">
                <img src="./images/pack2.jpg" class="packimg">
            </button>
        </section>
        <section id="pack3">
            <button id="pack3img">
                <img src="./images/pack3.jpg" class="packimg">
            </button>
        </section>
    </section>
    <section id="box2">
        <section>
            <article>
                <span id="pokeName1">bulbasaur</span> <br>
                <span id="pokeType1">grass & poison</span> <br>
            </article>
            <article>
                <span id="pokeName2">bulbasaur</span> <br>
                <span id="pokeType2">grass & poison</span> <br>
            </article>
            <article>
                <span id="pokeName3">bulbasaur</span> <br>
                <span id="pokeType3">grass & poison</span> <br>
            </article>
            <article>
                <span id="pokeName4">bulbasaur</span> <br>
                <span id="pokeType4">grass & poison</span> <br>
            </article>
        </section>
        <section>
            <article>
                <span id="pokeName5">bulbasaur</span> <br>
                <span id="pokeType5">grass & poison</span> <br>
            </article>
            <article>
                <span id="pokeName6">bulbasaur</span> <br>
                <span id="pokeType6">grass & poison</span> <br>
            </article>
            <article>
                <span id="pokeName7">bulbasaur</span> <br>
                <span id="pokeType7">grass & poison</span> <br>
            </article>
        </section>
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
    <script src="./js/index.js" type="text/javascript"></script>
</body>

</html>