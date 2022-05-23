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
    <meta name="author" content="Levy van der Valk, Socialboosts.nl">

    <!--search words for google-->
    <meta name="keywords" content="socialboosts">

    <!--website title in tab-->
    <title>webshop</title>

    <!--linking a .css page-->
    <link rel="stylesheet" type="text/css" href="./css/shop.css">
    <script src="https://kit.fontawesome.com/63f832f2f2.js" crossorigin="anonymous"></script>
</head>

<body>
    <!--body data-->
    <header>
        <!--header data-->
        <img src="./images/logo.png" class="logotje">
        <nav>
            <a href="shop.php">Webshop</a>
            <?php if (isset($_SESSION['ingelogd']) && $_SESSION['ingelogd'] == true){
                echo '<a href="pack.php" id="store">Pack opening</a>';
                echo '<a href="trade.php" id="trade">Trading</a>';
            }
            ?>
        </nav>
    </header>
<section id="felx">
    <section class="box1">
    </section>

    <section class="box2">
    </section>

    <section class="box3">
    </section>
</section>
<section id="felx2">
    <section class="tez">
    <p>pokemon pack 1</p>
    <p>€10,-</p>
    <button>Add</button>
    </section>

    <section class="tez">
    <p>pokemon pack 2</p>
    <p>€15,99</p>
    <button>Add</button>
    </section>

    <section class="tez">
    <p>pokemon pack 3</p>
    <p>€15,99</p>
    <button>Add</button>
    </section>

</section>
<section class="cart">
    <button ><i class="fa-solid fa-basket-shopping"></i></button>
    </section>
    <section class="cart">
    <p> hier zijn alle packs die nu beschrikbaar zijn</p>
    </section> 





    <footer>
    </footer>
    <!--linking a .js file-->
    <script src="" type="text/javascript"></script>
</body>

</html>