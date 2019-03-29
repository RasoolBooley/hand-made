

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

