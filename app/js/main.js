// Dropdown select
$('.dropdown-item').on('click', function(){
    $(this).closest('.d_select').find('.dropdown-toggle').text($(this).text());
});

$('.collapse').collapse();



$('.customer-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 1
});


// // customer slider
// $('.customer-slider').owlCarousel({
//     loop: true,
//     margin: 0,
//     nav: true,
//     dots: false,
//     mouseDrag: false,
//     items: 1,
//     // navText: [
//     //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//     //     '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     // ]
// });