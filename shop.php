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
    <meta name="description" content="content=content+content=contentcontent-content">

    <!--author data-->
    <meta name="author" content="Levy van der Valk, Socialboosts.nl">

    <!--search words for google-->
    <meta name="keywords" content="socialboosts">

    <!--website title in tab-->
    <title>webshop</title>

    <!--linking a .css page-->
    <link rel="stylesheet" type="text/css" href="./css/shop.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <script src="http://code.jquery.com/jquery-1.11.3.js"></script>
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
    <button class="icona" onclick="showhide()"><img src="./images/CART.png" id="incona1" alt=""></button>
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
    <button id="btn_add1" onclick="">Add</button>
    </section>

    <section class="tez">
    <p>pokemon pack 2</p>
    <p>€15,99</p>
    <button id="btn_add2" onclick="">Add</button>
    </section>

    <section class="tez">
    <p>pokemon pack 3</p>
    <p>€15,99</p>
    <button id="btn_add" onclick="">Add</button>
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
    <script src="" type="text/javascript"></script>
    <!-- pack 3 -->
    <script>var i = 1;  // declare global this variable

function deletePool(obj) { // declare global this function and use the this obj passed
  obj.parentNode.remove(obj);
  i--;
}

$(function () {
  $("#btn_add").on("click",addAnotherPool);

  function addAnotherPool() {
    if (i < 11) {
      var html = '<div><input name="srv[]" id="srv_'+i+'" value="pokemon pack 3" type="text" disabled><button id="btn_del" name="pool_btn_add" onclick="javascript:deletePool(this)">Verwijder</button></div>';
      $("#first_member").append(html);
      i++;
    }
    return false;
  }
});</script>
    <!-- pack 2-->
    <script>var i = 1;  // declare global this variable

function deletePool(obj) { // declare global this function and use the this obj passed
  obj.parentNode.remove(obj);
  i--;
}

$(function () {
  $("#btn_add2").on("click",addAnotherPool);

  function addAnotherPool() {
    if (i < 11) {
      var html = '<div><input name="srv[]" id="srv_'+i+'" value="pokemon pack 2" type="text" disabled><button id="btn_del" name="pool_btn_add" onclick="javascript:deletePool(this)">Verwijder</button></div>';
      $("#first_member").append(html);
      i++;
    }
    return false;
  }
});</script>
    <!-- pack 1-->

    <script>var i = 1;  // declare global this variable

function deletePool(obj) { // declare global this function and use the this obj passed
  obj.parentNode.remove(obj);
  i--;
}

$(function () {
  $("#btn_add1").on("click",addAnotherPool);

  function addAnotherPool() {
    if (i < 11) {
      var html = '<div><input name="srv[]" id="srv_'+i+'" value="pokemon pack 1" type="text" disabled><button id="btn_del" name="pool_btn_add" onclick="javascript:deletePool(this)">Verwijder</button></div>';
      $("#first_member").append(html);
      i++;
    }
    return false;
  }
});</script>



<script>
function showhide() {
  var x = document.getElementById("cartshow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>
<section class="cart" > 
        <div style="display: none;" id="cartshow"><div id="first_member"></div>
    <button>checkout</button></div> 
    </section>
</body>

</html>
