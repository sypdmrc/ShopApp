const cartBtn = document.querySelectorAll(".store-item-icon");



if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

// Event Listeners Start

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

    var addToCartButtons = document.getElementsByClassName("store-item-icon");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", iconClicked);
    }

    let clearBtn = document.querySelector(".clearBasket");

    clearBtn.addEventListener("click", clearBasket);


}

// Event Listeners end



//Take the datas from html and render start

function iconClicked(event) {

    if (event.target.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.children[0].src;
        

        let pos = fullPath.indexOf("img").src;
        let partPath = fullPath.slice(pos);

        const item = {};
        item.image = `${partPath}`;

        let name = event.target.nextElementSibling.children[0].textContent;
        item.name = name;
        let price = event.target.nextElementSibling.children[1].textContent;
        let finalPrice = parseFloat(price.replace("$", ""));
        item.price = finalPrice;


        var cartItem = document.createElement("li");
        cartItem.classList.add("clearfix");

        var shoppingCartItems = document.getElementsByClassName("shopping-cart-items")[0];
        let interim = event.target.parentElement.parentElement.querySelector(".card-body");
        let result = interim.querySelector(".card-title").innerText;
        let clearfixAdet = shoppingCartItems.getElementsByClassName("clearfix");


        // cartItem.querySelector(".item-name").innerText == result
        if (false) {


        } else {
            shoppingCartItems.append(cartItem);
            cartItem.innerHTML = `
            <div>
            <i class="fa fa-minus-circle" onclick="quantityUpdate(event)" aria-hidden="true"></i>
            <input type="text" class="item-quantity" value="1"></input>
            <i class="fa fa-plus-circle" onclick="quantityUpdate(event)" aria-hidden="true"></i>
            </div>
            <img class="item-img" src="${item.image}" alt="item1" />
            <div class="name-div">
            <span class="item-name">${item.name}</span>
            </div>  
            <div>
            <span class="item-price">$${item.price}</span>
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

        }



    }

}


//Take the datas from html and render end


// Quantity change start

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

// Quantity change end

//Delete item start

function removeCartItem(event) {
    var buttonClicked = event.target;
    var sepet = document.querySelector(".sepetValue");
    var sepetValue = parseFloat(sepet.innerText);

    buttonClicked.parentElement.remove();
    updateCartTotal();
    sepet.innerHTML = sepetValue - 1;
}

//Delete item end


//Update cart total start

function updateCartTotal() {

    var shoppingCartItems = document.querySelector(".shopping-cart-items");
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

//Update cart total end


//Delete all basket start

function clearBasket(event) {

    let btn = event.target;
    let parent = btn.parentElement.parentElement;
    let clearList = parent.children[0];
    var sepet = document.querySelector(".sepetValue");
    
    var shoppingCartItems = document.querySelector(".shopping-cart-items");
 
    var cartItems = shoppingCartItems.getElementsByClassName("clearfix")[0];
  
    if (cartItems) {

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'

                )
                clearList.innerHTML = "";
                updateCartTotal();

                sepet.innerHTML = 0;
            }
        })

    }

}

//Delete all basket end


//Quantity Update start

function quantityUpdate(event) {
    let iconBtn = event.target;
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

//Quantity Update end