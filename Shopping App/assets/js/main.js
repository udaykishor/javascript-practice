window.addEventListener("load", initEvent);

function initEvent() {
    showProducts();
    console.log(showProduct());
}

function showProducts() {
    var parent_div = document.querySelector("#products_list");
    product.forEach(function(obj) {
        var childDiv = document.createElement("div");
        childDiv.className = "col-md-3 product card";
        var cardDiv = document.createElement("div");
        cardDiv.className = "card-body";
        var img = document.createElement("img");
        img.src = obj.p_img;
        img.className = "card-img-top";
        var title = document.createElement("h5");
        title.innerHTML = obj.p_name;
        title.className = "card-title";
        var price = document.createElement("h5");
        price.innerHTML = "RS " + obj.p_price;
        var btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        btn.className = "btn btn-primary d-Block";
        btn.title = obj.p_id;
        
        cardDiv.appendChild(title);
        cardDiv.appendChild(price);
        cardDiv.appendChild(btn);
        btn.addEventListener("click",addItem);
        childDiv.appendChild(img);
        childDiv.appendChild(cardDiv);
        
        
        parent_div.appendChild(childDiv);
    })
}
function addItem() {
    var p_id = event.srcElement.title;
    products.forEach(function(x) {
        if(x.p_id==p_id) {
            object.addToCart(x.p_id, x.p_name, x.p_brand, x.p_category, x.p_price, x.p_img);
        }
    })
}