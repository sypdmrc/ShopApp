if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

// Event listeners start

function ready() {
    var removeProductFromCart = document.getElementsByClassName("removeProduct");

    for (var i = 0; i < removeProductFromCart.length; i++) {
        var button = removeProductFromCart[i];
        button.addEventListener("click", removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName("item-quantity")

    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName("addToCart");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    }



}

// Event listeners end


// Take the datas from trend products carousel start

function addToCartClicked(event) {
    var button = event.target;
    var carouselItem = button.parentElement.parentElement;
    var name = carouselItem.getElementsByClassName("carousel-name")[0].innerText;
    var price = parseFloat(carouselItem.getElementsByClassName("carousel-price")[0].innerText.replace("$", ""));
    var image = carouselItem.getElementsByClassName("carouselImg")[0].src;

    var sepet = document.querySelector(".sepetValue");
    var sepetValue = parseFloat(sepet.innerText);


    addProductToCart(name, price, image);
    updateCartTotal();

    sepet.innerHTML = sepetValue + 1;
}

// Take the datas from trend products carousel end


//Create item and render start

function addProductToCart(name, price, image) {
    var cartItem = document.createElement("li");
    cartItem.classList.add("clearfix");

    var shoppingCartItems = document.getElementsByClassName("shopping-cart-items")[0];

    var html = `
        
            <div>
            <i class="fa fa-minus-circle" onclick="quantityUpdate(event)" aria-hidden="true"></i>
            <input type="text" class="item-quantity" value="1"></input>
            <i class="fa fa-plus-circle" onclick="quantityUpdate(event)" aria-hidden="true"></i>
            </div>
            <img src="${image}" alt="item1" />
            <div>
            <span class="item-name">${name}</span>
            </div>
            <div>
            <span class="item-price">$${price}</span>
            </div>
            <button type="text" id="removeProductFromCart" class="fa fa-times btn float-end removeProduct" aria-hidden="true"></button>
        
       `;

    cartItem.innerHTML = html;
    shoppingCartItems.append(cartItem)

    alertify.set('notifier','delay', 1);
    alertify.set('notifier','position', 'top-center');
    alertify.success('Ürün Sepete Eklendi');

    cartItem.getElementsByClassName("removeProduct")[0].addEventListener("click", removeCartItem);
    cartItem.getElementsByClassName("item-quantity")[0].addEventListener("change", quantityChanged);




}

//Create item and render end


// Quantity change start

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

// Quantity change end


//Remove item start

function removeCartItem(event) {
    var buttonClicked = event.target;
    var sepet = document.querySelector(".sepetValue");
    var sepetValue = parseFloat(sepet.innerText);

    buttonClicked.parentElement.remove();
    updateCartTotal();
    sepet.innerHTML = sepetValue - 1;
}

//Remove item end


//Upgrade cart total price start

function updateCartTotal() {

    var shoppingCartItems = document.getElementsByClassName("shopping-cart-items")[0];
    var cartItems = shoppingCartItems.getElementsByClassName("clearfix");
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];

        var priceElement = cartItem.getElementsByClassName("item-price")[0];
        var quantityElement = cartItem.getElementsByClassName("item-quantity")[0];

        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;

        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = total;

}


//Upgrade cart total price start


//Quantity update start

function quantityUpdate(event) {
    let iconBtn=event.target;
    let clearfix = event.target.parentElement;
    
    let itemQuantity = clearfix.querySelector(".item-quantity");
    let quantityValue = parseInt(itemQuantity.value);


    if (iconBtn.classList.contains("fa-minus-circle")) {
        if (quantityValue == 1) {
            return
        } else {

            quantityValue -= 1;

            itemQuantity.value = quantityValue;


            updateCartTotal();

        }

    }

    if (iconBtn.classList.contains("fa-plus-circle")) {


        quantityValue += 1;

        itemQuantity.value = quantityValue;



        updateCartTotal();

    }




}

//Quantity update end