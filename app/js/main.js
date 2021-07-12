// Mobile menu
$('.burger').on('click', function () {
    $('.burger').toggleClass('active');
    $('body').toggleClass('no_scroll');
    $('.header-menu').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.header-menu').removeClass('active');
        $('body').removeClass('no_scroll');
    }
    e.stopPropagation();
});


// Dropdown select
$('.dropdown-item').on('click', function(){
    $(this).closest('.d_select').find('.dropdown-toggle').text($(this).text());
});

$('.customer-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    // centerMode: true,
    arrows: false,
    variableWidth: true
});
$('.customNextBtn').on('click', function() {
    $('.customer-slider').slick('slickNext');
});