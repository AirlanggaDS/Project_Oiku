let cart = - document.querySelector(".cart")
localStorage.setItem('product-img', 'value')


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

// Making Function 
function ready() {
    //remove items
    var removeCartButton = document.getElementsByClassName('remove-cart');
    console.log(removeCartButton);
    for (var i = 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }
    //quantity changes
    var quantityInput = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener("change", quantityChange)
    }
    //add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    //order button
    document.getElementsByClassName('order-btn')[0]
    .addEventListener('click',buyButtonClicked);
}

function buyButtonClicked(){
    alert('Your Order is Placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal();
}

function quantityChange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal();
}

//add cart
function addCartClicked(event) {
    var button = event.target;
    var Products = button.parentElement;
    var vartitle = Products.getElementsByClassName('product-title')[0].innerText;
    var varprice = Products.getElementsByClassName('price')[0].innerText;
    var varproductImg = Products.getElementsByClassName('product-img')[0].src;
    addProductToCart(vartitle, varprice, varproductImg);
    updateTotal();
}

function addProductToCart(vartitle, varprice, varproductImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == vartitle) {
            alert("Product added to cart");
            return;
        }
    }

    var cartBoxContent = `
                        <img src="${varproductImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <h2 class="cart-product-title">${vartitle}</h2>
                            <div class="cart-price">${varprice}</div>
                            <input type="number" min="1" value="1" class="cart-quantity">
                        </div>
                        <a class="remove-cart">Remove</a>`;
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click', removeCartItem)
    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChange)
}
//remove item from cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal()
}

//Update total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("Rp", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        document.getElementsByClassName('total-price')[0].innerText = 'Rp' + total;

   
}