
function addItem(item) {

    var tempCart = JSON.parse(localStorage.getItem('cart'));

    if (tempCart.filter((obj) => obj.name === item.name).length === 0) {
        item.count = 1;
        tempCart.push(item);
    } else {
        var index = tempCart.map(function(e) {return e.name;}).indexOf(item.name);

        tempCart[index].count += 1; 
    }

    localStorage.setItem('cart', JSON.stringify(tempCart));

    console.log(localStorage.getItem('cart'));
}

function showCart() {

    console.log(localStorage.getItem('cart'));

}

function modifyQty(index, qty) {
    var cart = JSON.parse(localStorage.getItem('cart'));

    cart[index].count = qty;

    localStorage.setItem('cart', JSON.stringify(cart));

    location.reload();
}

function loadCart() {
    var cart = document.getElementById('cart-content');

    var cartData = JSON.parse(localStorage.getItem('cart'));

    if (cartData.length != 0) {
            
        for (key in cartData) {

            var name = cartData[key].name;

            cart.insertAdjacentHTML("afterend", `
            <div class="cart-box"><img src="${cartData[key].image}" alt="" class="cart-img">
            <div class="detail-box">
            <h2 class="cart-product-title">${name}</h2>
            <div class="cart-price">${cartData[key].price}</div>
            <input type="number" min="1" value="${cartData[key].count}" onchange="modifyQty(${key}, this.value)" class="cart-quantity"></div>
            <a class="remove-cart" onclick="removeCartItem(${key})">Remove</a></div>`)
        }
        
    }
}

function removeCartItem(index) {

    var cart = [];

    var cartData = JSON.parse(localStorage.getItem('cart'));

    for (const key in cartData) {
        if (key != index) {
            cart.push(cartData[key]);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'));

    location.reload();
}

function loadCartTotal() {

    var cart = JSON.parse(localStorage.getItem('cart'));

    var total = 0;

    for (const key in cart) {
        total = total + cart[key].price * cart[key].count;
    }

    document.getElementById('total-price').innerHTML = total;
}

function load() {
    loadCart();
    loadCartTotal();
}


