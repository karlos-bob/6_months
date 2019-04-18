$(document).ready(function(){
    // alert('test!');

    $('.galleryInfo').children('button').on('click', function() {
        $('.galleryItem').removeAttr('id');
        $(this).closest('.galleryItem').find('.galleryPopUp').attr('id', 'active');
        // $('#active').find('.slick').addClass('slick-open');
        sliderOpen();
        // sliderOpen(this);
    });

    $('.popUpClose').on('click', function() {
        $(this).closest('.galleryItem').find('.galleryPopUp').removeAttr('id');
        $(".owl-carousel").trigger('destroy.owl.carousel');
        // $(this).closest('.galleryItem').find('.slick').removeClass('slick-open');
    });

    $('.galleryPopUp').on('click', function(event) {
        var content = $('.popUpContent');

        if(!content.is(event.target) && content.has(event.target).length === 0) {
            $('.galleryPopUp').removeAttr('id');
            $(".owl-carousel").trigger('destroy.owl.carousel');
        }
    });

    function sliderOpen(){
        $(".owl-carousel").owlCarousel({
            items:1,
            loop:true,
            nav: true,
            navText: ["<i class=\"fas fa-angle-double-left\"></i>",
                "<i class=\"fas fa-angle-double-right\"></i>"],
        });
    }
});


