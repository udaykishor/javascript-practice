class Cart {
constructor(id, name, brand, cat, price, img) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.cat = cat;
    this.price = price;
    this.img = img;
}
}
var object= {
    "cartList": [],
    "addToCart": function(id, name, brand, cat, price, img) {
        var obj= new Cart(id, name, brand, cat, price, img);
        this.cartList.push(obj);
    }

}