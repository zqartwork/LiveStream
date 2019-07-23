let stickyNav = function () {
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    })
}