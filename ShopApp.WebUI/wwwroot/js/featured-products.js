//Take the datas from featuredProducts section and render start

function addToFp() {
    let btnCart = document.getElementsByClassName("btn-cart");

    for(let i=0; i<btnCart.length; i++) {

   
    btnCart[i].addEventListener("click", function (e) {
        let btn = e.target.parentElement;
        let productName=btn.querySelector(".featuredProductName").innerText;
        let productPrice=parseFloat(btn.querySelector(".featuredProductPrice").innerText.replace("$",""));
        let productImage=btn.parentElement.parentElement.parentElement.querySelector(".welcome-hero-img").children[0].src;
       

        var cartItem = document.createElement("li");
        cartItem.classList.add("clearfix");
        var shoppingCartItems = document.getElementsByClassName("shopping-cart-items")[0];

        shoppingCartItems.append(cartItem);
            cartItem.innerHTML = `
            <div>
            <i class="fa fa-minus-circle" onclick="quantityUpdate(event)" aria-hidden="true"></i>
            <input type="text" class="item-quantity" value="1"></input>
            <i class="fa fa-plus-circle" onclick="quantityUpdate(event)" aria-hidden="true"></i>
            </div>
            <img class="item-img" src="${productImage}" alt="item1" />
            <div class="name-div">
            <span class="item-name">${productName}</span>
            </div>  
            <div>
            <span class="item-price">$${productPrice}</span>
            </div>
            <button type="text" id="removeProductFromCart" class="fa fa-times btn float-end removeProduct" aria-hidden="true"></button>
        


        `;
            var sepet = document.querySelector(".sepetValue");
            var sepetValue = parseFloat(sepet.innerText);


            updateCartTotal();

            sepet.innerHTML = sepetValue + 1;

            cartItem.getElementsByClassName("removeProduct")[0].addEventListener("click", removeCartItem);
            cartItem.getElementsByClassName("item-quantity")[0].addEventListener("change", quantityChanged);


            alertify.set('notifier', 'delay', 1);
            alertify.set('notifier', 'position', 'top-center');
            alertify.success('Ürün Sepete Eklendi');
    })

}

}

addToFp();


//Take the datas from featuredProducts section and render end