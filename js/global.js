$(function() {
    // scrolly pants
    $(window).on('scroll load', function() {
        const pos = $(window).scrollTop();
        if (pos > 75) {
            $('header').addClass('scrolled');
            $('section.p1').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
            $('section.p1').removeClass('scrolled');
        }
    });

    // external links should open new window
    $('.favorites ul li a').attr('target', '_blank');

    // do form submit magic
    $('#contactus').on('submit', function() {
        $('.spinner').css('display', 'flex');
        $('#contactus').hide();
        setTimeout(function () {
            $('#contact-form').hide();
            $('#contact-success').css('display', 'block');
        }, 2000);
    });
});
