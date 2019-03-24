function Handmade  (name, price, manu, img) {
    this.name = name;
    this.price = price;
    this.manu = manu;
    this.img = img;
}

// Handmade.prototype.img = function () {
//     let img = this.img;
//     return img;
// }

// Handmade.prototype.name = function () {
//     let name = this.name;
//     return name;
// }

// Handmade.prototype.price = function () {
//     let price = this.price;
//     return price;
// }

Handmade.prototype.describe = function () {
    let description = "This is a " + this.name + " gorgeous, unique build for " + this.price + " made by " + this.manu + "."
    return description;
}

let sculptedTable = new Handmade("Sculpted", 2500 , "Jesse Abrahams", '<src="img/hand-sculpted-table.jpg">');
let purse = new Handmade("leather purse", 800 , "Paulo Nicolet", '<src="img/paolo-nicolello-666165-unsplash.jpg" >');

let img = document.getElementById("productOne").innerHTML = sculptedTable.productOne();




// -------- JQuery 

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