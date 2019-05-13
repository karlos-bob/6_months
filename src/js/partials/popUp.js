$(document).ready(function(){

    var modalText = {
        portfolio_1: {
            title: 'Roambi.com',
            detail: 'Roambi provides analytics, reporting, and business intelligence for companies' +
                    ' to use on the go. A Wordpress hosted site written in PHP and Javascript with' +
                    ' Hubspot Integration.',
            link: 'http://www.roambi.com'
        },
        portfolio_2: {
            title: 'Xuyambi.com',
            detail: 'Roambi provides analytics, reporting, and business intelligence for companies' +
            ' to use on the go. A Wordpress hosted site written in PHP and Javascript with' +
            ' Hubspot Integration.',
            link: 'http://www.roambi.com'
        },
        portfolio_3: {
            title: 'Roambi.com',
            detail: 'Roambi provides analytics, reporting, and business intelligence for companies' +
            ' to use on the go. A Wordpress hosted site written in PHP and Javascript with' +
            ' Hubspot Integration.',
            link: 'http://www.roambi.com'
        },
    };

    var carousel = $('#carousel'),
        slideWidth = 800,
        threshold = slideWidth/3,
        dragStart,
        dragEnd;

    setDimensions();

    $('#next').click(function(){ shiftSlide(-1) }); //РАБОАТЕТ
    $('#prev').click(function(){ shiftSlide(1) });  //РАБОАТЕТ

    carousel.on('mousedown', function(){
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function(){
            dragEnd = event.pageX;
            $(this).css('transform','translateX('+ dragPos() +'px)');
        });
        $(document).on('mouseup', function(){
            if (dragPos() > threshold) { return shiftSlide(1) }
            if (dragPos() < -threshold) { return shiftSlide(-1) }
            shiftSlide(0);
        });
    });

    function setDimensions() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            slideWidth = $(window).innerWidth();
        }
        $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        $('#carousel').css('left', slideWidth * -1)
    }

    function dragPos() {
        return dragEnd - dragStart;
    }

    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup')
        carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)');
        setTimeout(function(){
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.slide:first'));
            }
            carousel.removeClass('transition')
            carousel.css('transform','translateX(0px)');
        },700)
    }


    $('.image-label').children('button').on('click', function() {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });

    $('.popUpClose').on('click', function(){
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    $('.mask').on('click', function(){
        $('.modal-wrap').removeClass('visible');
    });

    function fillModal(id) {
        $('#modal .title').text(modalText[id].title);
        $('#modal .detail').text(modalText[id].detail);

        // if (modalText[id].link) $('#modal .label-button').addClass('visible')
        //     .parent()
        //     .attr('href', modalText[id].link);

        // $.each($('#modal li'), function(index, value ) {
        //     $(this).text(modalText[id].bullets[index]);
        // });
        $.each($('#modal .slide'), function(index, value) {
            $(this).css({
                background: "url('img/gallery-images/" + id + '-' + index + ".jpg') center center/cover",
                backgroundSize: 'cover'
            });
        });
    }


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


