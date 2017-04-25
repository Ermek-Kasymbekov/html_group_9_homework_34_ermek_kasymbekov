$(document).ready(function(){
    $("[data-fancybox]").fancybox({});


    $(window).scroll(function(){
        if ($(this).scrollTop() > $('header').height()) {
            $('.top_menu').addClass('fixed');
        } else {
            $('.top_menu').removeClass('fixed');
        }
    });



    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        console.log(id);
        console.log(top);
        $('body,html').animate({scrollTop: top - $('#top_menu').height()}, 1500);
    });



    $('#menu-btn').click(function(){
        $('.menu').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.is-active').addClass('not-active').removeClass('is-active')
            },600)
        }
    });



});


// lToAnchor('id3');



