

// ---------------------


function Handmade  (name, price, manu, img) {
    this.name = name;
    this.price = "R" + price;
    this.manu = manu;
    this.img = img;
}

Handmade.prototype.describe = function () {
    let describe = "This is a " + this.name + " gorgeous, unique design for " + this.price + " made by " + this.manu + "."
    return describe;
}

let sculptedTable = new Handmade("Sculpted Table", 2500 , "Jesse Abrahams", '<img src="img/hand-sculpted-table.jpg">');
    purse = new Handmade("Leather Purse", 800 , "Paulo Nicolet", '<img src="img/paolo-nicolello-666165-unsplash.jpg" >');
    pFlowers = new Handmade("Paper Flowers", 50 , "Jess Khume", '<img src="img/DSCF5234.jpg" >');
    knittedBlanket = new Handmade("Knitted Blanket", 600 , "Jesse Abrahams", '<img src="img/knitted-blanket.jpg" >');


    // shop content

// sculpted table
let name = document.getElementById('product-one-text');
    name.innerHTML = sculptedTable.describe();

    name = document.getElementById('product-one-header')
    name.innerHTML = sculptedTable.name;

    price = document.getElementById('product-one-price');
    price.innerHTML = sculptedTable.price;

    img = document.getElementById('product-one-img');
    img.innerHTML = sculptedTable.img;


// purse
    name = document.getElementById('product-two-text');
    name.innerHTML = purse.describe();

    name = document.getElementById('product-two-header');
    name.innerHTML = purse.name;

    price = document.getElementById('product-two-price');
    price.innerHTML = purse.price;

    img = document.getElementById('product-two-img');
    img.innerHTML = purse.img;

// paper flowers
    name = document.getElementById('product-three-text');
    name.innerHTML = pFlowers.describe();

    name = document.getElementById('product-three-header');
    name.innerHTML = pFlowers.name;

    price = document.getElementById('product-three-price');
    price.innerHTML = pFlowers.price;

    img = document.getElementById('product-three-img');
    img.innerHTML = pFlowers.img;

// Knitted blanket
    name = document.getElementById('product-four-text');
    name.innerHTML = knittedBlanket.describe();

    name = document.getElementById('product-four-header');
    name.innerHTML = knittedBlanket.name;

    price = document.getElementById('product-four-price');
    price.innerHTML = knittedBlanket.price;

    img = document.getElementById('product-four-img');
    img.innerHTML = knittedBlanket.img;


$(function () {

    var goToCartIcon = function($addTocartBtn){
        var $cartIcon = $(".my-cart-icon");
        var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
        $addTocartBtn.prepend($image);
        var position = $cartIcon.position();
        $image.animate({
        top: position.top,
        left: position.left
        }, 500 , "linear", function() {
        $image.remove();
        });
    }

$('.my-cart-btn').myCart({
    currencySymbol: 'R',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',
    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 2,
    cartItems: [],
    clickOnAddToCart: function($addTocart){
    goToCartIcon($addTocart);
    },

    afterAddOnCart: function(products, totalPrice, totalQuantity) {
    console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },

    clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
    console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
    },

    checkoutCart: function(products, totalPrice, totalQuantity) {
    var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
    checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
    $.each(products, function(){
        checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
    });

    alert(checkoutString)
    console.log("checking out", products, totalPrice, totalQuantity);
    },
});

$("#addNewProduct").click(function(event) {
    var currentElementNo = $(".row").children().length + 1;
    $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
});
});

