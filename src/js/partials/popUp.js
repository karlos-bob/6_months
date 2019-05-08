$(document).ready(function(){

    $('.image-label').children('button').on('click', function() {
        $('.modal-wrap').addClass('visible');
    });

    $('.mask').on('click', function(){
        $('.modal-wrap').removeClass('visible');
    });


    // $('.image-label').children('button').on('click', function() {
    //     $('.image').removeAttr('id');
    //     $(this).closest('.image').find('.galleryPopUp').attr('id', 'active');
    //     sliderOpen();
    // });
    //
    // $('.popUpClose').on('click', function() {
    //     $(this).closest('.image').find('.galleryPopUp').removeAttr('id');
    //     $(".owl-carousel").trigger('destroy.owl.carousel');
    //     // $(this).closest('.galleryItem').find('.slick').removeClass('slick-open');
    // });
    //
    // $('.galleryPopUp').on('click', function(event) {
    //     var content = $('.popUpContent');
    //
    //     if(!content.is(event.target) && content.has(event.target).length === 0) {
    //         $('.galleryPopUp').removeAttr('id');
    //         $(".owl-carousel").trigger('destroy.owl.carousel');
    //     }
    // });
    //
    // function sliderOpen(){
    //     $(".owl-carousel").owlCarousel({
    //         items:1,
    //         loop:true,
    //         nav: true,
    //         navText: ["<i class=\"fas fa-angle-double-left\"></i>",
    //             "<i class=\"fas fa-angle-double-right\"></i>"],
    //     });
    // }
});


