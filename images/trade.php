<?php

?>
<!doctype html>
<html>
<head>
    <!--meta data-->
    <meta charset="utf-8">
    <meta http-equiv="language" content="NL">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Levy van der Valk">
    <meta name="keywords" content="">
    <title>trading</title>
    <link rel="stylesheet" type="text/css" href="css/tradecss.css">
</head>

<body>
    <!--body data-->
    <header>
        <!--header data-->
        <img src="./images/logo.png" id="logo">
        <nav>
            <a class="nav" href="shop.php">Webshop</a>
            <a class="nav" href="pack.php">Pack opening</a>
            <a class="nav" href="trade.php">Trading</a>
        </nav>
    </header>

    <section id="tradingsystem">
        <article id="your-cards">
            <article id="text1">
                <h1>your cards:</h1>
                <a id="add" onClick="addcard()">add</a>
            </artcile>
            <article id="cards">
                <img id="kaarten" src="images/cards.jpg">
            </artcile>
            <a id="trade" onClick="trade()">trade</a>
        </article>
    </section>

    <section id="rest">
        <section id="friend">
            <article class="art1">
                <p>recente trades</p>
                <article class="block"><p>empty</p></article>
            </article>
            <article class="art1">
                <p>friends</p>
                <article class="block"><p>empty</p></article>
            </article>
        </section>
    </section>

    <section id="jouw-kaarten">
        <p>jouw kaarten</p>
        <article class="block2"><p>empty</p></article>
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

<script>
document.getElementById('kaarten').style.display= 'none';
function addcard(){
    document.getElementById('kaarten').style.display= 'block';
}

function trade(){
    document.getElementById('kaarten').style.display= 'none';
}
</script>