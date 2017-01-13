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