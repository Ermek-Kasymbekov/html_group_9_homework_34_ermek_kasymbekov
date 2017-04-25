$(document).ready(function(){
    $("[data-fancybox]").fancybox({});


});


$(window).scroll(function(){
    if ($(this).scrollTop() > 450) {
        $('.top_menu').addClass('fixed');
    } else {
        $('.top_menu').removeClass('fixed');
    }
});

//
// $(window).scroll(function(){
//     if ($(this).scrollTop() > 300) {
//         $('.top_menu').addClass('fixed');
//     } else {
//         $('.top_menu').removeClass('fixed');
//     }
// });

//
// function scrollToAnchor(aid){
//     var aTag = $("a[name='"+ aid +"']");
//     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
// }
//
// scrollToAnchor('id3');