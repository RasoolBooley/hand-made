// lookbook lightbox

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});

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

    // cart functionality

    'use strict'

// let items = document.getElementsByClassName('item');
// console.log(items);

let cart = [
    // {name: name, price: price},
];

function addCart(name, price) {

    // create item
    let item = {
        name: name,
        price: price,
    };

    // check if the array is empty
    if(cart.length != 0) {
        // search an item in an array
        let check = false;
        for (let cartItem in cart) {
            if(cart[cartItem].name === item.name) {
                check = true;
        }
    }

    // if check returns false, item was not found in the array.
    if(!check) {cart.push(item) }

    // else push to array
    } else {
        cart.push(item);
}


    // get cart div
    let div = document.getElementById('cart');
    // clear cart
    div.innerHTML = "";

    // show cart with updated array

    for (let value in cart) {


        // Create a <li> node
        let node = document.createElement("LI");
        // Create a text node
        let textnode = document.createTextNode(cart[value].name);

        // Append the text to <li>
        node.appendChild(textnode);

        // Append <li> to <ul> with id="myList"
        div.appendChild(node);
        }
    }

// STILL TO DO
// remove item from cart
// write a function that calculates the total of the cart
// add a quantity to cart items
// be able to increase and decrease the quantity
// REMEMBER the cart total must update as the quantity changes




    
