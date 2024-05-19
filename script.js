$(document).ready(function() {
    $('.add-to-cart').on('click', function() {
        var $item = $(this).closest('.menu-item');
        var name = $item.find('.menu-card-title').text();
        var price = parseFloat($item.find('.menu-item-price').text().slice(1));
        addItemToCart(name, price);
        updateCartTotal();
    });

    function addItemToCart(name, price) {
        var listItem = '<li class="list-group-item">' + name + ' - ₹' + price.toFixed(2) + ' <button class="remove-item btn btn-sm btn-danger">Remove</button></li>';
        $('#cartItemsList').append(listItem);
    }

    function updateCartTotal() {
        var total = 0;
        var quantity = 0;
        $('#cartItemsList li').each(function() {
            var price = parseFloat($(this).text().split('₹')[1]);
            total += price;
            quantity++;
        });
        $('#cartTotal').text(total.toFixed(2));
        $('#cartQuantity').text(quantity);
    }

    $('.close-sidebar').on('click', function() {
        $('.cart-sidebar').removeClass('open');
    });

    $('#cartItemsList').on('click', '.remove-item', function() {
        $(this).parent().remove();
        updateCartTotal();
    });

    $('#checkoutForm').on('submit', function(event) {
        event.preventDefault();
        alert('Order placed successfully!');
        $('#checkoutModal').modal('hide');
        $('#cartItemsList').empty();
        updateCartTotal();
    });

    // Open cart sidebar
    $('.navbar-nav .nav-link[href="#cart-section"]').on('click', function() {
        $('.cart-sidebar').addClass('open');
    });
});
