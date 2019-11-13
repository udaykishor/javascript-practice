window.addEventListener("load", initEvent);

function initEvent() {
    showProducts();
}

function showProducts() {
    var parent_div = document.querySelector("#products_list");
    products.forEach(function(obj) {
        var childDiv = document.createElement("div");
        childDiv.className = "col-md-3 product card";
        var img = document.createElement("img");
        img.src = obj.p_img;
        img.className = "card-img-top";
        var cardDiv = document.createElement("div");
        cardDiv.className = "card-body";
        var title = document.createElement("h5");
        title.innerHTML = obj.p_name;
        h5.className = "card-title";
        var price = document.createElement("h5");
        price.innerHTML = "RS " + obj.p_price;
        var btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        btn.className = "btn btn-primary d-Block";
        
        cardDiv.appendChild(title);
        cardDiv.appendChild(price);
        cardDiv.appendChild(btn);
        btn.addEventListener("click",addItem);

        childDiv.appendChild(img);
        childDiv.appendChild(cardDiv);
        
        parent_div.appendChild(childDiv);
    })
}