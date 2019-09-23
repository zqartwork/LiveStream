let stickyNav = function () {
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('nav').addClass('sticky');
            $('.app_pre_panel').slideUp();
            $('.app_fix_panel').animate({
                'bottom': '14px'
            }, 1000)
            setTimeout(function () {
                $('.app_fix_panel').addClass('shrink');
            }, 3000)
        }
        else {
            $('nav').removeClass('sticky');
        }
    })
}
let selectCustom = function () {
    let cs = $('.custom_select');
    let csMenu = $('.select_menu');
    let csMenuOpt = $('.select_menu li')

    cs.click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).children('.select_menu').slideToggle(300);
    })
    cs.focusout(function () {
        $(this).removeClass('active');
        $(this).children('.select_menu').slideUp(300);
    })
    csMenuOpt.click(function () {
        $(this).parents('.custom_select').find('.selected').text($(this).text());
        $(this).parents('.custom_select').find('#data_input').attr('value', $(this).attr('id'));
    })
}
let activeTag = function () {
    let target = $('.filter_tag');
    let targetProgram = $('.program-type');

    target.click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
    })
    target.focusout(function () {
        $(this).removeClass('active');
    })
    targetProgram.click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
    })
    targetProgram.focusout(function () {
        $(this).removeClass('active');
    })
}
let madeCarousel = function () {
    $('.program-carousel').owlCarousel({
        dots: false,
        autoWidth: true,
        nav: true,
        navText: ["<i class='material-icons arr'>chevron_left</i>", "<i class='material-icons arr'>chevron_right</i>"]
    });
    $('.matchlist-carousel').owlCarousel({
        dots: false,
        autoWidth: true,
        loop: true,
        nav: true,
        margin: 20,
        navText: ["<i class='material-icons arr'>chevron_left</i>", "<i class='material-icons arr'>chevron_right</i>"],
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
            },
            500: {
                items: 2,
                autoWidth: true,
            }
        }
    });
    $('.news-carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        margin: 24,
        navText: ["<i class='material-icons arr'>chevron_left</i>", "<i class='material-icons arr'>chevron_right</i>"]
    });
    if ($(window).width() < 1495) {
        $('.rank-panel-body').owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            autoWidth: true,
            margin: 15,
        });
        $('.rank-panel-body').addClass('owl-theme owl-carousel');
    }
    else { };
}
let resizeAdjust = function () {
    $(window).resize(function () {
        /*If browser resized, check width again */
        if ($(window).width() < 1495) {
            $('.rank-panel-body').owlCarousel({
                items: 1,
                dots: false,
                nav: false,
                autoWidth: true,
                margin: 15,
            });
            $('.rank-panel-body').addClass('owl-theme owl-carousel');
        }
        else {
            $('.rank-panel-body').trigger('destroy.owl.carousel');
            $('.rank-panel-body').removeClass('owl-theme owl-carousel');
        }
    });
}
let changeLoginTab = function () {

}
let slideAPPEnter = function () {
    $('.app_pre_panel').animate({
        top: 0
    }, 1000);
}
let slideAPPOut = function () {
    $('.app_d_close').click(function () {
        $('.app_pre_panel').animate({
            top: '-250px'
        }, 1000);
    })
    $('#app-fix-close').click(function () {
        $('.app_fix_panel').addClass('shrink');
    });

}
