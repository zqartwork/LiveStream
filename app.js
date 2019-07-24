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