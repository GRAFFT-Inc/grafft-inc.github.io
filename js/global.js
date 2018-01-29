$(function() {
    // scrolly pants
    $(window).on('scroll', function() {
        const pos = $(window).scrollTop();
        if (pos > 75) {
            $('header').addClass('scrolled');
            $('section.p1').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
            $('section.p1').removeClass('scrolled');
        }
    });
});
