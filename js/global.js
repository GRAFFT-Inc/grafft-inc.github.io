$(function() {
    // scrolly pants
    $(window).on('scroll', function() {
        const pos = $(window).scrollTop();
        if (pos > 100) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});
