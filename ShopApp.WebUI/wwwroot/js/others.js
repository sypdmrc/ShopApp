$(document).ready(function () {


    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '250');
    });

    
    $("#shoppingCart").on("mouseenter", function () {
        $(".shopping-cart").show("fast");
    }).on("mouseleave", function () {
        $(".shopping-cart").hide("fast");
    });



    $(".backToShop").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
    });


    $(".fa-heart-o").on("click", function () {
        $(this).toggleClass("fa-heart-o").toggleClass("fa-heart")
    })



})

