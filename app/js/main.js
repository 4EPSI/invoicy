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