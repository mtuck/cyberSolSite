//jQuery to collapse the navbar on scroll?
/*
$(window).scroll(function () {
    if ($(".navbar-fixed-top").offset().top > 50) {

        $(".navbar-fixed-top").addClass("navbar-dark");
        $(".navbar-fixed-top").removeClass("navbar-light");
    } else {

        $(".navbar-fixed-top").removeClass("navbar-dark");
        $(".navbar-fixed-top").addClass("navbar-light");
    }
});
*/

$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop + 500 < windowBottom ) {
                if ( objectTop < windowBottom - animation_height  ) {

                    $(this).css( {
                        transition: 'opacity 0.5s linear',
                        opacity: 1
                    } );

                } else {

                    $(this).css( {
                        transition: 'opacity 0.5s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {

                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});