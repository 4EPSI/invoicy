// Dropdown select
$('.dropdown-item').on('click', function(){
    $(this).closest('.d_select').find('.dropdown-toggle').text($(this).text());
});

$('.customer-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    // centerMode: true,
    variableWidth: true
});